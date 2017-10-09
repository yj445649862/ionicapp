import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-notice',
  templateUrl: 'notice.html',
})
export class NoticePage {
  init:boolean = false ;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoticePage');
  }
  ionViewWillEnter(){
    setTimeout(()=>{
      this.init = true ;
    },3000)
  }
  ionViewDidLeave(){
    this.init = false ;
  }
}
