import { RequestOptions, Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


/*
  Generated class for the TokenServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TokenServiceProvider {
  url: string = "http://192.168.12.59:8080/CS-OTP/api";
  token: string = "";

  constructor(public http: Http) {

  }
  getOTPToken(){
    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('ApplicationId', '11105'); 
    headers.append('Accept', 'application/json');
  
     let options=new RequestOptions({ headers:headers });
     return new Promise(resolve => {
      this.http.get('http://45.127.106.51/CS-OTP/api/token/getToken',options).
 
      subscribe((data:Response )=> {
        debugger;
        let res:any=data.json();
        this.token = data.json().responseObject;
       
        resolve(res);
        
      }, err => {
        console.log(err);
      });
    });
  
   }

  getToken() {
 
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('ApplicationId', '11105'); 
    headers.append('Accept', 'application/json');
  
     let options=new RequestOptions({ headers:headers });
     return new Promise(resolve => {
      this.http.get('http://45.127.106.51/ChuzDr/api/token/getToken',options).
 
      subscribe((data:Response )=> {
        debugger;
        let res:any=data.json();
        this.token = data.json().responseObject;
        console.log("RES DATA :",this.token);
        resolve(res);
        
      }, err => {
        console.log(err);
      });
    });

  }
  

}
