import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  //created a class that works as a blueprint of type recipe
  //check recipe.model.ts
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test','https://get.pxhere.com/photo/egg-dish-food-cuisine-ingredient-produce-menemen-recipe-comfort-food-brunch-meal-frittata-Queso-flameado-breakfast-side-dish-poached-egg-turkish-food-indian-cuisine-1620832.jpg'),
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
