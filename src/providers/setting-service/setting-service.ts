import { RequestOptions, Http, Response ,Headers} from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SettingServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SettingServiceProvider {
   response:any;
  constructor(public http: Http) {
    console.log('Hello SettingServiceProvider Provider');
  }
  addFamilyMember(usrname:string,relation:string,token:string){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('ApplicationId', '11105');
    headers.append('Accept', 'application/json');
    headers.append('token', token);
  
    let opt = new RequestOptions({ headers: headers });
    let body={"FamilyMember_Id":"0", "UserId":7,"MemberName":usrname,"MemberRelationship":relation};
    return new Promise(resolve => {
    this.http.post('http://45.127.106.51/ChuzDr/api/web/familyMember?',body,opt)  .subscribe((data: Response) => {
      debugger;
      let res = data.json();
     
      console.log("RES DATA Add family :", res.status);
      // resolve(this.response);
      resolve(res);

    }, err => {
      console.log(err);
    });
  });
  }
  
}
