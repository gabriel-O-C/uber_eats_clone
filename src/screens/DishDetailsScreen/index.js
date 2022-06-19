import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import restaurants from '../../data/restaurants.json';

const dish = restaurants[0].dishes[0];

function DishDetailsSCreen() {
  const [quantity, setQuantity] = useState(1);

  function handleMinus() {
    if (quantity > 1) {
      setQuantity((prevState) => prevState - 1);
    }
  }
  function getTotal() {
    return (dish.price * quantity).toFixed(2);
  }
  return (
    <View style={styles.page}>
      <Text style={styles.name}>{dish.name}</Text>
      <Text style={styles.description}>{dish.description}</Text>
      <View style={styles.separator} />
      <View style={styles.row}>
        <AntDesign
          onPress={handleMinus}
          name="minuscircleo"
          size={60}
          color="black"
        />
        <Text style={styles.quantity}>{quantity}</Text>
        <AntDesign
          onPress={() => setQuantity((prevState) => prevState + 1)}
          name="pluscircleo"
          size={60}
          color="black"
        />
      </View>
      <View style={styles.button}>
        <Text style={styles.buttonLabel}>{`add ${quantity} to basket $ ${getTotal()}`}</Text>
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
    justifyContent: 'center',
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
});

export default DishDetailsSCreen;
