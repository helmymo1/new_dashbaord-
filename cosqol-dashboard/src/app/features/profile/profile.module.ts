import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { Profile } from './profile';
import { ProfileView } from './pages/profile-view/profile-view';
import { BarcodeExtensionModal } from './components/barcode-extension-modal/barcode-extension-modal';


@NgModule({
  declarations: [
    Profile,
    ProfileView,
    BarcodeExtensionModal
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
