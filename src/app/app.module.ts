import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './_utils/error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { MenulayoutComponent } from './public/Pmenu/menulayout/menulayout.component';


@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    MenulayoutComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
