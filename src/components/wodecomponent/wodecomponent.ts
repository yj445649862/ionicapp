import {Component, Input} from '@angular/core';

/**
 * Generated class for the WodecomponentComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'wodecomponent',
  templateUrl: 'wodecomponent.html'
})
export class WodecomponentComponent {

  @Input() content: string;

  constructor() {
    // console.log('Hello WodecomponentComponent Component');
  }

}
