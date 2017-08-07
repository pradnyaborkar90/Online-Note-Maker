import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import {Component,OnChanges,Input,SimpleChange} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FirebaseObjectFactoryOpts } from "angularfire2/interfaces";
import * as firebase from 'firebase/app';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-universal',
  templateUrl: 'universal.component.html',
  styleUrls: ['universal.component.css']
})
export class UniversalComponent {
  notify: any;
  form;
 user: Observable<firebase.User>;
  items: FirebaseListObservable<Object[]>;

   msgVal: string = 'h';
  msgVal1: string = '';
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