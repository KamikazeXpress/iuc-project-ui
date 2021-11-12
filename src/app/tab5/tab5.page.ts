import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  parameter: string ="";

  constructor(private activateRoute:ActivatedRoute,private dataService: DataService) {
    this.recipeinfo = new Recipe();
    this.parameter = (this.activateRoute.snapshot.paramMap.get('ingredient'));
   }

  ngOnInit() {
    if(this.parameter != null){
      this.dataService.getSelectedReceipeList(this.parameter).subscribe((data: Recipe) => {

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
    
    else{
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

}
