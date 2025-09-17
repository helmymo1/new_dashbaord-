import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Overview } from './pages/overview/overview';

const routes: Routes = [{ path: '', component: Overview }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
