import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

import { Ionicons } from "@expo/vector-icons";
import colors from "../constants/colors";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import HeaderButton from "../components/HeaderButton";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? colors.primaryColor : ""
  },
  headerTitleStyle: {
    fontFamily: "open-sans-bold"
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans"
  },
  headerTintColor: Platform.OS === "android" ? "white" : colors.primaryColor
};

const sideDrawer = (navData, title, iconName, onPress) => {
  return (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title={title} iconName={iconName} onPress={onPress} />
    </HeaderButtons>
  );
};

const MealsNavigator = createStackNavigator(
  {
    Categorías: {
      screen: CategoriesScreen,
      navigationOptions: navData => {
        return {
          headerTitle: "Categorías de comidas",
          headerLeft: sideDrawer(navData, "menu", "ios-menu", () =>
            navData.navigation.toggleDrawer()
          )
        };
      }
    },
    CategoríasComidas: CategoryMealsScreen,
    ComidasDetalles: MealDetailsScreen
  },
  {
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: {
      screen: FavoritesScreen,
      navigationOptions: navData => {
        return {
          headerLeft: sideDrawer(navData, "menu", "ios-menu", () =>
            navData.navigation.toggleDrawer()
          )
        };
      }
    },
    MealDetail: MealDetailsScreen
  },
  {
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "open-sans" }}>Favoritas</Text>
        ) : (
          "Todo"
        ),
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: colors.primaryColor
    }
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "open-sans" }}>Favoritas</Text>
        ) : (
          "Favoritas"
        ),
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: colors.accentColor
    }
  }
};

const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: "white",
        shifting: true
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          labelStyle: { fontFamily: "open-sans" },
          activeTintColor: colors.accentColor
        }
      });

const FiltersNavigator = createStackNavigator(
  {
    Filters: {
      screen: FiltersScreen,
      navigationOptions: navData => {
        return {
          headerLeft: sideDrawer(navData, "menu", "ios-menu", () =>
            navData.navigation.toggleDrawer()
          ),
          headerRight: sideDrawer(
            navData,
            "save",
            "ios-save",
            navData.navigation.getParam("save")
          )
        };
      }
    }
  },
  {
    nagivationOptions: { drawerLabel: "Prueba" },
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const MainNavigator = createDrawerNavigator(
  {
    Comidas: MealsFavTabNavigator,
    Filtros: FiltersNavigator
  },
  {
    contentOptions: {
      activeTintColor: colors.accentColor,
      labelStyle: {
        fontFamily: "open-sans-bold"
      }
    }
  }
);

export default createAppContainer(MainNavigator);
