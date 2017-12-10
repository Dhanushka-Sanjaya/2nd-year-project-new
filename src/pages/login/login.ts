import { Component } from '@angular/core';
import {TabsPage} from '../tabs/tabs';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
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
   public technologyName         : any;
   public technologyDescription  : any;
   // Flag to be used for checking whether we are adding/editing an entry
   public isEdited               : boolean = false;
   // Flag to hide the form upon successful completion of remote operation
   public hideForm               : boolean = false;
   // Property to help ste the page title
   public pageTitle              : string;
   // Property to store the recordID for when an existing entry is being edited
   public recordID               : any      = null;
   private baseURI               : string  = "http://localhost/ionic-php-mysql/";

   
   
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
         "name"                  : ["", Validators.required],
         "description"           : ["", Validators.required]
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


createEntry(name, description)
   {  

      let body     :  string  = "key=create&name=" + name + "&description=" + description,
          type     : string   = "application/x-www-form-urlencoded; charset=UTF-8",
          headers  : any      = new Headers({ 'Content-Type': type}),
          options  : any      = new RequestOptions({ headers: headers }),
          url      : any      = this.baseURI + "login.php";

      this.http.post(url, body, options)
      .map(res=>res.json())
      .subscribe(data => {

          this.usname.logname = data;

          let cima : any = this.usname.logname;
           

        if (this.usname.logname == 0) 
          
          {
            this.sendNotification('Wrong Username or Password!');
         }
        else {

          if (this.usname.logname == name) {
          { this.navCtrl.push(TabsPage,{val: 'hisjs'})}
          this.sendNotification('Welcome to news together !');
          console.log(cima);
            }
          
          else {
                 this.sendNotification('Something went wrong!');  
                  console.log(cima);}
}

         

        });} 
        


     /* {
         // If the request was successful notify the user
         if(data.status === 200)
         {
            this.hideForm   = true;
            this.sendNotification(`Congratulations the technology: ${name} was successfully added`);
         }
         // Otherwise let 'em know anyway
         else
         {
            this.sendNotification('Something went wrong!');
         } 
      }); */
  


saveEntry(){
      let name          : string = this.form.controls["name"].value,
          description   : string    = this.form.controls["description"].value;
      
      
         this.createEntry(name, description);
      }



 
   
}
