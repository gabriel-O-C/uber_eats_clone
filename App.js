import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { HomeScreen, RestaurantDetailsSCreen, DishDetailsSCreen } from './src/screens';

export default function App() {
  return (
    <>
      <View style={{ flex: 1 }}>
        <DishDetailsSCreen />
      </View>
      <StatusBar style="auto" />
    </>
  );
}
