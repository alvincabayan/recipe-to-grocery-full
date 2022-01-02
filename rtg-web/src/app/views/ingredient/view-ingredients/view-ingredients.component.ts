import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/model/Ingredient';
import { IngredientService } from 'src/app/service/ingredient.service';

@Component({
  selector: 'app-view-ingredients',
  templateUrl: './view-ingredients.component.html',
  styleUrls: ['./view-ingredients.component.css']
})
export class ViewIngredientsComponent implements OnInit {
  ingredientList: Ingredient[] = [];
  constructor () {};
  
  
  ngOnInit() {};

  populateIngredients(ingredients: Ingredient[]) {
    this.ingredientList = ingredients
  }

  
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneak'];

}
