/**
 * @interface
 * Represents a treatment
 */
export interface ITreatment {
  /**
   * Treatment code of given treatment
   */
  treatmentCode: string;
  /**
   * Patient involved in treatment
   */
  patient: string;
  /**
   * Time and date of treatment
   */
  treatmentDate: string;
}
