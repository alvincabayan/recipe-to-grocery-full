package com.alvincabayan.recipetogrocery.api.repository;

import com.alvincabayan.recipetogrocery.api.entity.Ingredient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


@Transactional
@Repository
public interface IngredientRepository extends JpaRepository<Ingredient, Long> {
}
