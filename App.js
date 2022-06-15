import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { RestaurantItem } from './src/components';
import restaurants from './src/data/restaurants.json';
export default function App() {
  return (
    <>
    <View style={styles.container}>
      {restaurants.map((restaurant) => (
        <RestaurantItem
          key={restaurant.id}
          sourceImage={restaurant.image}
          title={restaurant.name}
          subtitle={`$ ${restaurant.deliveryFee} - ${restaurant.minDeliveryTime}-${restaurant.maxDeliveryTime} minutes`}
         />
      ))} 
      </View>
      <StatusBar style="auto" />
    
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});
