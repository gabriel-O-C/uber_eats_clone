import {
  View, FlatList,
} from 'react-native';
import restaurants from '../../data/restaurants.json';
import BasketDishItem from '../BasketScreen/components/BasketDishItem';
import { Header } from './components/Header';

const restaurant = restaurants[0];

function OrderDetailsScreen() {
  return (
    <View>
      <FlatList
        data={restaurant.dishes}
        ListHeaderComponent={Header}
        renderItem={({ item, index }) => (
          <BasketDishItem
            name={item.name}
            price={item.price}
            key={index}
          />
        )}
      />
    </View>
  );
}

export default OrderDetailsScreen;
