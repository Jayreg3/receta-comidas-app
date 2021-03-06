import React from "react";
import { View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import { CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";
import DefaultText from "../components/DefaultText";

const CategoryMealsScreen = props => {
  const catId = props.navigation.getParam("categoryId");

  const availableMeals = useSelector(state => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>
          No se ha encontrado ninguna comida. Comprueba los filtros!
        </DefaultText>
      </View>
    );
  }

  CategoryMealsScreen.navigationOptions = {
    headerTitle: "Lista de comidas"
  };

  styles = StyleSheet.create({
    content: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }
  });

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

export default CategoryMealsScreen;
