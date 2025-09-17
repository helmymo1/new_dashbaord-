import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';

const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: 'overview', loadChildren: () => import('./features/dashboard/dashboard-module').then(m => m.DashboardModule) },
      { path: 'subscriptions', loadChildren: () => import('./features/subscriptions/subscriptions-module').then(m => m.SubscriptionsModule) },
      { path: 'profile', loadChildren: () => import('./features/profile/profile-module').then(m => m.ProfileModule) },
      { path: 'withdraw', loadChildren: () => import('./features/withdraw/withdraw-module').then(m => m.WithdrawModule) },
      { path: '', redirectTo: 'overview', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
