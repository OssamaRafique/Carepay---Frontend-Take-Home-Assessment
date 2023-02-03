import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreatmentsComponent } from './pages/treatments/treatments.component';
import { FofErrorComponent } from './shared/components';

export const routes: Routes = [
  {
    path: '',
    component: TreatmentsComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    component: FofErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
