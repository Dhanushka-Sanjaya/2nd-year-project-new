import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { LoadingPage} from '../loading/loading';
import {ForgotpwPage} from '../forgotpw/forgotpw';
import  {MainPage} from '../main/main';
import {SendnPage} from '../sendn/sendn';
import {ChatPage} from '../chat/chat';






@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {

console.log(navParams.get('valm'));

  }


 LKS(){
 	this.navCtrl.push(LoginPage,{
 		val: 'hisjs'
 	})
 }

 LPF(){
 	 this.navCtrl.push(LoadingPage,{
 	 	valLO: 'asdad'
  	})
 }
LPFPF(){
 	 this.navCtrl.push(ForgotpwPage,{
 	 	valfp: 'asdadmm'
  	})
 }
SENDN(){
	this.navCtrl.push(SendnPage,{
		valsn: 'loadsendpage'
	})
}
CHAT(){
	this.navCtrl.push(ChatPage,{
		valct: 'loadchatpage'
	})
}
}
