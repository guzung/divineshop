import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {routing} from './app.routing';
import { LoginComponent } from './login/login.component';
import { DivineHomeComponent } from './divine-home/divine-home.component';
import {AuthGuard} from './services/auth.guard';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {NgxSpinnerModule} from 'ngx-spinner';
import {DeferLoadModule} from '@trademe/ng-defer-load';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DivineHomeComponent
  ],
  imports: [
    CommonModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    DeferLoadModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
