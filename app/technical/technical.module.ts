import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TechnicalComponent } from 'app/technical/technical.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {RouterModule} from '@angular/router';
import { UniversalComponent } from "app/universal/universal.component";


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
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot([
      {
      path:'universal',
      component: UniversalComponent
    }
   
    ])
  ],
  declarations: [ TechnicalComponent ],
  bootstrap: [ TechnicalComponent ]
})
export class TechnicalModule {}