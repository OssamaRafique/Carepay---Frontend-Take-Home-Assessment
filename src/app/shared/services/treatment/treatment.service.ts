import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TreatmentRequestKeys } from '../../enums';
import { ITreatment, ITreatmentFilter } from './../../models';

/**
 * Total Count Header Key
 * This will be used to determine total elements present in the database to show proper pagination
 * @constant
 */
export const TOTAL_TREATMENTS_COUNT_KEY: string = 'x-total-count';
/**
 * Stores default page limit
 * @constant
 */
export const DEFAULT_PAGE_LIMIT: number = 5;
/**
 * Stores default page index
 * @constant
 */
export const DEFAULT_PAGE_INDEX: number = 1;

/**
 * Treatment Service:
 * @description - Used to fetch data from the api
 */
@Injectable()
export class TreatmentService {
  /**
   * @private
   * Represents API Url prefix, In real world case this will be pulled from environment variable.
   */
  private readonly apiPrefixUrl = '/api';

  /**
   * Constructor of the class.
   * @param treatmentService - Instance of TreatmentService will be used to fetch the data from api
   * @returns Nothing
   */
  constructor(private _httpClient: HttpClient) {}

  /**
   * @public
   * @function
   * Function to fetch the data from api.
   * It supports filtering based on filters criteria
   * @param filterCriteria Optional
   * @returns Observable<[ITreatment[], number] First item will be array of treatments
   * and 2nd item represents total number of treatments
   */
  public getTreatments(
    filterCriteria?: ITreatmentFilter
  ): Observable<[ITreatment[], number]> {
    let params = this.createParamsForGetRequest(filterCriteria);

    return this._httpClient
      .get<HttpResponse<ITreatment[]>>(`${this.apiPrefixUrl}/treatments`, {
        params,
        observe: 'response' as 'body',
      })
      .pipe(
        map(({ body, headers }) => [
          body,
          parseInt(headers.get(TOTAL_TREATMENTS_COUNT_KEY)),
        ])
      );
  }

  /**
   * @private
   * @function
   * Function to generate params for search & pagination
   * @param filterCriteria
   * @returns HttpParams
   */
  private createParamsForGetRequest(
    filterCriteria: ITreatmentFilter
  ): HttpParams {
    let params = new HttpParams();

    if (filterCriteria && filterCriteria.searchQuery) {
      params = params.append(
        TreatmentRequestKeys.Search,
        filterCriteria.searchQuery
      );
    }

    params = params.append(
      TreatmentRequestKeys.PageIndex,
      filterCriteria && filterCriteria.pageIndex
        ? filterCriteria.pageIndex
        : DEFAULT_PAGE_INDEX
    );

    params = params.append(
      TreatmentRequestKeys.Limit,
      filterCriteria && filterCriteria.pageLimit
        ? filterCriteria.pageLimit
        : DEFAULT_PAGE_LIMIT
    );

    return params;
  }
}
