import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs);
import { AppComponent } from './app.component';
import { CommonsModule } from './commons/commons.module';
/*import { MyformsModule } from './myforms/myforms.module';*/


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonsModule,
   /* MyformsModule,*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
