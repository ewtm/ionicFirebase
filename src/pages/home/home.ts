import { Component,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('username') uname;
  @ViewChild('password') password;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController
    ) {

  }

  signin(){
   /* console.log(this.uname.value,this.password.value);
    //alert("login: "+this.uname.value+ "\nsenha : " + this.password.value);
    if(this.uname.value =="admin" && this.password.value=="admin"){
    let alert = this.alertCtrl.create({
      title: 'Logado com sucesso',
      subTitle: 'Voce esta logado',
      buttons: ['OK']
    });
    alert.present();
    }else{
      let alert = this.alertCtrl.create({
        title: 'Login invalido',
        subTitle: 'Voce nao esta logado ',
        buttons: ['OK']
      });
      alert.present();

    }*/
    this.navCtrl.push(LoginPage);
  }

  register(){
    this.navCtrl.push(RegisterPage);
  }

}
