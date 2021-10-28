import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageSearchComponent } from './image-search/image-search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment.prod';
import { ImageEffects } from './effects/images.effects';
import { FavlistmodalComponent } from './favlistmodal/favlistmodal.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ImageSearchComponent,
    NavbarComponent,
    FavlistmodalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    EffectsModule.forRoot([ImageEffects]),
    StoreDevtoolsModule.instrument({
      name: 'Image Search Engine',
      logOnly: environment.production
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
