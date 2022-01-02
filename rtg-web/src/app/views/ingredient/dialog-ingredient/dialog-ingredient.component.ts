import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Ingredient } from 'src/app/model/Ingredient';

@Component({
  selector: 'app-dialog-ingredient',
  templateUrl: './dialog-ingredient.component.html',
  styleUrls: ['./dialog-ingredient.component.css']
})
export class DialogIngredientComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogIngredientComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Ingredient
    ) { }

  ngOnInit(): void {
  }

  onCancel() {
    this.dialogRef.close();
  }
  
  onAddIngredient() {
    this.dialogRef.close(this.data);
  }


}
