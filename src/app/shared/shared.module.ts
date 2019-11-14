import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CarouselDirective } from './carousel/carousel.directive';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './spinner/spinner.component';
import { SpinnerService } from './spinner/spinner.service';

@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    MatCheckboxModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ImportExportModule {}

@NgModule({
  declarations: [
    CarouselDirective,
    SpinnerComponent
  ],
  exports: [
    ImportExportModule,
    CommonModule,
    CarouselDirective,
    SpinnerComponent
  ],
  imports: [
    ImportExportModule,
    CommonModule
  ],
  providers: [
    SpinnerService
  ]
})
export class SharedModule { }
