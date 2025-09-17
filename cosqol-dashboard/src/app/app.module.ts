import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { App } from './app';
import { MainLayout } from './layout/main-layout/main-layout';
import { Sidebar } from './layout/sidebar/sidebar';
import { Header } from './layout/header/header';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    App,
    MainLayout,
    Sidebar,
    Header
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
