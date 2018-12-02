import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReadingComponent } from './reading/reading.component';
import { HomeComponent } from './home/home.component';
import { MeComponent } from './me/me.component';
import { EducationComponent } from './resume/education/education.component';
import { WorkComponent } from './resume/work/work.component';
import { ResumeComponent } from './resume/resume.component';
import { LinksComponent } from './links/links.component';
import { SharedModule } from './shared/shared.module';
import { SkillsComponent } from './resume/skills/skills.component';
import { HeaderComponent } from './header/header.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ProjectsModule } from './projects/projects.module';

@NgModule({
  declarations: [
    AppComponent,
    ReadingComponent,
    HomeComponent,
    MeComponent,
    EducationComponent,
    WorkComponent,
    ResumeComponent,
    LinksComponent,
    SkillsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ClarityModule,
    BrowserAnimationsModule,
    ProjectsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
