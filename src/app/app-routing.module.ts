import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {
    path: 'favorites',
    loadChildren: () =>
      import('./favoritesmodule/favoritesmodule.module').then(
        (m) => m.FavoritesmoduleModule
      ),
  },
  {
    path: 'home',
    component: HomepageComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '*',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
