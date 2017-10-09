import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import {HttpModule} from '@angular/http'
import { IonicStorageModule } from '@ionic/storage';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { IndexPage } from '../pages/index/index';
import {UserPage} from '../pages/user/user' ;
import {NoticePage} from '../pages/notice/notice' ;
import {FooterTabs} from '../pages/footer-tabs/footer-tabs.component'
import {WelcomePage} from '../pages/welcome/welcome'
import {DataProviders} from '../service/dataproviders'
import {Faq} from '../pages/faq/faqpage/faq'
import {FaqDetails} from '../pages/faq/faqdetailspage/faqDetails'
import  {ComponentsModule} from '../components/components.module'
@NgModule({
  declarations: [
    MyApp,
    IndexPage,
    UserPage,
    FooterTabs,
    WelcomePage,
    Faq,
    FaqDetails,
    NoticePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp,{
      backButtonText: '返回',
      iconMode: 'ios',
      mode:'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabsPlacement: 'bottom',
      pageTransition: 'ios-transition'
    }),
    ComponentsModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FooterTabs,
    IndexPage,
    UserPage,
    WelcomePage,
    NoticePage,
    Faq,
    FaqDetails,
  ],
  providers: [
    DataProviders,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
