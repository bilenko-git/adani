import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app.routing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';
import { HeadComponent } from './head/head.component';
import { AngularDraggableModule } from 'angular2-draggable';
import { AppComponent } from './app.component';
import { StandbyModeComponent } from './standby-mode/standby-mode.component';
import { TestModeComponent } from './test-mode/test-mode.component';
import { CheckModeComponent } from './check-mode/check-mode.component';
import { AuthGuard } from './auth.guard';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    routingComponents,
    AppComponent,
    HeadComponent,
    StandbyModeComponent,
    TestModeComponent,
    CheckModeComponent
  ],
  imports: [
    NoopAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    AngularDraggableModule
  ],
  providers: [
    AuthGuard,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
