import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SpinnerService {
  activationsCount = 0;
  activatedState = new Subject<boolean>();
  activeSpinner = true;

  start(): void {
    this.activeSpinner = true;
    this.activationsCount++;
    this.updateState();
  }

  stop(time): void {
    if (this.isActivated()) {
      window.setTimeout(() => {
        this.activeSpinner = false;
        window.setTimeout(() => {
          this.activationsCount--;
          this.updateState();
        }, 0);
      }, time);
    }
  }

  get activated(): Observable<boolean> {
    return this.activatedState;
  }

  private isActivated(): boolean {
    return this.activationsCount > 0;
  }

  private updateState(): void {
    this.activatedState.next(this.isActivated());
  }
}
