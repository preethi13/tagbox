import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuComponent } from './menu/menu.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { ReportsComponent } from './reports/reports.component';
import { VendorComponent } from './vendor/vendor.component';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import {ToastModule} from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ChecklistComponent,
    ReportsComponent,
    VendorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PanelMenuModule,
    TableModule,
    HttpClientModule,
    DialogModule,
    FormsModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
