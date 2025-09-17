import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Subscriptions } from './subscriptions';

const routes: Routes = [{ path: '', component: Subscriptions }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubscriptionsRoutingModule { }
