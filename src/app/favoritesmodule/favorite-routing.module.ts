import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritespageComponent } from './favoritespage/favoritespage.component';

const routes: Routes = [
  {
    path: '',
    component: FavoritespageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoriteFeatureRoutingModule { }
