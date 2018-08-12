import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ReadingComponent } from './reading/reading.component';
import { HomeComponent } from './home/home.component';
import { MeComponent } from './me/me.component';
import { EducationComponent } from './me/education/education.component';
import { WorkComponent } from './me/work/work.component';

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
    WorkComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false },
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
