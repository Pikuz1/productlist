import {Injectable} from '@angular/core';
import {Http,Headers,RequestOptions,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
@Injectable()
export class FormDataServices 
{
  private token:string;
 private headers:Headers;
private _url = "http://localhost:57424/Services/CrossPlatform/SignUp/UserSignUpService.svc/AddUsersAsync";
//private _url = "https://jsonplaceholder.typicode.com/users";
   constructor(private _http:Http){
      this.headers = new Headers();
      this.headers.append('Content-Type', 'application/json');
        // this.headers.append('Accept', 'application/json');
        // this.headers.append('Authorization','Negotiate');
          
    //   this.headers.append('Access-Control-Allow-Origin', '*');
    //  this.headers.append('Access-Control-Allow-Headers', 'Content-Type, Accept');
    //   this.headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    //   this.headers.append('Access-Control-Allow-Credentials', 'true');

   }

AddUsers(model)
{
  alert(JSON.stringify(model));
return this._http.post(this._url, JSON.stringify(model),{headers:this.headers})
  .map(res => res.json());
  
}

//  getAllUsers(model)
//   {
//       //alert(this._url);
//   return this._http.post(this._url , JSON.stringify(model),{headers:this.headers})
//                       .map(res => res.json());
//   }
}
