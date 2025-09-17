import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Withdraw } from './withdraw';

const routes: Routes = [{ path: '', component: Withdraw }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WithdrawRoutingModule { }
