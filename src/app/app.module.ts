import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgReduxModule, NgRedux } from "@angular-redux/store";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IAppState, rootReducer, INITIAL_STATE } from './app.state';
import { MaterialModule } from './modules/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    NgReduxModule,

    MaterialModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(
    private appState: NgRedux<IAppState>
  ){
    this.appState.configureStore(rootReducer, INITIAL_STATE);
  }
}
