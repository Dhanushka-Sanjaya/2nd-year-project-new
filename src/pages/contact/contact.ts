import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import  { HomePage} from '../home/home';


function gettotal(n1,n2){

return n1+n2;	
}

console.log(gettotal(4,8))

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }

 LUM(){
 	this.navCtrl.push(HomePage,{
 		valm: 'hisjs'
 	})
 }



}
