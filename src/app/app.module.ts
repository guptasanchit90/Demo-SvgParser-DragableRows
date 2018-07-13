import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeDepartmentTableComponent } from './employee-department-table/employee-department-table.component';
import { SvgRenderComponent } from './svg-render/svg-render.component';
import { MatTableModule, MatTabsModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SortablejsModule } from 'angular-sortablejs';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeDepartmentTableComponent,
    SvgRenderComponent
  ],
  imports: [
    BrowserModule,
    SortablejsModule.forRoot({ animation: 150 }),
    BrowserAnimationsModule,
    MatTableModule,
    MatTabsModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
