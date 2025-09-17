import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'dashboard', loadChildren: () => import('./features/dashboard/dashboard-module').then(m => m.DashboardModule) }, { path: 'subscriptions', loadChildren: () => import('./features/subscriptions/subscriptions-module').then(m => m.SubscriptionsModule) }, { path: 'profile', loadChildren: () => import('./features/profile/profile-module').then(m => m.ProfileModule) }, { path: 'withdraw', loadChildren: () => import('./features/withdraw/withdraw-module').then(m => m.WithdrawModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
