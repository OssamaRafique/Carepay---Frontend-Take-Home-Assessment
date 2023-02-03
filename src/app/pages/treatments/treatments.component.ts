import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControlStatus,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import {
  BehaviorSubject,
  catchError,
  combineLatest,
  concat,
  debounceTime,
  distinctUntilChanged,
  EMPTY,
  first,
  of,
  startWith,
  Subject,
  switchMap,
  take,
  takeUntil,
  tap,
} from 'rxjs';
import { TreatmentFormKeys } from 'src/app/shared/enums';
import { ITreatment } from 'src/app/shared/models';
import {
  DEFAULT_PAGE_INDEX,
  DEFAULT_PAGE_LIMIT,
  TreatmentService,
} from 'src/app/shared/services';
import { TreatmentFormControls } from 'src/app/shared/types';
import { validateTreatmentCode } from 'src/app/shared/utils';

/**
 * REGEX for validating string with no white spaces
 */
const NO_WHITE_SPACE_REGEX: RegExp = /^\S*$/;

/**
 * Treatments component responsible for displaying the data on ui
 */
@Component({
  selector: 'app-treatments',
  templateUrl: './treatments.component.html',
  styleUrls: ['./treatments.component.scss'],
})
export class TreatmentsComponent implements OnInit, OnDestroy {
  /**
   * TreatmentFormEnum being used in template to avoid hardcoding form keys into html
   * @public
   * @readonly
   */
  public readonly treatmentFormKeysEnum = TreatmentFormKeys;
  /**
   * FormGroup Instance being used for search query
   * @public
   */
  public formGroup: FormGroup<TreatmentFormControls>;
  /**
   * Stores all treatment objects receieved form api in an array
   * @public
   */
  public treatmentData: ITreatment[] = [];
  /**
   * Boolean flag that represents if data is being fetched
   * @public
   */
  public isLoading: boolean = true;
  /**
   * Stores the total number of elements in this table on the server side
   * @public
   */
  public pageIndex: number = DEFAULT_PAGE_INDEX;
  /**
   * Stores the index of table page
   * @public
   */
  public pageLimit: number = DEFAULT_PAGE_LIMIT;
  /**
   * Stores the total number of elements in this table on the server side
   * @public
   */
  public totalItems: number;
  /**
   * Stream that emits some value whenever data needs to be updated
   * @private
   */
  private _updateData$: BehaviorSubject<void> = new BehaviorSubject<void>(null);
  /**
   * Stream that emits some value on component destruction
   * Will be used to unsubscribe to the streams
   * @private
   */
  private _destroy$: Subject<void> = new Subject<void>();

  /**
   * Constructor of the class.
   * @param _formbuilder - Instance of FormBuilder will be used to create reactive form
   * @param _notificationService - Instance of Notification will be used to show error/success notifications
   * @param _treatmentService - Instance of TreatmentService will be used to fetch the data from api
   * @returns Nothing
   */
  constructor(
    private _formBuilder: FormBuilder,
    private _notificationService: NzNotificationService,
    private _treatmentService: TreatmentService
  ) {
    this.initForm();
  }

  /**
   * Hook being used to fetch the data onload
   * @remarks
   * This method is part of the angular lifecycle {@link https://angular.io/api/core/OnInit}.
   * @returns Nothing
   */
  ngOnInit(): void {
    this.subscribeToTreatmentDataStream();
  }

  /**
   * Hook being used to unsubscribe to streams
   * @remarks
   * This method is part of the angular lifecycle {@link https://angular.io/api/core/OnDestroy}.
   * @returns Nothing
   */
  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  /**
   * @public
   * @getter
   * Returns FormControl Instance Of Search Query
   */
  public get searchQueryFormControl(): AbstractControl {
    return this.formGroup.get(TreatmentFormKeys.SearchQuery);
  }

  /**
   * @function
   * Function being called by treatment table component through event emitter to let parent know about pagination data update
   * @param [pageIned, pageLimit]
   * @returns Nothing
   */
  public onPaginationDataChange([pageIndex, pageLimit]: [
    number,
    number
  ]): void {
    this.pageIndex = pageIndex;
    this.pageLimit = pageLimit;
    this._updateData$.next();
  }

  /**
   * @function
   * Subscribe to searchQuery Value, status Sream, update data stream and calls the api if user stops typing for 300ms
   * Note: Debounce is not being applied to first call due to take operator used below
   * @returns Nothing
   */
  private subscribeToTreatmentDataStream(): void {
    combineLatest([
      concat(
        of([]).pipe(take(1)),
        combineLatest([
          this.searchQueryFormControl.statusChanges,
          this.searchQueryFormControl.valueChanges,
        ]).pipe(debounceTime(300), distinctUntilChanged())
      ),
      this._updateData$,
    ])
      .pipe(
        takeUntil(this._destroy$),
        tap(([[status]]) => {
          if ((status as FormControlStatus) === 'VALID') this.isLoading = true;
        }),
        switchMap(([[status, searchQuery]]) => {
          if ((status as FormControlStatus) === 'INVALID') return EMPTY;
          return this._treatmentService
            .getTreatments({
              searchQuery,
              pageIndex: this.pageIndex,
              pageLimit: this.pageLimit,
            })
            .pipe(
              first(),
              catchError((err: HttpErrorResponse) => {
                this._notificationService.error(
                  'Oops!',
                  'An error occured while fetching the data'
                );
                return of([]);
              })
            );
        })
      )
      .subscribe(([data, totalItems]) => {
        if (data) {
          this.treatmentData = data;
          this.totalItems = totalItems;
        }
        this.isLoading = false;
      });
  }

  /**
   * @function
   * Used to initiate formgroup instance
   * @returns Nothing
   */
  private initForm(): void {
    this.formGroup = this._formBuilder.group({
      [TreatmentFormKeys.SearchQuery]: this._formBuilder.control('', {
        validators: [
          Validators.pattern(NO_WHITE_SPACE_REGEX),
          validateTreatmentCode(),
        ],
      }),
    });
  }
}
