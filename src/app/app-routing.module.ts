import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {
    path: 'favorites',
    loadChildren: () => import('./favoritesmodule/favoritesmodule.module').then(m => m.FavoritesmoduleModule)
  },
  {
    path: '',
    component: HomepageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
