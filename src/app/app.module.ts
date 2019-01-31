import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";

import { NgReduxModule, NgRedux } from "@angular-redux/store";

import { IAppState, rootReducer, INITIAL_STATE } from './app.state';
import { MaterialModule } from './modules/material.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // Needs configuring upon cloning
    // AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,

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
