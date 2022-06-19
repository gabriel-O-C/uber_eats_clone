import {
  View, Text, Image, StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import restaurants from '../../../../data/restaurants.json';

const restaurant = restaurants[0];

function Header() {
  return (
    <View style={styles.page}>
      <Image style={styles.image} source={{ uri: restaurant.image }} />
      <Ionicons
        style={styles.iconContainer}
        name="arrow-back-circle"
        size={45}
        color="white"
      />
      <View style={styles.container}>
        <Text style={styles.name}>{restaurant.name}</Text>
        <Text style={styles.subtitle}>
          {`$ ${restaurant.deliveryFee} - ${restaurant.minDeliveryTime}-${restaurant.maxDeliveryTime} minutes`}
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    margin: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 5 / 3,
    marginBottom: 5,
  },
  subtitle: {
    color: 'grey',
    fontSize: 15,
  },
  name: {
    fontSize: 35,
    fontWeight: '600',
    marginVertical: 10,
  },
  iconContainer: {
    position: 'absolute',
    top: 30,
    left: 10,
  },
});

export default Header;
