import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PipetestComponent } from './components/pipetest.component';
import { FileSizePipe } from './Pipes/FileSizePipe';
import {loginComponent} from './components/login.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [
    // Components
     AppComponent,
     HelloComponent,
     PipetestComponent,
    // Pipes
     FileSizePipe,
     loginComponent
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
