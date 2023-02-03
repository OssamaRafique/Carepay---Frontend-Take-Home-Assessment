import { AbstractControl, ValidatorFn } from '@angular/forms';

/**
 * Minimum number of identical letters required for a given treatmentCode to be valid
 * @constant
 */
const NO_OF_IDENTICAL_LETTERS_REQUIRED: number = 3;

/**
 * Validator function used by form control to validate treatment code
 * @function
 * @returns Validator function
 */
export function validateTreatmentCode(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const controlValueStr: string = control.value?.toLowerCase();
    const letterCountMap: Map<string, number> = new Map<string, number>();
    if (controlValueStr.length > 0) {
      for (let i = 0; i < controlValueStr.length; i++) {
        // Check if value is already there
        const currentLetter: string = controlValueStr[i];
        const existingValueInMap = letterCountMap.get(currentLetter);
        const updatedValue = existingValueInMap ? existingValueInMap + 1 : 1;

        letterCountMap.set(currentLetter, updatedValue);
        if (updatedValue >= NO_OF_IDENTICAL_LETTERS_REQUIRED) {
          return null;
        }
      }
      return {
        invalidTreamentCode: true,
      };
    }
    return null;
  };
}
