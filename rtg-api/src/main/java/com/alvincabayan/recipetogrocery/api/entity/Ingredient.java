package com.alvincabayan.recipetogrocery.api.entity;

import lombok.*;
import org.hibernate.Hibernate;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name="rtg_ingredient")
@Getter
@Setter
@ToString
@RequiredArgsConstructor
public class Ingredient {
    @Id
    @SequenceGenerator(
            name = "rtg_ingredient_seq",
            sequenceName = "rtg_ingredient_seq",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "rtg_ingredient_seq"
    )
    @Column(name = "ingr_id")
    private Long id;

    @Column(name = "ingr_name")
    private String name;

    @Column(name = "ingr_unit_type")
    private String unitType;

    public Ingredient(String name, String unitType) {
        this.name = name;
        this.unitType = unitType;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Ingredient that = (Ingredient) o;
        return id != null && Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}

