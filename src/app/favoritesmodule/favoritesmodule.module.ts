import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritespageComponent } from './favoritespage/favoritespage.component';
import { FavoriteFeatureRoutingModule } from './favorite-routing.module';

@NgModule({
  declarations: [
    FavoritespageComponent
  ],
  imports: [
    CommonModule,
    FavoriteFeatureRoutingModule,

  ],
  bootstrap: [
    FavoritespageComponent
  ]
})
export class FavoritesmoduleModule { }
