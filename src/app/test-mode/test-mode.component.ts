import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { platformIcons } from '../shared/icons';
import { SpinnerService } from '../shared/spinner/spinner.service';

@Component({
  selector: 'app-test-mode',
  template: `
    <app-head [disableMenu]="false"></app-head>
    <div [ngClass]="{'hide': spinner.activeSpinner}">
      <div class="main-title">
        Detect location of tuberculosis patology
      </div>
      <div class="main-image">
        <div class="wrap-image"
             [ngClass]="{
              'top-b': !edge?.top,
              'bottom-b': !edge?.bottom,
              'left-b': !edge?.left,
              'right-b': !edge?.right
             }"
             #myBounds
          >
          <img [src]="dataService.pathImage + randomImage.notProcessedImage">
          <div
            *ngFor="let object of randomImage.objects; let i = index;"
            ngDraggable
            ngResizable
            rzHandles="all"
            class="point"
            [ngClass]="{'active': object.active}"
            (edge)="checkEdge($event)" [bounds]="myBounds" [inBounds]="inBounds"
            (endOffset)="onMoveEnd($event, i)"
            (rzStop)="onResizeStop($event, i)"
          >
            <div class="point-in"></div>
          </div>
        </div>
      </div>
      <div class="control">
        <div class="control__left">
          <div class="button"
               (click)="dataService.clearAll()"
               matTooltip="Please clean all selections"
               matTooltipPosition="above"
          >
            <div class="icon icon-spinner11"></div>
            <div class="button-name">
              Clean
            </div>
          </div>
          <div class="button"
               (click)="dataService.clearLast()"
               matTooltip="Please delete chosen location"
               matTooltipPosition="above"
          >
            <div class="icon icon-bin"></div>
            <div class="button-name">
              Delete
            </div>
          </div>
          <div class="button"
               (click)="dataService.addObject()"
               matTooltip="Please take selection and place on the location of tuberculosis patology"
               matTooltipPosition="above"
          >
            <div class="icon icon-pencil"></div>
            <div class="button-name">
              Select
            </div>
          </div>
        </div>
        <div class="control__right">
          <div class="nav-button" routerLink="/check">Check result</div>
          <div class="nav-button" routerLink="/">Finish</div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./test-mode.scss']
})
export class TestModeComponent {
  randomImage;
  inBounds = true;
  edge = {
    top: true,
    bottom: true,
    left: true,
    right: true
  };

  constructor(
    public router: Router,
    public dataService: DataService,
    private spinner: SpinnerService
  ) {
    this.randomImage = dataService.getRandomImage;
  }

  checkEdge(event) {
    this.edge = event;
  }

  onMoveEnd(e, i) {
    this.dataService.addProperties(e, i, 'transform');
  }

  onResizeStop(e, i) {
    this.dataService.addProperties(e.position, i, 'position');
    this.dataService.addProperties(e.size, i, 'size');
  }
}
