import {
  View, FlatList,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { DishListItem } from '../../components';
import { Header } from './components';
import restaurants from '../../data/restaurants.json';

const restaurant = restaurants[0];

function RestaurantDetailsSCreen() {
  const route = useRoute();
  const { id } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={restaurant.dishes}
        ListHeaderComponent={Header}
        keyExtractor={(item, index) => index}
        renderItem={({ item, index }) => (
          <DishListItem
            dishName={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
            id={index}
          />
        )}
      />
    </View>
  );
}

export default RestaurantDetailsSCreen;
