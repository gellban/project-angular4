import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjectComponent } from './components/project/project.component';
import { AboutComponent } from './components/about/about.component';
//import forms module
import { FormsModule } from '@angular/forms';
//import ajax
import { HttpModule } from '@angular/http';

//import router
import { RouterModule, Routes} from '@angular/router';
//create our routes
const appRoutes: Routes=[
  {path:'',component:ProjectComponent},
  {path:'about',component:AboutComponent}
]
//end

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    AboutComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,//added or you will get the following error: Can't bind to 'ngModel' since it isn't a known property of 'input'
    HttpModule,//added
    RouterModule.forRoot(appRoutes)//import routes and pass our routes projects and about
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
