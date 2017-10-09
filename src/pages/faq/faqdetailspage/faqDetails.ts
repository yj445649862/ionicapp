/**
 * Created by andy on 2017-09-26.
 */
import { Component } from '@angular/core';
import { AlertController,NavController, NavParams } from 'ionic-angular';
import {DataProviders} from '../../../service/dataproviders'
@Component({
  templateUrl:'./faqdetails.html'
})
export class FaqDetails{
  data:any ;
  constructor(private navParams:NavParams){
       this.data = this.navParams.get('item')
  }
}
