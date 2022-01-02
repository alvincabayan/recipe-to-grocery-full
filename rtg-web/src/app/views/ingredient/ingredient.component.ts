import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Ingredient } from 'src/app/model/Ingredient';
import { IngredientService } from 'src/app/service/ingredient.service';
import { DialogIngredientComponent } from './dialog-ingredient/dialog-ingredient.component';
import { ViewIngredientsComponent } from './view-ingredients/view-ingredients.component';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {
  @ViewChild(ViewIngredientsComponent) viewIngredients! : ViewIngredientsComponent;

  constructor (
    private ingredientService : IngredientService,
    public dialog: MatDialog
  ) { };

  ngOnInit() {
    this.refreshIngredients();
  };

  focusedIngredient! : string;

  refreshIngredients() {
    this.ingredientService.getAllIngredients().subscribe(
      response => {
        // this.ingredientList = response;
        this.viewIngredients.populateIngredients(response);
      }
    )
  }

  openIngredientDialog(action: string) {
    if (action === 'add') {
      this.addIngredient();
    }
  }

  addIngredient() : void {
    const dialogRef = this.dialog.open(DialogIngredientComponent, {
      width: '250px',
      data: {name: '', unitType: ''}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed: ', result);
      this.focusedIngredient = result;
      this.ingredientService.addIngredient(result).subscribe(
        () => this.refreshIngredients()
      );
      
    });
  }

  editIngredient() : void {
    const dialogRef = this.dialog.open(DialogIngredientComponent, {
      width: '250px',
      data: {name: '', unitType: ''}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed: ', result);
      this.focusedIngredient = result;
      this.ingredientService.addIngredient(result).subscribe(
        () => this.refreshIngredients()
      );
      
    });
  }

}
