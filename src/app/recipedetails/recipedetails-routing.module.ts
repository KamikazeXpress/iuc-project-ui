import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipedetailsPage } from './recipedetails.page';

const routes: Routes = [
  {
    path: '',
    component: RecipedetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipedetailsPageRoutingModule {}
