import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { HomeScreen, RestaurantDetailsSCreen } from './src/screens';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <RestaurantDetailsSCreen />
      </View>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
