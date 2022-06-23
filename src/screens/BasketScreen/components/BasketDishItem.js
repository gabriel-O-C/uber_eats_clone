import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

function BasketDishItem({ name, price }) {
  return (
    <View style={styles.row}>
      <View style={styles.quantityContainer}>
        <Text>1</Text>
      </View>
      <Text style={{ fontWeight: '600' }}>{name}</Text>
      <Text style={{ marginLeft: 'auto' }}>{`$ ${(price).toFixed(2)}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    marginHorizontal: 5,
  },

  quantityContainer: {
    backgroundColor: 'lightgrey',
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginRight: 10,
    borderRadius: 3,
  },
});

BasketDishItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default BasketDishItem;
