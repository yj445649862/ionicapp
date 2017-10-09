/**
 * Created by andy on 2017-09-26.
 */
import {Injectable} from '@angular/core'
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
@Injectable()
export class DataProviders{
  faqData:any ;
  constructor(public http: Http) { }
  loadFaqQuestions():Observable<any>{
     if(this.faqData){
     }else{
       this.http.get('assets/data/faq.json').subscribe(res=> this.faqData =res.json());
     }
    return Observable.of(this.faqData) ;
  }
}
