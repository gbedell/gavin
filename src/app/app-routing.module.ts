import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LinksComponent } from './links/links.component';
import { MeComponent } from './me/me.component';
import { ReadingComponent } from './reading/reading.component';
import { ResumeComponent } from './resume/resume.component';

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
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
