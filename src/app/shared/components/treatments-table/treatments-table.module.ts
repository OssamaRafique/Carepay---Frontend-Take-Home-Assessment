import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreatmentsTableComponent } from './treatments-table.component';
import { NzTableModule } from 'ng-zorro-antd/table';

/**
 * Stores all UI modules that are to be imported
 * @constant
 */
const UiModules = [NzTableModule];

@NgModule({
  declarations: [TreatmentsTableComponent],
  imports: [CommonModule, ...UiModules],
  exports: [TreatmentsTableComponent],
})
export class TreatmentsTableModule {}
