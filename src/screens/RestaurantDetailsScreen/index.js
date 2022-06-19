import {
  View, StyleSheet, FlatList,
} from 'react-native';
import { DishListItem } from '../../components';
import { Header } from './components';
import restaurants from '../../data/restaurants.json';

const restaurant = restaurants[0];

function RestaurantDetailsSCreen() {
  return (
    <View style={styles.page}>
      <FlatList
        data={restaurant.dishes}
        ListHeaderComponent={Header}
        renderItem={({ item }) => (
          <DishListItem
            dishName={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});

export default RestaurantDetailsSCreen;
