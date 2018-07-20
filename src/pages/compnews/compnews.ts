import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { NeidProvider } from '../../providers/neid/neid';
import { Http, Headers, RequestOptions } from '@angular/http';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import  {AuthProvider} from '../../providers/auth/auth';

/**
 * Generated class for the CompnewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-compnews',
  templateUrl: 'compnews.html',
})
export class CompnewsPage {
   public form                   : FormGroup;
   public usernaname             : any;
   public password               : any;
   // Flag to be used for checking whether we are adding/editing an entry
   public isEdited               : boolean = false;
   // Flag to hide the form upon successful completion of remote operation
   public hideForm               : boolean = false;
   // Property to help ste the page title
   public pageTitle              : string;
   // Property to store the recordID for when an existing entry is being edited
   public recordID               : any      = null;
   private baseURI               : string  = "http://35.154.251.230/ionic/";


  constructor(public navCtrl    : NavController,
               public http       : Http,
               public NP         : NavParams,
               public fb         : FormBuilder,
               public toastCtrl  : ToastController,
               public usname     : AuthProvider,
               public view       : ViewController,
               public  uname     : any )  {

      // Create form builder validation rules
      this.form = fb.group({
         "description"                  : ["", Validators.required],
         "ftp"           : ["", Validators.required]
      });
   }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompnewsPage');
  }

  closeModal(){
  	this.view.dismiss();
  }



// compnews.onDismiss((data =>{
// 	console.log(data);
// }))


/*Log(){
this.navCtrl.push(HomePage,{
 		val: 'hisjs'
 	})
} */


sendNotification(message)  : void
   {
      let notification = this.toastCtrl.create({
          message       : message,
          duration      : 2000
      });
      notification.present();
   }


sendreq(description, ftp)
   {  
     this.uname = this.usname.logname();

      let body     :  string  = "&username=" + this.uname + "&news_id=" + + "&description=" + description + "&password=" + ftp,
          type     : string   = "application/x-www-form-urlencoded; charset=UTF-8",
          headers  : any      = new Headers({ 'Content-Type': type}),
          options  : any      = new RequestOptions({ headers: headers }),
          url      : any      = this.baseURI + "send-news.php";
         
      this.http.post(url, body, options)
      .map(res=>res.json())
      .subscribe(data => {


          this.usname.logname = data;

          let cima : any = this.usname.logname;
          

        if (this.usname.logname == 1) 
          
          {  
            this.sendNotification('invalid information, news not sent');
         }
        else {

          if (this.usname.logname == 0) {
               this.view.dismiss()
          this.sendNotification('News has been sent successfully');
        
            }
          
          else {
                 this.sendNotification('Something went wrong!');  
         
}

         

       } });} 
        



Submit(){
      let description   : string = this.form.controls["description"].value,
          ftp   : string    = this.form.controls["ftp"].value;
      
      
         this.sendreq(description, ftp);
      }
}