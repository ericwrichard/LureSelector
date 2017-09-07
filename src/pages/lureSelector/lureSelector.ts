import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ListPage } from '../list/list';

@Component({
  selector: 'page-lure',
  templateUrl: 'lureSelector.html'
})
export class LurePage {
  species = "";
  weight = 0;
  weather = 0;
  series = 0;

  lures: FirebaseListObservable<any>;
  matchedLures:string[] =[];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, db: AngularFireDatabase) {
     this.lures = db.list('lures');
  }

  filterLures() {
    this.lures.subscribe(lures => {
      lures.forEach(lure => {
         if (lure.Species.toLowerCase() == this.species &&
             lure.Weight == this.weight &&
             lure.Weather == this.weather &&
             lure.Series == this.series) {
             this.matchedLures.push(lure.Lure);  
         } 
      });
      this.navigatePage(this.matchedLures);
    });
     
  }   


  navigatePage(arr:string[]) {
    this.navCtrl.push(ListPage, {
      param1: arr
    });
  }
}



