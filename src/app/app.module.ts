import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

const appRoutes: Routes = [
  {
    path: 'bookshelf',
    component: ReadingComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'me',
    component: MeComponent
  },
  {
    path: 'resume',
    component: ResumeComponent
  },
  {
    path: 'links',
    component: LinksComponent
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

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
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false },
    ),
    BrowserModule,
    SharedModule,
    ClarityModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
