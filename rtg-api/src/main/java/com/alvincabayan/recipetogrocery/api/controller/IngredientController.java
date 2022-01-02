package com.alvincabayan.recipetogrocery.api.controller;

import com.alvincabayan.recipetogrocery.api.entity.Ingredient;
import com.alvincabayan.recipetogrocery.api.service.IngredientService;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;
import java.util.List;

@RestController
@RequestMapping("/ingredient")
public class IngredientController {
    @Inject
    IngredientService ingredientService;

    @GetMapping("")
    public List<Ingredient> getIngredients() {
        return ingredientService.getIngredients();
    }

    @PostMapping("")
    public Ingredient addIngredient(@RequestBody Ingredient ingredient) {
        return ingredientService.addIngredient(ingredient);
    }

//    @GetMapping(value="/name/{name}")
//    public Ingredient getIngredientByName(@PathVariable String name) {
//        return ingredientService.getIngredientByName(name);
//    }



}
