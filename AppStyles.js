import { StyleSheet, Dimensions } from 'react-native';

// screen sizing
const { width, height } = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const dishNumColums = 2;
// item size
const RECIPE_ITEM_HEIGHT = 150;
const DISH_ITEM_MARGIN = 20;

// 2 photos per width
export const dishesCard = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: DISH_ITEM_MARGIN,
    marginTop: 20,
    width: (SCREEN_WIDTH - (dishNumColums + 1) * DISH_ITEM_MARGIN) / dishNumColums,
    height: RECIPE_ITEM_HEIGHT + 75,
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 5
  },
  photo: {
    width: (SCREEN_WIDTH - (dishNumColums + 1) * DISH_ITEM_MARGIN) / dishNumColums,
    height: RECIPE_ITEM_HEIGHT,
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  title: {
    flex: 1,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#444444',
    marginTop: 3,
    marginHorizontal: 5
  },
  price: {
    marginVertical: 5
  }
});
