import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { SpinnerService } from '../shared/spinner/spinner.service';

@Component({
  selector: 'app-standby-mode',
  template: `
    <app-head [disableMenu]="true"></app-head>
    <div *ngIf="dataService.images" [ngClass]="{'hide': spinner.activeSpinner}">
      <div class="main-title">
        Test application for AI chest diagnostics
      </div>
      <div class="main-image">
        <img [src]="dataService.pathImage + dataService.images[0].notProcessedImage">
        <div class="chest-test">
          CHEST TEST
          <div>Check our AI application</div>
        </div>
      </div>
      <div class="control">
        <div class="button-start" routerLink="/test">
          Start
        </div>
      </div>
      <div class="owl-carousel owl-theme preview-images" [dkCarousel]="dataService.carouselConfig">
        <div class="item" *ngFor="let image of dataService.images">
          <img [src]="dataService.pathImage + image.notProcessedImage">
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./standby-mode.scss']
})
export class StandbyModeComponent {
  constructor(
    public dataService: DataService,
    private spinner: SpinnerService
  ) {
    this.spinner.start();
    this.spinner.stop(1000);
  }
}
