import {
  View, Text, StyleSheet, FlatList,
} from 'react-native';

import restaurants from '../../data/restaurants.json';
import BasketDishItem from './components/BasketDishItem';

const restaurant = restaurants[0];

function BasketScreen() {
  return (
    <View style={styles.page}>
      <Text style={styles.name}>{restaurant.name}</Text>
      <Text style={styles.subtitle}>Your items</Text>
      <FlatList
        data={restaurant.dishes}
        renderItem={({ item }) => (
          <BasketDishItem
            name={item.name}
            price={item.price}
          />
        )}
      />
      <View style={styles.separator} />
      <View style={styles.button}>
        <Text style={styles.buttonLabel}>Create Order</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: '100%',
    padding: 10,
  },
  name: {
    fontSize: 30,
    fontWeight: '600',
    marginVertical: 10,
  },
  description: {
    color: '#696969',
  },
  separator: {
    height: 1,
    backgroundColor: 'lightgrey',
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
  },
  quantity: {
    fontSize: 25,
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: 'black',
    marginTop: 'auto',
    padding: 20,
    alignItems: 'center',
  },
  buttonLabel: {
    color: 'white',
    fontWeight: '600',
    fontSize: 20,
  },
  quantityContainer: {
    backgroundColor: 'lightgrey',
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginRight: 10,
    borderRadius: 3,
  },
  subtitle: {
    fontWeight: 'bold',
    marginTop: 20,
    fontSize: 19,
  },
});

export default BasketScreen;
