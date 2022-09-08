import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { LkrFormatterPipe } from './shared/lkr-formatter.pipe';
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    LkrFormatterPipe,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
