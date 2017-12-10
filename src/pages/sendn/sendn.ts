import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SendnPage page.
 *
 
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


 






@IonicPage()
@Component({
  selector: 'page-sendn',
  templateUrl: 'sendn.html',
})
export class SendnPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  	console.log(navParams.get('valsn'))
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SendnPage');
  }


Gettotal(){

let val: any;
val = document.getElementById("News-Title");

console.log(val.value);	
}
}
