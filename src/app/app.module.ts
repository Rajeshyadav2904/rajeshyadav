import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FreshComponent } from './fresh/fresh.component';
import { MobliesComponent } from './moblies/moblies.component';
import { ComputersComponent } from './computers/computers.component';
import { ToysComponent } from './toys/toys.component';
import { DesktopComponent } from './desktop/desktop.component';
import { MonitorComponent } from './monitor/monitor.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { BindingdemoComponent } from './bindingdemo/bindingdemo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsComponent } from './forms/forms.component';

@NgModule({
  declarations: [
    AppComponent,
    FreshComponent,
    MobliesComponent,
    ComputersComponent,
    ToysComponent,
    DesktopComponent,
    MonitorComponent,
    KeyboardComponent,
    BindingdemoComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
