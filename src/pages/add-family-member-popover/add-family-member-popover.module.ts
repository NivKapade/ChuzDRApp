import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddFamilyMemberPopoverPage } from './add-family-member-popover';

@NgModule({
  declarations: [
    AddFamilyMemberPopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(AddFamilyMemberPopoverPage),
  ],
})
export class AddFamilyMemberPopoverPageModule {}
