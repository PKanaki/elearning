import { DashcoursesService } from './services/dashcourses.service';
import { AuthserviceService } from './services/authservice.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { JumbotronsComponent } from './components/jumbotrons/jumbotrons.component';
import { CardsComponent } from './components/cards/cards.component';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { StudentComponent } from './student/student.component';
import { TutorComponent } from './tutor/tutor.component';
import { StarthomeComponent } from './starthome/starthome.component';
import { PgmcourseserviceService } from './services/pgmcourseservice.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    JumbotronsComponent,
    CardsComponent,
    StudentComponent,
    TutorComponent,
    StarthomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthserviceService, DashcoursesService,PgmcourseserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
