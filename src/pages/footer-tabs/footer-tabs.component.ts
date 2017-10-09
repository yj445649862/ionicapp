/**
 * Created by andy on 2017-09-26.
 */
import {Component} from '@angular/core' ;
import {IndexPage} from '../index/index';
import {NoticePage} from '../notice/notice';
import {UserPage} from '../user/user';
@Component({
  templateUrl:'footer-tabs.component.html'
})
export class FooterTabs{
   indexPage:any ;
   newsPage : any ;
   userPage: any ;
   constructor(){
         this.indexPage = IndexPage ;
         this.newsPage = NoticePage ;
         this.userPage = UserPage ;
   }
}
