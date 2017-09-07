import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LurePage } from '../pages/lureSelector/lureSelector';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

export const firebaseConfig = {
  apiKey: "AIzaSyBt0DlAaVAct1hXhQxKQxaWold-8UJHVHA",
  authDomain: "lure-selector.firebaseapp.com",
  databaseURL: "https://lure-selector.firebaseio.com",
  projectId: "lure-selector",
  storageBucket: "lure-selector.appspot.com",
  messagingSenderId: "762361095396"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LurePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LurePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
