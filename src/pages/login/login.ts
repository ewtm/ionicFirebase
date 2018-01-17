import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { LoggedinPage } from '../loggedin/loggedin';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('username') user;
  @ViewChild('password') password;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fire:AngularFireAuth,
    private alertCtrl:AlertController
    
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  alert(message:string){
    this.alertCtrl.create({
      title:"Info !",
      subTitle:message,
      buttons:["OK"]
    }).present();
  }

  signinUser(){
    
    this.fire.auth.signInWithEmailAndPassword(this.user.value,this.password.value)
    .then(data=>{
      console.log('got some data',this.fire.auth.currentUser);
      this.alert("Voce esta logado com sucesso");
      this.navCtrl.setRoot(LoggedinPage);
    })
    .catch(error=>{
      console.log('got an error',error);
      this.alert(error.message);
    });

    console.log("Would sign in with",this.user.value,this.password.value)
  }
}
