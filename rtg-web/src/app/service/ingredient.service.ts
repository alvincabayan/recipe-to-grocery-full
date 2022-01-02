import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ingredient } from '../model/Ingredient';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  constructor(
    private http: HttpClient
  ) { }

  getAllIngredients() : Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>('/api/ingredient');
  }

  addIngredient(ingredient : Ingredient) : Observable<Ingredient> {
    console.log('add service call: ', ingredient);
    return this.http.post<Ingredient>('/api/ingredient', ingredient);
  }
}
