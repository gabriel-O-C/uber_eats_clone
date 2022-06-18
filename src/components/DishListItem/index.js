import {
  View, Text, StyleSheet, Image,
} from 'react-native';
import Proptypes from 'prop-types';

function DishListItem({
  dishName, description, price, image,
}) {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{dishName}</Text>
        <Text style={styles.description} numberOfLines={2}>{description}</Text>
        <Text style={styles.price}>{`$ ${price}`}</Text>
      </View>
      {image && (
        <Image
          source={{ uri: image }}
          style={styles.image}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  description: {
    color: 'gray',
  },
  price: {
    fontSize: 16,
  },
  image: {
    height: 100,
    aspectRatio: 1,
  },
});

DishListItem.propTypes = {
  dishName: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired,
  price: Proptypes.number.isRequired,
  image: Proptypes.string,
};

DishListItem.defaultProps = {
  image: 'Image unavailable',
};
export default DishListItem;
