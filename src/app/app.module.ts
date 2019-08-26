import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from '../components/Child/child.component';
import { Page1 } from '../components/page1/page1.component';
import { Page2 } from '../components/page2/page2.component';
import {AppRouterModule} from './app-router.module';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    Page1,
    Page2
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
