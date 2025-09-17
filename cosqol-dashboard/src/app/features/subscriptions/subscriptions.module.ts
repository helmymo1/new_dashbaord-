import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscriptionsRoutingModule } from './subscriptions-routing.module';
import { Subscriptions } from './subscriptions';
import { SubscriptionList } from './pages/subscription-list/subscription-list';
import { SubscriptionTable } from './components/subscription-table/subscription-table';


@NgModule({
  declarations: [
    Subscriptions,
    SubscriptionList,
    SubscriptionTable
  ],
  imports: [
    CommonModule,
    SubscriptionsRoutingModule
  ]
})
export class SubscriptionsModule { }
