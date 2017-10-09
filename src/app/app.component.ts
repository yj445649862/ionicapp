import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Storage} from '@ionic/storage'
import {FooterTabs} from '../pages/footer-tabs/footer-tabs.component'
import {WelcomePage} from '../pages/welcome/welcome'
import {DataProviders} from '../service/dataproviders'
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any ;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private storage : Storage,private dataProvier:DataProviders) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.initApp();
  }
  initApp(){
    this.storage.get('hasPassAds').then(res=>{
        if(res){
           this.rootPage = FooterTabs ;
        }else{
          this.rootPage = WelcomePage ;
        }
    })
    this.dataProvier.loadFaqQuestions() ;
  }
}

