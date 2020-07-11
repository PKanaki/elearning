import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { TutorComponent } from './tutor/tutor.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { UploadvideosComponent } from './uploadvideos/uploadvideos.component';

const routes: Routes = [
 {path:"",pathMatch:"full",redirectTo:"/home"},
  // {path:"",component:HeaderComponent},
  {path:"home",component:HomeComponent},
  {path:"header",component:HeaderComponent},
  {path:"footer",component:FooterComponent},
  {path:"student",component:StudentComponent},
  {path:"tutor",component:TutorComponent},
  {path:"uploadvideos",component:UploadvideosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
