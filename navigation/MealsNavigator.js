import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import colors from "../constants/colors";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";

const MealsNavigator = createStackNavigator(
  {
    Categorías: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitle: "Categorías de comidas"
      }
    },
    CategoríasComidas: CategoryMealsScreen,
    ComidasDetalles: MealDetailsScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? colors.primaryColor : ""
      },
      headerTintColor: Platform.OS === "android" ? "white" : colors.primaryColor
    }
  }
);

export default createAppContainer(MealsNavigator);
