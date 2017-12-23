import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserLocationPopoverPage } from './user-location-popover';

@NgModule({
  declarations: [
    UserLocationPopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(UserLocationPopoverPage),
  ],
})
export class UserLocationPopoverPageModule {}
