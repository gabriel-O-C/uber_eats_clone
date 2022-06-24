import {
  View, Text, Image, StyleSheet, Pressable,
} from 'react-native';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';

function OrderListItem({
  image, restaurantName, status, id,
}) {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate('Order', { id })} style={styles.page}>
      <Image style={styles.image} source={{ uri: image }} />
      <View>
        <Text style={styles.name}>{restaurantName}</Text>
        <Text>3 items - $32.12</Text>
        <Text>{`2 days ago - ${status}`}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  page: {
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
  },
  name: {
    fontWeight: '600',
    fontSize: 16,
  },
});

OrderListItem.propTypes = {
  image: PropTypes.string.isRequired,
  restaurantName: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default OrderListItem;
