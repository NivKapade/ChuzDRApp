import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { SettingServiceProvider } from './../../providers/setting-service/setting-service';
import { TokenServiceProvider } from './../../providers/token-service/token-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';
import { HowItWorksPage } from '../how-it-works/how-it-works';
import { TermsOfUsePage } from '../terms-of-use/terms-of-use';
import { ContactUsPage } from '../contact-us/contact-us';

SettingServiceProvider
/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  tokenRes: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private alertCtrl: AlertController,
              private tokenService:TokenServiceProvider,
              private settingService:SettingServiceProvider,
              private toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  navigateHowItWorks(){
      this.navCtrl.push(HowItWorksPage);
  }

  navigateTermsOfUse(){
    this.navCtrl.push(TermsOfUsePage);
  }

  navigateContactUs(){
    this.navCtrl.push(ContactUsPage);
  }
  presentPrompt() {
    let alert = this.alertCtrl.create({
      title: 'Add a Family Member',
      inputs: [
        {
          name: 'MemberName',
          placeholder: 'Enter name'
        },
        {
          name: 'MemberRelationship',
          placeholder: 'Enter relationship',
         
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Add member',
          handler: data => {
            console.log("AAA :",data.MemberName);
            console.log("BBB :",data.MemberRelationship);
            let user=data.MemberName;
            let relation=data.MemberRelationship;
            this.tokenService.getToken().then(data => {
              this.tokenRes = data;
             if(this.tokenRes.status=="success"){
                  this.settingService.addFamilyMember(user,relation,this.tokenRes.responseObject).then(data=>{
                         let res=data;
                         console.log("FAMILY :",res);

                  });
                   let toast = this.toastCtrl.create({
                              message: 'Family member added successfully.',
                              duration: 3000
                               });
                        toast.present();
             }else{
              let toast = this.toastCtrl.create({
                message: 'Family member not added .',
                duration: 3000
                 });
          toast.present();
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
      ]
    });
    alert.present();
  }
}
