import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import {Component} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FirebaseObjectFactoryOpts } from "angularfire2/interfaces";
import * as firebase from 'firebase/app';
import {FormGroup, FormControl} from '@angular/forms';
@Component({
  selector: 'app-technical',
  templateUrl: 'technical.component.html',
  styleUrls: ['technical.component.css'],

})
export class TechnicalComponent {
 user: Observable<firebase.User>;
  items: FirebaseListObservable<Object[]>;
  msgVal: string = 't';
form;
  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
     this.items = af.list('/users/{{msgVal}}', {
      query: {
        limitToLast: 50
      }
    });

    this.user = this.afAuth.authState;
  }
login() {
    this.afAuth.auth.signInAnonymously();
}

logout() {
    this.afAuth.auth.signOut();
}

Send(desc: string) {
    this.items.push({ message: desc});
    this.msgVal = '';
}
  delete(desc){
 this.items.remove(desc);
 console.log(desc);
}
onSubmit=function(user){
  this.items.push({user} );
this.form=new FormGroup({
    url: new FormControl(""),
    describe: new FormControl("")
  });
 
}
ngOnInit(){
  this.form=new FormGroup({
    url: new FormControl(""),
    describe: new FormControl("")
  });

}
}