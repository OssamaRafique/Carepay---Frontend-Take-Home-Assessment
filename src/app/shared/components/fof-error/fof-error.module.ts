import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzResultModule } from 'ng-zorro-antd/result';
import { FofErrorComponent } from './fof-error.component';

/**
 * Stores all UI modules that are to be imported
 * @constant
 */
const UiModules = [NzResultModule, NzButtonModule];

@NgModule({
  declarations: [FofErrorComponent],
  imports: [CommonModule, RouterModule, ...UiModules],
})
export class FofErrorModule {}
