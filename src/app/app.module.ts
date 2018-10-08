import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ReadingComponent } from './reading/reading.component';
import { HomeComponent } from './home/home.component';
import { MeComponent } from './me/me.component';
import { EducationComponent } from './me/education/education.component';
import { WorkComponent } from './me/work/work.component';
import { JobComponent } from './me/work/job/job.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tabs/tab/tab.component';
import { TabsDropdownComponent } from './tabs-dropdown/tabs-dropdown.component';
import { DropdownItemComponent } from './tabs-dropdown/dropdown-item/dropdown-item.component';

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
    WorkComponent,
    JobComponent,
    TabsComponent,
    TabComponent,
    TabsDropdownComponent,
    DropdownItemComponent
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
