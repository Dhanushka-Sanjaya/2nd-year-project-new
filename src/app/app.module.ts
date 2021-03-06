import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
// import {CompnewsPage} from '../pages/compnews/compnews';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage} from '../pages/login/login';
import {LoadingPage} from '../pages/loading/loading';
import {ForgotpwPage} from '../pages/forgotpw/forgotpw';
import  {MainPage} from '../pages/main/main';
import {SendnPage} from '../pages/sendn/sendn';
import {AssinedPage} from '../pages/assined/assined';
import  {UpcomingPage} from '../pages/upcoming/upcoming';
import  {PaymentPage} from '../pages/payment/payment';
import  {MonthnewsPage} from '../pages/monthnews/monthnews';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import  {AuthProvider}  from '../providers/auth/auth';
import { NeidProvider } from '../providers/neid/neid';



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    LoadingPage,
    ForgotpwPage,
    MainPage,
    SendnPage,
    AssinedPage,
    UpcomingPage,
    PaymentPage,
    MonthnewsPage
    // CompnewsPage
  ],
  imports: [
  BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    LoadingPage,
    ForgotpwPage,
    MainPage,
    SendnPage,
    AssinedPage,
    UpcomingPage,
    PaymentPage,
    MonthnewsPage
    // CompnewsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, 
    AuthProvider,
    NeidProvider
  ]
})
export class AppModule {}
