import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {RouterModule} from '@angular/router'
import {TechnicalComponent} from './technical/technical.component';
import {UniversalComponent} from 'app/universal/universal.component';
import { UniversalModule } from "app/universal/universal.module";
import {PersonalComponent} from "app/personal/personal.component"; 
import { TestComponent } from "app/per/test.component";
import { TestModule } from "app/per/test.module";
import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from './signup/signup.component';




export const firebaseConfig = {
  apiKey: "AIzaSyDVgCRlMvLwwTJeB3aBHpgwC66qkjPhnhE",
  authDomain: "angular4-4399b.firebaseapp.com",
    databaseURL: "https://angular4-4399b.firebaseio.com",
    projectId: "angular4-4399b",
    storageBucket: "angular4-4399b.appspot.com",
    messagingSenderId: "95412562238"
};
@NgModule({
 imports: [
   UniversalModule,
  TestModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot([
      {
      path:'technical',
      component: TechnicalComponent
    },
    {
      path:'universal',
      component: UniversalComponent
    },
    {
      path:'test',
      component: TestComponent
    },
    {
      path:'personal',
      component: PersonalComponent
    },
  {
    path:'menu',
    component:MenuComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
   
    ])
  ],
  declarations: [ AppComponent ,TechnicalComponent,PersonalComponent, MenuComponent, SignupComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule {}