import {StyleSheet, View, Image, Text} from 'react-native';
function RestaurantItem({ sourceImage, title, subtitle }) {
    return (
      <View style={styles.restaurantContainer}>
        <Image
         style={styles.image}
         source={{uri: sourceImage}}
        />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    )
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
      color: 'grey'
    },
    title: {
      fontSize: 16,
      fontWeight: '500',
      marginVertical: 5,
    }
  });

export default RestaurantItem;
