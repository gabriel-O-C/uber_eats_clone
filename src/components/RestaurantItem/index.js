import {
  StyleSheet, View, Image, Text, Pressable,
} from 'react-native';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';

function RestaurantItem({
  sourceImage, title, subtitle, rating, id,
}) {
  const navigation = useNavigation();
  function handlePress() {
    navigation.navigate('RestaurantDetailsScreen', { id });
  }
  return (
    <Pressable onPress={handlePress} style={styles.restaurantContainer}>
      <Image
        style={styles.image}
        source={{ uri: sourceImage }}
      />
      <View style={styles.row}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>

        <View style={styles.rating}>
          <Text>{rating}</Text>
        </View>

      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    aspectRatio: 5 / 3,
    marginBottom: 5,
  },
  restaurantContainer: {
    width: '100%',
    marginVertical: 10,
  },
  subtitle: {
    color: 'grey',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    marginLeft: 'auto',
    backgroundColor: 'lightgray',
    borderRadius: 20,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

RestaurantItem.propTypes = {
  sourceImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default RestaurantItem;
