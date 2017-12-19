import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { OtpPage } from './../otp/otp';
import { LoadingController } from 'ionic-angular';
import { LoginServiceProvider } from '../../providers/login-service/login-service';
import { TokenServiceProvider } from '../../providers/token-service/token-service';




/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loader: any;
  mob: number;
  response: any;
  @ViewChild('mobile') number;
  constructor(private navCtrl: NavController,
    private navParams: NavParams,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private loginService: LoginServiceProvider,
    private tokenService: TokenServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  login() {
    if ((this.number.value as string).length != 10) {
      let toast = this.toastCtrl.create({
        message: 'Please enter a valid mobile number',
        duration: 3000
      });
      toast.present();
    } else {
      this.navCtrl.push(OtpPage,{mobile:this.mob});
      // this.mob = this.number.value as number;
      // this.tokenService.getOTPToken().then(data => {
      //   this.response = data;
      //   if (this.response.status == "success") {
      //     // this.loginService.login(this.mob).then(data => {
      //     //   let toast = this.toastCtrl.create({
      //     //     message: 'login',
      //     //     duration: 3000
      //     //   });
      //     //   toast.present();
            
      //     // });
      //     this.navCtrl.push(OtpPage,{mobile:this.mob});
        // } else {
        //   let toast = this.toastCtrl.create({
        //     message: 'login fail',
        //     duration: 3000
        //   });
        //   toast.present();
        // }
      // });

    }
  }










  // this.navCtrl.push(OtpPage, {
  //   mobile: this.number.value
  // }).then(() => {
  //   const startIndex = this.navCtrl.getActive().index - 1;
  //   this.navCtrl.remove(startIndex, 1);
  // });
  // this.presentLoading();




  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
      // duration: 3000
    });
    this.loader.present();

  }


}
