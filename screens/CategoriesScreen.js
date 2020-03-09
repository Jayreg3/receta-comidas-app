import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity
} from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = props => {
  const renderGridItem = itemData => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "CategoríasComidas",
            params: {
              categoryId: itemData.item.id
            }
          });
        }}
      />
    );
  };
  return (
    <View style={styles.screen}>
      <Text>La pantalla de las categorías</Text>
      <Button
        title="Ir a comidas!"
        onPress={() =>
          props.navigation.navigate({
            routeName: "CategoríasComidas"
          })
        }
      />
      <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center"
  }
});

export default CategoriesScreen;
