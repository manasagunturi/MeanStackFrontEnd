import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';

const routes: Routes = [
  {path:'',redirectTo:'signIn',pathMatch:'full'},
  {path:'signIn',component:SignInComponent},
  {path:'signUp',component:SignUpComponent},
  {path:'profile', component:ProfileViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
