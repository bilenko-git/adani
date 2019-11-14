import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { SpinnerService } from '../shared/spinner/spinner.service';

@Component({
  selector: 'app-check-mode',
  template: `
    <div *ngIf="dataService.randomImage.processedImage" [ngClass]="{'hide': spinner.activeSpinner}">
      <app-head [disableMenu]="false"></app-head>
      <div class="main-title">
        Overlay screen
      </div>
      <div class="main-image">
        <div class="wrap-image">
          <img [src]="dataService.pathImage + dataService.randomImage.processedImage">
          <div *ngFor="let object of dataService.randomImage.objects; let i = index;"
               [ngStyle]="{
                'transform': 'translate('+ object.transform?.x +'px, '+ object.transform?.y +'px)',
                'width': object?.size?.width+'px',
                'height': object?.size?.height+'px',
                'top': object?.position?.top+'px',
                'left': object?.position?.left+'px'
               }"
               class="point"
          >
            <div class="point-in"></div>
          </div>
        </div>
      </div>
      <div class="control">
        <div class="nav-button" routerLink="/test">Next</div>
        <div class="nav-button" (click)="openModalContact()">Finish</div>
      </div>
    </div>

    <form class="wrap-shadow-modal modal-contact" *ngIf="isOpenModalContact" [formGroup]="mainForm" (ngSubmit)="sendFormContact()">
      <div class="wrap-modal">
        <div class="wrap-head-modal">
          <div class="title"></div>
          <svg class="close-modal" routerLink="/" viewBox="0 0 5.5562499 5.5562502">
            <path d="M5.237.319L.32 5.237m0-4.918l4.918 4.918" fill="#FFFFFF" stroke="#FFFFFF" stroke-width=".905"></path>
          </svg>
        </div>
        <div class="wrap-body-modal">
          <label>Name</label>
          <div>
            <input type="text" class="input" formControlName="company">
          </div>
          <label>E-mail(required)</label>
          <div>
            <input
              email
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$"
              type="email"
              class="input"
              formControlName="email"
            >
          </div>
          <section class="example-section">
            <mat-checkbox class="checkbox" formControlName="agree" required>
              I agree that my data will process in marketing purposes.
            </mat-checkbox>
          </section>
        </div>
        <div class="wrap-bottom-modal">
          <div [ngClass]="{'disabled': mainForm.invalid}"
               class="nav-button"
               (click)="sendFormContact()">
            <button type="submit"></button>
            Confirm
          </div>
        </div>
      </div>
    </form>
  `,
  styleUrls: ['./check-mode.scss']
})
export class CheckModeComponent implements OnInit {
  isOpenModalContact = false;
  mainForm: FormGroup;

  constructor(
    public router: Router,
    public dataService: DataService,
    private spinner: SpinnerService
  ) {}

  ngOnInit() {
    this.spinner.start();
    this.mainForm = new FormGroup({
      company: new FormControl(null),
      email: new FormControl(null, Validators.required),
      agree: new FormControl(null)
    });
    this.spinner.stop(500);
  }

  sendFormContact() {
    if (this.mainForm.valid) {
      this.dataService.saveContact(this.mainForm.value);
      this.router.navigate(['/']);
    }
  }

  openModalContact() {
    this.mainForm.reset();
    if (!this.isOpenModalContact) {
      this.isOpenModalContact = true;
    } else {
      this.isOpenModalContact = false;
    }
  }
}
