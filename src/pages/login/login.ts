import { Component } from '@angular/core';
import {TabsPage} from '../tabs/tabs';
import { IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import  {AuthProvider} from '../../providers/auth/auth';


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


	 // Define FormBuilder /model properties
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

   
   
   // Initialise module classes
   constructor(public navCtrl    : NavController,
               public http       : Http,
               public NP         : NavParams,
               public fb         : FormBuilder,
               public toastCtrl  : ToastController,
               public usname     : AuthProvider)
   {

      // Create form builder validation rules
      this.form = fb.group({
         "username"                  : ["", Validators.required],
         "password"           : ["", Validators.required]
      });
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


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


sendreq(username, password)
   {  

      let body     :  string  = "key=create&username=" + username + "&password=" + password,
          type     : string   = "application/x-www-form-urlencoded; charset=UTF-8",
          headers  : any      = new Headers({ 'Content-Type': type}),
          options  : any      = new RequestOptions({ headers: headers }),
          url      : any      = this.baseURI + "login.php",
          gvari : any = new AuthProvider;

      this.http.post(url, body, options)
      .map(res=>res.json())
      .subscribe(data => {


          this.usname.logname = data;

          

        if (this.usname.logname == 1) 
          
          {
            this.sendNotification('Wrong Username or Password!');
         }
        else {

          if (this.usname.logname == username) {
          { this.navCtrl.push(TabsPage,{val: 'hisjs'})}
          this.sendNotification('Welcome to news together !' + data );
          
            }
          
          else {
                 this.sendNotification('Something went wrong!');  
                  }
}

         

        });} 
        


      
  


Loginfun(){
      let username   : string = this.form.controls["username"].value,
          password   : string    = this.form.controls["password"].value;
      
      
         this.sendreq(username, password);
      }



 
   
}
