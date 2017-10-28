import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { LoadingPage} from '../loading/loading';
import {ForgotpwPage} from '../forgotpw/forgotpw';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {
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

}
