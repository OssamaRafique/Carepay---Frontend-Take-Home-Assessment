import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ITreatment } from '../../models';

/**
 * Treatment Table component
 */
@Component({
  selector: 'app-treatments-table',
  templateUrl: './treatments-table.component.html',
  styleUrls: ['./treatments-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreatmentsTableComponent {
  /**
   * Gets all treatment objects from parent to display on ui
   * @public
   */
  @Input() public treatmentData: ITreatment[];
  /**
   * Stores the total number of elements in this table on the server side
   * @public
   */
  @Input() public pageIndex: number;
  /**
   * Stores the index of table page
   * @public
   */
  @Input() public pageLimit: number;
  /**
   * Stores total records available
   * @public
   */
  @Input() public totalItems: number;
  /**
   * Stores the boolean flag for boolean
   * @public
   */
  @Input() public isLoading: boolean;
  /**
   * Outputs array of numbers to parent to inform about pagination data change
   * First element represents page index
   * Second element represents page limit
   * @public
   */
  @Output() public onPaginationChange: EventEmitter<[number, number]> =
    new EventEmitter<[number, number]>();

  /**
   * @function
   * Function used by ngFor TrackBy. It takes index and treatment obj and returns the treatmentCode
   * @param index index of item
   * @param element treatment Object
   * @returns treatmentCode of given Treatment Object
   */
  public trackByTreatmentCode(index: number, element: ITreatment): string {
    return element.treatmentCode;
  }

  /**
   * @function
   * Function being called by nz table when use interacts with pagination component
   * @returns Nothing
   */
  public onPaginationDataChange(): void {
    this.onPaginationChange.emit([this.pageIndex, this.pageLimit]);
  }
}
