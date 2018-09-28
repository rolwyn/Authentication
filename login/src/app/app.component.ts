import { Component } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent  {
  name = 'Angular';
}
