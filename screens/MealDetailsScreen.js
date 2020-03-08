import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MealDetailsScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>La pantalla de los detalles de las comidas</Text>
    </View>
  );
};

MealDetailsScreen.navigationOptions = {
  headerTitle: "Dellales de esta comida"
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default MealDetailsScreen;
