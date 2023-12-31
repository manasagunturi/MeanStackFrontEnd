import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(
    public http: HttpClient,
    ) { }

  postRegisrData(data:any){
    return this.http.post<any>('http://localhost:7000/api/v1/register',data)
  }
  getData(){
    
    return this.http.get<any>('http://localhost:7000/api/v1/users')
    }
    userLogin(data:any){
      const headers= new HttpHeaders({
        'Content-Type':'application/json'
      })
      return this.http.post<any>('http://localhost:7000/api/v1/login',data, {headers:headers, withCredentials:true})
    }

    showMyProfile(){
      const headers= new HttpHeaders({
        'Content-Type':'application/json'
      })
      return this.http.get<any>('http://localhost:7000/api/v1/myProfile', {headers:headers, withCredentials:true})
    }
}
