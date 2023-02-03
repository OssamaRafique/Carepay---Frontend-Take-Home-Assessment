import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { faker } from '@faker-js/faker';
import { MOCK_TREATMENT_DATA } from 'src/mocks';
import { TreatmentFormKeys, TreatmentRequestKeys } from '../../enums';
import {
  DEFAULT_PAGE_INDEX,
  DEFAULT_PAGE_LIMIT,
  TOTAL_TREATMENTS_COUNT_KEY,
  TreatmentService,
} from './treatment.service';

describe('TreatmentService', () => {
  let service: TreatmentService;
  let httpController: HttpTestingController;

  const apiPrefix: string = '/api';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TreatmentService],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(TreatmentService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getTreatments without any search query and return an array of ITreatment', () => {
    service.getTreatments().subscribe((res) => {
      expect(res).toEqual([MOCK_TREATMENT_DATA, MOCK_TREATMENT_DATA.length]);
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: `${apiPrefix}/treatments?${TreatmentRequestKeys.PageIndex}=${DEFAULT_PAGE_INDEX}&${TreatmentRequestKeys.Limit}=${DEFAULT_PAGE_LIMIT}`,
    });

    req.flush(MOCK_TREATMENT_DATA, {
      headers: {
        [TOTAL_TREATMENTS_COUNT_KEY]: MOCK_TREATMENT_DATA.length.toString(),
      },
    });
  });

  it('should call getTreatments with search query and it should add params to url and return an array of ITreatment', () => {
    const searchQuery: string = faker.internet.domainWord();

    service
      .getTreatments({
        searchQuery,
      })
      .subscribe((res) => {
        expect(res).toEqual([MOCK_TREATMENT_DATA, MOCK_TREATMENT_DATA.length]);
      });

    const req = httpController.expectOne({
      method: 'GET',
      url: `${apiPrefix}/treatments?${TreatmentRequestKeys.Search}=${searchQuery}&${TreatmentRequestKeys.PageIndex}=${DEFAULT_PAGE_INDEX}&${TreatmentRequestKeys.Limit}=${DEFAULT_PAGE_LIMIT}`,
    });

    req.flush(MOCK_TREATMENT_DATA, {
      headers: {
        [TOTAL_TREATMENTS_COUNT_KEY]: MOCK_TREATMENT_DATA.length.toString(),
      },
    });
  });

  it('should call api with correct page index & limit ', () => {
    const searchQuery: string = faker.internet.domainWord();
    const pageIndex: number = faker.datatype.number();
    const pageLimit: number = faker.datatype.number();

    service
      .getTreatments({
        searchQuery,
        pageIndex,
        pageLimit,
      })
      .subscribe((res) => {
        expect(res).toEqual([MOCK_TREATMENT_DATA, MOCK_TREATMENT_DATA.length]);
      });

    const req = httpController.expectOne({
      method: 'GET',
      url: `${apiPrefix}/treatments?${TreatmentRequestKeys.Search}=${searchQuery}&${TreatmentRequestKeys.PageIndex}=${pageIndex}&${TreatmentRequestKeys.Limit}=${pageLimit}`,
    });

    req.flush(MOCK_TREATMENT_DATA, {
      headers: {
        [TOTAL_TREATMENTS_COUNT_KEY]: MOCK_TREATMENT_DATA.length.toString(),
      },
    });
  });
});
