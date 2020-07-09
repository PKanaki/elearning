import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { TutorComponent } from './tutor/tutor.component';
import { FooterComponent } from './components/footer/footer.component';

const routes: Routes = [
  {path:"header",pathMatch:"full",redirectTo:"header"},
  {path:"footer",component:FooterComponent},
  {path:"student",component:StudentComponent},
  {path:"tutor",component:TutorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
