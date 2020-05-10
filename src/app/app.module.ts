import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicBondsSharedModule } from '../../projects/bonds-public/src/app/app.module';
import { PrivatePlacementSharedModule } from '../../projects/private-placement/src/app/app.module';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    PublicBondsSharedModule.forRoot(),
    PrivatePlacementSharedModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
