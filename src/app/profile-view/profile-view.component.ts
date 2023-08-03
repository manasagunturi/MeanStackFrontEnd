import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {
userData:any
  constructor(
    private service:UserServiceService,
  ) { }

  ngOnInit(): void {

    this.service.showMyProfile().subscribe((res:any)=>{
      console.log(res.data);
      
      this.userData=res.data.user
      
    })

  }


}
