import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LurePage } from '../lureSelector/lureSelector';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})

export class ListPage {
	
	public myArray:string[] = [];
	public value2;

	constructor(public navCtrl: NavController, public navParams: NavParams) {

     this.myArray = navParams.get('param1');
 	 
  }
  
}