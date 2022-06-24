import {
  View, Text, StyleSheet, Image, Pressable,
} from 'react-native';
import Proptypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';

function DishListItem({
  dishName, description, price, image, id,
}) {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate('Dish', { id })} style={styles.container}>
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
    </Pressable>
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
  id: Proptypes.number.isRequired,

  image: Proptypes.string,
};

DishListItem.defaultProps = {
  image: 'Image unavailable',
};
export default DishListItem;
