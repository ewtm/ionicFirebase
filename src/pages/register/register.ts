import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { HomePage } from '../home/home';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
 
})
export class RegisterPage {

  @ViewChild('username') user
  @ViewChild('password') password

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private fire: AngularFireAuth,
    private alertCtrl:AlertController
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  alert(message:string){
    this.alertCtrl.create({
      title:"Info !",
      subTitle:message,
      buttons:["OK"]
    }).present();
  }

  registerUser(){
    this.fire.auth.createUserWithEmailAndPassword(this.user.value,this.password.value)
    .then(data=>{
      console.log('got data',data);
      this.alert("Registrado");
      this.navCtrl.setRoot(HomePage);
    })
    .catch(error=>{
      console.log('got an error',error);
      this.alert(error.message);
    });
    console.log("Would register user with",this.user.value,this.password.value);
  }

}
