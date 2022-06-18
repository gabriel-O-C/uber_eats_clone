import { FlatList, StyleSheet, View } from 'react-native';
import { RestaurantItem } from '../../components';
import restaurants from '../../data/restaurants.json';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={restaurants}
        renderItem={({ item }) => (
          <RestaurantItem
            key={item.id}
            sourceImage={item.image}
            title={item.name}
            subtitle={`$ ${item.deliveryFee} - ${item.minDeliveryTime}-${item.maxDeliveryTime} minutes`}
            rating={item.rating}
          />
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
