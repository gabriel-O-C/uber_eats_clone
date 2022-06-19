import {
  View, FlatList,
} from 'react-native';
import { DishListItem } from '../../components';
import { Header } from './components';
import restaurants from '../../data/restaurants.json';

const restaurant = restaurants[0];

function RestaurantDetailsSCreen() {
  return (
    <View style={{ flex: 1 }}>
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

export default RestaurantDetailsSCreen;
