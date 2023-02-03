import { FormControl, FormGroup } from '@angular/forms';
import { MOCK_TREATMENT_DATA } from 'src/mocks';
import { TreatmentFormKeys } from './enums';
import { validateTreatmentCode } from './utils';

describe('Validate Treatment Code', () => {
  let formGroup: FormGroup;

  beforeEach(() => {
    formGroup = new FormGroup({
      [TreatmentFormKeys.SearchQuery]: new FormControl('', [
        validateTreatmentCode(),
      ]),
    });
  });

  it('should return true if treatmentCode is valid', () => {
    const searchFormControl = formGroup.get(TreatmentFormKeys.SearchQuery);
    MOCK_TREATMENT_DATA.forEach((mock) => {
      searchFormControl.patchValue(mock.treatmentCode);
      expect(searchFormControl.valid).toBe(true);
    });
  });

  it('should return false if treatmentCode is invalid', () => {
    const invalidTreatmentCode = 'aabbcc';
    const searchFormControl = formGroup.get(TreatmentFormKeys.SearchQuery);
    searchFormControl.patchValue(invalidTreatmentCode);
    expect(searchFormControl.valid).toBe(false);
  });
});
