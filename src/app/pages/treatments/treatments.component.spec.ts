import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzTableModule } from 'ng-zorro-antd/table';
import { of, throwError } from 'rxjs';
import { TreatmentsTableModule } from 'src/app/shared/components/treatments-table/treatments-table.module';
import {
  DEFAULT_PAGE_INDEX,
  DEFAULT_PAGE_LIMIT,
  TreatmentService,
} from 'src/app/shared/services';
import { MOCK_TREATMENT_DATA } from 'src/mocks';
import { TreatmentsComponent } from './treatments.component';

describe('TreatmentsComponent', () => {
  let component: TreatmentsComponent;
  let fixture: ComponentFixture<TreatmentsComponent>;
  let spyNzNotificationService: NzNotificationService;
  let spyTreatmentService: TreatmentService;

  beforeEach(async () => {
    spyNzNotificationService = jasmine.createSpyObj(NzNotificationService, [
      'error',
    ]);
    spyTreatmentService = jasmine.createSpyObj(TreatmentService, {
      getTreatments: of([MOCK_TREATMENT_DATA, MOCK_TREATMENT_DATA.length]),
    });
    await TestBed.configureTestingModule({
      declarations: [TreatmentsComponent],
      providers: [
        {
          provide: NzNotificationService,
          useValue: spyNzNotificationService,
        },
        {
          provide: TreatmentService,
          useValue: spyTreatmentService,
        },
      ],
      imports: [
        NzButtonModule,
        NzTableModule,
        NzDividerModule,
        NzGridModule,
        NzInputModule,
        NzIconModule,
        NzFormModule,
        FormsModule,
        TreatmentsTableModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TreatmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getTreatments function in TreatmentService on after ngOnInit', () => {
    component.ngOnInit();
    expect(spyTreatmentService.getTreatments).toHaveBeenCalled();
    expect(component.treatmentData.length).toBe(MOCK_TREATMENT_DATA.length);
  });

  it('should call getTreatments function with searchQuery on valid search', fakeAsync(() => {
    const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
    const mockVal = MOCK_TREATMENT_DATA[0].treatmentCode;
    inputEl.value = mockVal;
    inputEl.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    tick(300);
    expect(spyTreatmentService.getTreatments).toHaveBeenCalledWith({
      searchQuery: mockVal,
      pageIndex: DEFAULT_PAGE_INDEX,
      pageLimit: DEFAULT_PAGE_LIMIT,
    });
  }));

  it('should call getTreatments function with correct page number on page change', fakeAsync(() => {
    const pageIndex: number = 2;
    const element = fixture.debugElement.queryAll(By.css('li'))[pageIndex]
      .nativeElement;
    element.click();
    tick(300);
    expect(spyTreatmentService.getTreatments).toHaveBeenCalledWith({
      searchQuery: undefined,
      pageIndex,
      pageLimit: DEFAULT_PAGE_LIMIT,
    });
  }));

  it('should call getTreatments function with correct page size on page size change', fakeAsync(() => {
    const element = fixture.debugElement.query(
      By.css('nz-select')
    ).nativeElement;
    element.click();
    fixture.detectChanges();
    tick(200);
    const selectOptionElement = fixture.debugElement.queryAll(
      By.css('nz-option-item')
    )[1].nativeElement;
    selectOptionElement.click();
    fixture.detectChanges();
    expect(spyTreatmentService.getTreatments).toHaveBeenCalledWith({
      searchQuery: undefined,
      pageIndex: DEFAULT_PAGE_INDEX,
      pageLimit: 20,
    });
  }));

  it('should not call the api on every input event change', fakeAsync(() => {
    const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
    const mockVal = MOCK_TREATMENT_DATA[0].treatmentCode;
    inputEl.value = mockVal;
    inputEl.dispatchEvent(new Event('input'));
    inputEl.value = mockVal;
    inputEl.dispatchEvent(new Event('input'));
    inputEl.value = mockVal;
    inputEl.dispatchEvent(new Event('input'));
    inputEl.value = mockVal;
    inputEl.dispatchEvent(new Event('input'));
    inputEl.value = mockVal;
    inputEl.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    tick(300);
    expect(spyTreatmentService.getTreatments).toHaveBeenCalledTimes(2);
  }));

  it('should not call the api if treatmentCode is invalid', fakeAsync(() => {
    const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
    const invalidTreatmentCode: string = 'aabbcc';
    inputEl.value = invalidTreatmentCode;
    inputEl.dispatchEvent(new Event('input'));
    tick(300);
    expect(spyTreatmentService.getTreatments).toHaveBeenCalledTimes(1);
  }));

  it('should display error message on screen if treatmentCode is invalid', fakeAsync(() => {
    const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
    const invalidTreatmentCode: string = 'aabbcc';
    inputEl.value = invalidTreatmentCode;
    inputEl.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    tick(300);
    const errorMessageEl = fixture.debugElement.query(
      By.css('.ant-form-item-explain-error')
    ).nativeElement;
    expect(errorMessageEl.innerHTML).toContain(
      'Please enter valid treatment code to perform search'
    );
  }));

  it('should display no data incase api returns empty array - [Integration Test]', fakeAsync(() => {
    spyTreatmentService.getTreatments = jasmine
      .createSpy()
      .and.returnValue(of([[], 0]));
    component.ngOnInit();
    fixture.detectChanges();
    const inputEl =
      fixture.debugElement.nativeElement.querySelector('nz-empty');
    expect(inputEl).toBeTruthy();
  }));

  it('should display the data in the table - [Integration Test]', () => {
    component.ngOnInit();
    fixture.detectChanges();
    const row = fixture.debugElement.nativeElement.querySelectorAll('tr')[1];
    expect(row.innerHTML).toContain(MOCK_TREATMENT_DATA[0].treatmentCode);
  });

  it('should display error notification if api throws an error', fakeAsync(() => {
    spyTreatmentService.getTreatments = jasmine
      .createSpy()
      .and.returnValue(throwError(() => new Error()));
    component.ngOnInit();
    fixture.detectChanges();
    tick(300);
    expect(spyNzNotificationService.error).toHaveBeenCalled();
  }));
  it('should display the data in the table', () => {
    component.ngOnInit();
    fixture.detectChanges();
    const row = fixture.debugElement.nativeElement.querySelectorAll('tr')[1];
    expect(row.innerHTML).toContain(MOCK_TREATMENT_DATA[0].treatmentCode);
  });
});
