import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';
import { TreatmentsTableModule } from 'src/app/shared/components/treatments-table/treatments-table.module';
import { TreatmentService } from 'src/app/shared/services';
import { TreatmentsComponent } from './treatments.component';

/**
 * Stores all UI modules that are to be imported
 * @constant
 */
const UiModules = [
  NzButtonModule,
  NzGridModule,
  NzInputModule,
  NzIconModule,
  NzFormModule,
];
/**
 * Stores all shared modules that are to be imported
 * @constant
 */
const SharedModules = [TreatmentsTableModule];

@NgModule({
  declarations: [TreatmentsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...UiModules,
    ...SharedModules,
  ],
  providers: [TreatmentService],
  exports: [TreatmentsComponent],
})
export class TreatmentsModule {}
