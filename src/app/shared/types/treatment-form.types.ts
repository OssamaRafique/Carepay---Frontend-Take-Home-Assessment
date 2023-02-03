import { FormControl } from '@angular/forms';
import { ITreatmentForm } from '../models';

/**
 * @type
 * Represent Form Controls For Treatment FormGroup
 */
export type TreatmentFormControls = {
  [key in keyof ITreatmentForm]: FormControl;
};
