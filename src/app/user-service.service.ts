import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(public http: HttpClient) { }

  postRegisrData(data:any){
    return this.http.post<any>('http://localhost:7000/api/v1/register',data)
  }
  getData(){
    console.log("data")
    return this.http.get<any>('http://localhost:7000/api/v1/users')
    }
    userLogin(data:any){
      return this.http.post<any>('http://localhost:7000/api/v1/login',data)
    }
}
