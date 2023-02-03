import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreatmentsModule } from './pages/treatments/treatments.module';
import { FofErrorModule } from './shared/components';
import { LayoutModule } from './shared/components/layout/layout.module';

registerLocaleData(en);

/**
 * Stores All page podules that are to be imported
 * @constant
 */
const PageModules = [TreatmentsModule];
/**
 * Stores all UI modules that are to be imported
 * @constant
 */
const UiModules = [NzNotificationModule];
/**
 * Stores all shared modules that are to be imported
 * @constant
 */
const SharedModules = [LayoutModule, FofErrorModule];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ...PageModules,
    ...UiModules,
    ...SharedModules,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
