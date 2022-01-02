package com.alvincabayan.recipetogrocery.api.service;

import com.alvincabayan.recipetogrocery.api.entity.Ingredient;
import com.alvincabayan.recipetogrocery.api.repository.IngredientRepository;
import org.springframework.stereotype.Service;

import javax.inject.Inject;
import javax.inject.Singleton;
import java.util.List;

@Service
@Singleton
public class IngredientServiceImpl implements IngredientService {
    @Inject
    IngredientRepository ingredientRepository;

    @Override
    public List<Ingredient> getIngredients() {
        return ingredientRepository.findAll();
    }

    @Override
    public Ingredient addIngredient(Ingredient ingredient) {
        return ingredientRepository.save(ingredient);
    }

//    @Override
//    public Ingredient getIngredientByName(String name) {
//        return
//    }
}
