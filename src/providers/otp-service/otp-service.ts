import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Headers } from '@angular/http';
import {  RequestOptions, Http, Response } from '@angular/http';
/*
  Generated class for the OtpServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OtpServiceProvider {
  url: string = "http://45.127.106.51/CS-OTP/api";
  tokenRes: any;
  token: string = "";
  data: Observable<any>;
  response: any;
  constructor(public http: Http) {
    console.log('Hello OtpServiceProvider Provider');
  }
  verifyOTP(mobile:number,otp: number,token:string) {
    console.log("OTP TOKEN :",token);
    debugger;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('ApplicationId', '11105');
    headers.append('Accept', 'application/json');
    headers.append('token', token);
    headers.append('BuId', '27807');
    headers.append('subBuId', '123');
    headers.append('environment', 'sit');
     headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Headers', "X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding");


    let opt = new RequestOptions({ headers: headers });
    return new Promise(resolve => {
      this.http.get(this.url + '/otp/validate/' + mobile + '?countryCode=91&otp='+otp, opt)
        .subscribe((data: Response) => {
          debugger;
          let res: any = data.json();
          this.token = data.json().responseObject;
          console.log("RES DATA :", this.token);
          resolve(res);

        }, err => {
          console.log(err);
        });
    });


  }

}
