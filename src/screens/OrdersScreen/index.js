import {
  View, FlatList, StyleSheet,
} from 'react-native';
import { OrderListItem } from '../../components';
import orders from '../../data/orders.json';

function OrdersScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        renderItem={({ item }) => (
          <OrderListItem
            image={item.Restaurant.image}
            restaurantName={item.Restaurant.name}
            status={item.status}
            id={item.id}
          />
        )}
      />
    </View>
  );
}

export default OrdersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});
