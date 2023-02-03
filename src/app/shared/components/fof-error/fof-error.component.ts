import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * 404 Error Component To Be displayed if path isn't valid
 */
@Component({
  selector: 'app-fof-error',
  templateUrl: './fof-error.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FofErrorComponent {}
