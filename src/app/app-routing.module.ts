import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChecklistComponent } from './checklist/checklist.component';
import { ReportsComponent } from './reports/reports.component';
import { VendorComponent } from './vendor/vendor.component';

const routes: Routes = [
  { path: '', redirectTo: 'checklist', pathMatch: 'full' },
  { path: 'checklist', component: ChecklistComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'vendor', component: VendorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
