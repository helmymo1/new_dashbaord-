import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WithdrawRoutingModule } from './withdraw-routing-module';
import { Withdraw } from './withdraw';
import { WithdrawFunds } from './pages/withdraw-funds/withdraw-funds';
import { WithdrawalForm } from './components/withdrawal-form/withdrawal-form';
import { WithdrawalHistory } from './components/withdrawal-history/withdrawal-history';


@NgModule({
  declarations: [
    Withdraw,
    WithdrawFunds,
    WithdrawalForm,
    WithdrawalHistory
  ],
  imports: [
    CommonModule,
    WithdrawRoutingModule
  ]
})
export class WithdrawModule { }
