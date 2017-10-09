import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage'
import {FooterTabs} from '../footer-tabs/footer-tabs.component'
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private storage:Storage) {
  }
  gotoIndex(){
    this.navCtrl.push(FooterTabs).then(
      ()=>{
        this.storage.set('hasPassAds','true') ;
      }
    )
  }
}
