import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { Routes } from '@angular/router';
import { CardItemComponent } from './cards/card-item/card-item.component';
import { CardModule } from './cards/card.module';
import { MsgSuccessLayoutComponent } from './services/msg-success-layout.component';
import { MsgErrorLayoutComponent } from './services/msg-error-layout.component';
import { CardService } from './card.service';
import { HttpClientModule } from '@angular/common/http';

import { FlexLayoutModule } from '@angular/flex-layout';


const appRoutes: Routes = [
  {
      path: '**',
      redirectTo: '/home'
  }    
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardsComponent,
    CardItemComponent,
    MsgSuccessLayoutComponent,
    MsgErrorLayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CardModule,
    HttpClientModule,
    FlexLayoutModule
   
  ],
  providers: [
    CardService,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
