/**
 * @interface
 * Represents a object that will be used for filtering the data
 */
export interface ITreatmentFilter {
  /**
   * Search value
   */
  searchQuery: string;
  /**
   * Pointer of selected page inside table
   */
  pageIndex?: number;
  /**
   * Max number of items to display in table
   */
  pageLimit?: number;
}
