import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TestComponent } from 'app/per/test.component';
import {HttpModule} from '@angular/http';
import {ReactiveFormsModule} from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {RouterModule} from '@angular/router';
import {MenuComponent} from 'app/menu/menu.component';

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
    ReactiveFormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    
  ],
  declarations: [ TestComponent ],
  bootstrap: [ TestComponent ]
})
export class TestModule {}