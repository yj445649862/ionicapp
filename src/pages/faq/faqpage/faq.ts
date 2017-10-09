/**
 * Created by andy on 2017-09-26.
 */
import { Component } from '@angular/core';
import { NavController, NavParams,App } from 'ionic-angular';
import {FaqDetails} from '../faqdetailspage/faqDetails'
import {DataProviders} from '../../../service/dataproviders'
@Component({
  templateUrl:'./faq.html'
})
export class Faq{
   data:any ;
   selectedKey:string;
   constructor(private dataProviders:DataProviders,private app:App,private navPram:NavParams){
     this.dataProviders.loadFaqQuestions().subscribe(res=>{
        this.data = res ;
     })
   }
  navigateToDetails(item:any,type:string){
     this.app.getRootNav().push(FaqDetails,{item},{animate:true,direction:'back',duration:3000,animation:'ios-transition'});
  }
}
