import { OtpServiceProvider } from './../../providers/otp-service/otp-service';
import { TokenServiceProvider } from './../../providers/token-service/token-service';
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the OtpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-otp',
  templateUrl: 'otp.html',
})
export class OtpPage {

  public mobParam;
  private tokenRes;
  private otpRes;

  @ViewChild('otp') number;
  constructor(public navCtrl: NavController, navParams: NavParams,
    public toastCtrl: ToastController,private tokenService:TokenServiceProvider,private otpService:OtpServiceProvider) {
      console.log("Mobile " + navParams.get("mobile"));
      this.mobParam = navParams.get("mobile");

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OtpPage');
  }

  verifyOTP() {
    this.navCtrl.push(TabsPage).then(() => {
      const startIndex = this.navCtrl.getActive().index - 1;
      this.navCtrl.remove(startIndex, 1);
  //   debugger;
  //   console.log("OOOTP :",this.number.value);
    
  //   // if ((this.number.value as string).length != 5) {
  //   //   let toast = this.toastCtrl.create({
  //   //     message: 'Please enter a valid OTP',
  //   //     duration: 3000
  //   //   });
  //     // toast.present();
  //     this.tokenService.getOTPToken().then(data=>{
  //       this.tokenRes = data;
  //       let token=this.tokenRes.responseObject;
  //       console.log("OOOTP MOB :",this.mobParam);
  //       console.log("OOOTP :",this.number.value);
  //       console.log("OOOTP TOKEN :",token);
  //       if (this.tokenRes.status == "success") {
  //         // this.otpService.verifyOTP(this.mobParam,this.number.value,token).then(res => {
  //         //   let toast = this.toastCtrl.create({
  //         //     message: 'Verify OTP',
  //         //     duration: 3000
  //         //   });
  //         //   toast.present();
  //         //   this.otpRes=res;
  //         //   console.log("OOOTP OTPRES :",this.otpRes);
  //         //   if(this.otpRes.responseObject==1){
  //         //   this.navCtrl.push(TabsPage).then(() => {
  //         //     const startIndex = this.navCtrl.getActive().index - 1;
  //         //     this.navCtrl.remove(startIndex, 1);
  //         //   });
  //         // }else{
  //         //   this.navCtrl.push(TabsPage).then(() => {
  //         //     const startIndex = this.navCtrl.getActive().index - 1;
  //         //     this.navCtrl.remove(startIndex, 1);
  //         //   });
  //         //   // let toast = this.toastCtrl.create({
  //         //   //   message: 'OTP  failed to Verify.',
  //         //   //   duration: 3000
  //         //   // });
  //         //   // toast.present();
  //         // }
            
  //         // });
      
  //       //  this.navCtrl.push(OtpPage,{mobile:this.mob});
  //       this.navCtrl.push(TabsPage).then(() => {
  //         const startIndex = this.navCtrl.getActive().index - 1;
  //         this.navCtrl.remove(startIndex, 1);
  //       });
    
  //   } else {
    
  // }
  });

  }

}
