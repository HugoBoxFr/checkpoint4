import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { AdminComponent } from './pages/admin/admin.component';
import { CvComponent } from './pages/cv/cv.component';
import { NavComponent } from './components/nav/nav.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { CvHeaderComponent } from './components/cv-header/cv-header.component';
import { CvExpComponent } from './components/cv-exp/cv-exp.component';
import { CvCoursesComponent } from './components/cv-courses/cv-courses.component';
import { CvSkillsComponent } from './components/cv-skills/cv-skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AdminComponent,
    CvComponent,
    NavComponent,
    PortfolioComponent,
    ProjectsComponent,
    FooterComponent,
    AboutComponent,
    SkillsComponent,
    CvHeaderComponent,
    CvExpComponent,
    CvCoursesComponent,
    CvSkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
