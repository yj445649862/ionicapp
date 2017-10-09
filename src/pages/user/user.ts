import { Component } from '@angular/core';
import { AlertController,NavController, NavParams } from 'ionic-angular';
import {Faq} from '../faq/faqpage/faq'
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  data:any ;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCont: AlertController,
  ) {}

  ionViewDidLoad() {
  }
  navigateToHelp():void{
    this.navCtrl.push(Faq)
  }
  logout(){
     let confirm = this.alertCont.create({
       title: '警告',
       message: '确认要退出登录?',
       buttons: [
         {
           text: '取消',
           handler: () => {
             console.log('Disagree clicked');
           }
         },
         {
           text: '确定',
           handler: () => {
             console.log('Agree clicked');
           }
         }
       ]
     })
    confirm.present();
  }
}
