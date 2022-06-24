import {
  View, Text, Image, StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import orders from '../../../data/orders.json';

const order = orders[0];
export function Header() {
  const navigation = useNavigation();
  return (
    <View style={styles.page}>
      <Image style={styles.image} source={{ uri: order.Restaurant.image }} />
      <Ionicons
        onPress={() => navigation.goBack()}
        style={styles.iconContainer}
        name="arrow-back-circle"
        size={45}
        color="white"
      />
      <View style={styles.container}>
        <Text style={styles.name}>{order.Restaurant.name}</Text>
        <Text style={styles.subtitle}>
          {`${order.status} - 2 days ago`}
        </Text>
        <Text style={styles.menuTitle}>Your items</Text>
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
  menuTitle: {
    fontSize: 18,
    marginTop: 20,
    letterSpacing: 0.7,
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
