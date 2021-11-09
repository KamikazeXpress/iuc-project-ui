import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipedetailsPageRoutingModule } from './recipedetails-routing.module';

import { RecipedetailsPage } from './recipedetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipedetailsPageRoutingModule
  ],
  declarations: [RecipedetailsPage]
})
export class RecipedetailsPageModule {}
