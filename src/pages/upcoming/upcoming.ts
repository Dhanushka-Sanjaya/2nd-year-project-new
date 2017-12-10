import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import  {AuthProvider} from '../../providers/auth/auth';


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
	  public items : any = [];
    private baseURI               : string  = "http://localhost/ionic-php-mysql/";
   
   constructor(public navCtrl: NavController,
               public http   : Http,
               public nameid : AuthProvider){}




 ionViewWillEnter()
   {
      this.load();
   }

   // Retrieve the JSON encoded data from the remote server
   // Using Angular's Http class and an Observable - then
   // assign this to the items array for rendering to the HTML template
   load()


   { 


       let
          
          type     : string   = "application/x-www-form-urlencoded; charset=UTF-8",
          headers  : any      = new Headers({ 'Content-Type': type}),
          options  : any      = new RequestOptions({ headers: headers }),
          url      : any      = this.baseURI + "get-pending.php",
          body     : string   = "&username=" + this.nameid.logname;

          console.log(body);


      this.http.post(url, body, options)
      .map(res=>res.json())
      .subscribe(data => { 

        console.log(data);
        this.items = data;
      });
   }





  ionViewDidLoad() {
    console.log('ionViewDidLoad UpcomingPage');
  }



  viewEntry(param)
   {
      this.navCtrl.push('AddTechnolsogyPage', param);
   }

}


