import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StandbyModeComponent } from './standby-mode/standby-mode.component';
import { TestModeComponent } from './test-mode/test-mode.component';
import { CheckModeComponent } from './check-mode/check-mode.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    component: StandbyModeComponent
  }, {
    path: 'test',
    pathMatch: 'full',
    component: TestModeComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'check',
    pathMatch: 'full',
    component: CheckModeComponent,
    canActivate: [AuthGuard]
  }, {
    path: '**',
    redirectTo: '',
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule {}

export const routingComponents = [
  StandbyModeComponent
];
