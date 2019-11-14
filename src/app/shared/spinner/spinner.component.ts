import { ChangeDetectorRef, Component } from '@angular/core';
import { SpinnerService } from './spinner.service';

@Component({
  selector: 'dk-spinner',
  styleUrls: ['./spinner.component.scss'],
  templateUrl: './spinner.component.html'
})
export class SpinnerComponent {
  activated: boolean;

  constructor(
    spinnerService: SpinnerService,
    changeDetector: ChangeDetectorRef
  ) {
    spinnerService.activated.subscribe(activated => {
      this.activated = activated;
      setTimeout(() => {
        changeDetector.detectChanges();
      });
    });
  }
}
