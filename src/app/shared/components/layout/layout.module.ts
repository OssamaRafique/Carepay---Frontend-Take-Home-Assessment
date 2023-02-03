import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { LayoutComponent } from './layout.component';

/**
 * Stores all UI modules that are to be imported
 * @constant
 */
const UiModules = [NzLayoutModule, NzMenuModule];

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, RouterModule, ...UiModules],
  exports: [LayoutComponent],
})
export class LayoutModule {}
