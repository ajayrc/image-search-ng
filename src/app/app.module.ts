import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageSearchComponent } from './image-search/image-search.component';
import { NavbarComponent } from './common-components/navbar/navbar.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './state/reducers';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment.prod';
import { ImageEffects } from './state/effects/images.effects';
import { FavlistmodalComponent } from './common-components/favlistmodal/favlistmodal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FavoritesmoduleModule } from './favoritesmodule/favoritesmodule.module';
import { HomepageComponent } from './homepage/homepage.component';
import { SearchService } from './image-search/service/search.service';

@NgModule({
  declarations: [
    AppComponent,
    ImageSearchComponent,
    NavbarComponent,
    FavlistmodalComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    EffectsModule.forRoot([ImageEffects]),
    StoreDevtoolsModule.instrument({
      name: 'Image Search Engine',
      logOnly: environment.production,
    }),
    FavoritesmoduleModule,
  ],
  providers: [SearchService],
  bootstrap: [AppComponent],
})
export class AppModule {}
