import { TreatmentFormKeys } from '../enums';

/**
 * @interface
 * Represents FormInstance being used in treatments table page
 */
export interface ITreatmentForm {
  /**
   * Stores the search query value
   */
  [TreatmentFormKeys.SearchQuery]: string;
}
