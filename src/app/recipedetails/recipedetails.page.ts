import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { Recipe } from '../Recipe';
@Component({
  selector: 'app-recipedetails',
  templateUrl: './recipedetails.page.html',
  styleUrls: ['./recipedetails.page.scss'],
})
export class RecipedetailsPage implements OnInit {
childdata:string;

recipedata:any
recipeinfo: Recipe;
recipelistkey: any;
recipelist: any;
recipenames: string[] = [];

objIngredients: any;
strIngredients: string;

  constructor(private activateRoute:ActivatedRoute, private dataService: DataService){
    this.recipeinfo = new Recipe();
    this.childdata = (this.activateRoute.snapshot.paramMap.get('childkey'));
 
  }

  ngOnInit() {
    this.dataService.getReceipeListByChildKey(this.childdata).subscribe((data: Recipe) => {
     
      this.recipeinfo = data;

      this.objIngredients = JSON.parse(String(this.recipeinfo.Cleaned_Ingredients))
      this.strIngredients = this.objIngredients.toString()

      // prioritizing hascookoreatnow to top of the list
      var priorityRecipe = []

      console.log("HARRIS TEST")
      console.log(this.recipeinfo)

      // console.log("HARRIS TEST")
      // console.log(this.objIngredients)
      // console.log(this.strIngredients)

      // this.recipeinfo.Cleaned_Ingredients = this.recipeinfo.Cleaned_Ingredients.replace(/[\[\]']+/g, '');
      // this.recipeinfo.Cleaned_Ingredients = this.recipeinfo.Cleaned_Ingredients.replace(/["]+/g, '');
      

      })

  }


}
