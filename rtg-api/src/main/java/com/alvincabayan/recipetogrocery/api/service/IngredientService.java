package com.alvincabayan.recipetogrocery.api.service;

import com.alvincabayan.recipetogrocery.api.entity.Ingredient;
import org.springframework.stereotype.Component;

import java.util.List;

public interface IngredientService {
    public List<Ingredient> getIngredients();
    public Ingredient addIngredient(Ingredient ingredient);
//    public Ingredient getIngredientByName(String name);
}
