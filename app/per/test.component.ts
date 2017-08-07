import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import {Component} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FirebaseObjectFactoryOpts } from "angularfire2/interfaces";
import * as firebase from 'firebase/app';
import {FormGroup, FormControl} from '@angular/forms';
import { User } from "firebase/app";

@Component({
  selector: 'app-test',
  templateUrl: 'test.component.html',
  styleUrls: ['test.component.css']
})
export class TestComponent {
 user: Observable<firebase.User>;
  items: FirebaseListObservable<Object[]>;
form1;
  msgVal: string = 't';
  currentUser: User;
  uid:string;
  username:string="";
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
    this.msgVal=desc;
    
}
delete(desc){
 this.items.remove(desc);
 console.log(desc);
}
onSubmit=function(user){
  this.items.push({user} );
this.form1=new FormGroup({
    url: new FormControl(""),
    describe: new FormControl("")
  });
 
}
ngOnInit(){
  this.form1=new FormGroup({
    url: new FormControl(""),
    describe: new FormControl("")
  });

}
 
}