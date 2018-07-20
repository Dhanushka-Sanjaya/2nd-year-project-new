import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import  {AuthProvider} from '../../providers/auth/auth';
import  {ViewitemPage} from '../viewitem/viewitem';



/**
 * Generated class for the UpcomingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-upcoming',
  templateUrl: 'upcoming.html',
})
export class UpcomingPage {
    public data1 :any;
	  public items : any = [];
    public newsdate :any = [];
    private baseURI               : string  = "http://35.154.251.230/ionic/";
   
   constructor(public navCtrl: NavController,
               public http   : Http,
               public nameid : AuthProvider,
               public toastCtrl  : ToastController,
               public usname     : AuthProvider,
               ){}





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
          url      : any      = this.baseURI + "get-pending.php",
          varia = [this.nameid.logname];
          



      this.http.post(url, body, options)
      
      .map(res=>res.json())
      
      .subscribe(data => { 
        
       
      this.data1 = data;
    
    }
        )

    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpcomingPage');
  }


accept(param){

console.log(param);

        let idd : string = param;
        console.log(idd);
       let body     : string   = "&username=" + this.nameid.logname + "&news_id=" + idd,
           type     : string   = "application/x-www-form-urlencoded; charset=UTF-8",
           headers  : any      = new Headers({ 'Content-Type': type}),
           options  : any      = new RequestOptions({ headers: headers }),
           url      : any      = this.baseURI + "assign.php";
          

 this.http.post(url, body, options)
      .map(res=>res.json())
      .subscribe(data => {
       
         let verify : any = data;
        
        if (verify == 0) 
          
          {
            this.sendNotification('Can not assigned to you now... try later' + this.nameid.logname );
         }
        else {

          if (verify == 1) {
          this.sendNotification('news assigned to you. check assined news tab...');
            }
          
          else {
                 this.sendNotification('Something went wrong!');  
                  }
}

         

        });} 




  sendNotification(message)  : void
   {
      let notification = this.toastCtrl.create({
          message       : message,
          duration      : 2000
      });
      notification.present();
   }


  viewEntry(param)
   {
      console.log(param)
      this.navCtrl.push('viewitem', param);
   }





}


