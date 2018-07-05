import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ReadingComponent } from './reading/reading.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {
    path: 'reading',
    component: ReadingComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '**', 
    redirectTo: 'home', 
    pathMatch: 'full'
  },
]

@NgModule({
  declarations: [
    AppComponent,
    ReadingComponent,
    HomeComponent
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
