import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ModalController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import  {AuthProvider} from '../../providers/auth/auth';
import  { CompnewsPage } from '../compnews/compnews'; 

/**
 * Generated class for the AssinedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-assined',
  templateUrl: 'assined.html',
})
export class AssinedPage {
	public asidata     : any;
     private baseURI : string  = "http://35.154.251.230/ionic/";

  constructor(public navCtrl: NavController,
               public http   : Http,
               public nameid : AuthProvider,
               public modal : ModalController){}




ionViewWillEnter()
   {
      this.load();
   }

   // Retrieve the JSON encoded data from the remote server
   // Using Angular's Http class and an Observable - then
   // assign this to the items array for rendering to the HTML template
   load()


   {    
      let body     : string   = "&username=" + this.nameid.logname,
           type    : string   = "application/x-www-form-urlencoded; charset=UTF-8",
          headers  : any      = new Headers({ 'Content-Type': type}),
          options  : any      = new RequestOptions({ headers: headers }),
          url      : any      = this.baseURI + "get-mynews.php";
          

         // console.log(body);


      this.http.post(url, body, options)
      
      .map(res=>res.json())
      
      .subscribe(data => { 
        
      
      this.asidata = data;
    }
        )}


  

 ionViewDidLoad() {
    console.log('ionViewDidLoad UpcomingPage');
  }



  completen(param)
   {
       this.navCtrl.push('CompnewsPage');


      const completeModal = this.modal.create('CompnewsPage');


      completeModal.present();
   }

viewEntry(param)
   {
      console.log(param)
      this.navCtrl.push('viewitem', param);
   
   }

}




  
