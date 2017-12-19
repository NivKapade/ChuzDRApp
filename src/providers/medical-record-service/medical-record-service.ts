import { Injectable } from '@angular/core';
import { RequestOptions, Http, Response } from '@angular/http';
import { Headers } from '@angular/http';

/*
  Generated class for the MedicalRecordServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MedicalRecordServiceProvider {
  response:any;
  constructor(public http: Http) {
    console.log('Hello MedicalRecordServiceProvider Provider');
  }
  getMembers(data) {
    let token = data;
    console.log("token  :",token);
     let headers = new Headers();
     headers.append('Content-Type', 'application/json');
     headers.append('ApplicationId', '11105'); 
     headers.append('Accept', 'application/json');
     headers.append('Token', token);
      let options=new RequestOptions({ headers:headers });
      return new Promise(resolve => {
       this.http.get('http://192.168.12.250:8080/ChuzDr/api/web/familyMember?userId=7&organizationId=1',options).
  
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
