import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Recipe } from '../Recipe';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  recipeinfo: Recipe;
  recipelistkey: any;
  recipelist: any;
  recipenames: string[] = [];
  finalrecipelist: Recipe[] = [];

  constructor(private dataService: DataService) {
    this.recipeinfo = new Recipe();
   }

  ngOnInit() {
    this.dataService.getReceipeList('user1').subscribe((data: Recipe) => {

      this.recipelistkey = Object.keys(data);

      this.recipelist = data;

      
      // prioritizing hascookoreatnow to top of the list
      var priorityRecipe = []
      var normalRecipe = []

      this.recipelist.forEach((item) => {
        if (item.hascookoreatnow){
          // console.log("hascookoreatnow")
          // console.log(item)
          priorityRecipe.push(item)
        }
        else {
          normalRecipe.push(item)
        }
      })

      this.finalrecipelist = priorityRecipe.concat(normalRecipe)
      })
  }

}
