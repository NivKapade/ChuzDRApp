import { Injectable } from '@angular/core';
import { RequestOptions, Http, Response } from '@angular/http';
import { Headers } from '@angular/http';

/*
  Generated class for the HomeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HomeProvider {
  token: string = '';
  response: any = [];
  constructor(public http: Http) {
    console.log('Hello HomeProvider Provider');
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

     getPost(data) {
        let token = data;
        console.log("token  :",token);
         let headers = new Headers();
         headers.append('Content-Type', 'application/json');
         headers.append('ApplicationId', '11105'); 
         headers.append('Accept', 'application/json');
         headers.append('Token', token);
          let options=new RequestOptions({ headers:headers });
          return new Promise(resolve => {
           this.http.get('http://45.127.106.51/ChuzDr/api/web/post?organizationId=0&postTypeId=0',options).
      
           subscribe((data:Response )=> {
             debugger;
             let res:any=data.json();
             this.response = data.json().responseListObject;
             console.log("RES DATA :",this.response);
             resolve(this.response);
             
           }, err => {
             console.log(err);
           });
         });
     
       }
 
}
