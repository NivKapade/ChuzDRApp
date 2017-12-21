import { SettingServiceProvider } from './../../providers/setting-service/setting-service';
import { TokenServiceProvider } from './../../providers/token-service/token-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';

/**
 * Generated class for the AddFamilyMemberPopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-family-member-popover',
  templateUrl: 'add-family-member-popover.html',
})
export class AddFamilyMemberPopoverPage {
  tokenRes: any;
  memberName: any;
  memberRelationship: any;
    constructor(public navCtrl: NavController, 
                public navParams: NavParams,
                private tokenService:TokenServiceProvider,
                private settingService:SettingServiceProvider) {
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddFamilyMemberPopoverPage');
  }
  addFamilyMember(){
    let user=this.memberName;
    let relation=this.memberRelationship;
    console.log(this.memberName);
    console.log(this.memberRelationship);
    this.tokenService.getToken().then(data => {
      this.tokenRes = data;
     if(this.tokenRes.status=="success"){
          this.settingService.addFamilyMember(user,relation,this.tokenRes.responseObject).then(data=>{
                 let res=data;
                 console.log("FAMILY :",res);
          });
     }else{
        
     }
    });
    // if (User.isValid(data.username, data.password)) {
    //   // logged in!
    // } else {
    //   // invalid login
    //   return false;
    // }
  }

}
