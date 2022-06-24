import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  BasketScreen,
  DishDetailsSCreen,
  OrderDetailsScreen,
  OrdersScreen,
  RestaurantDetailsSCreen,
} from '../screens';
import TabStack from './TabStack';

const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animationEnabled: false,
          transitionConfig: () => ({
            transitionSpec: {
              duration: 0,
              timing: 0,
            },
          }),
        }}
      >
        <Stack.Screen name="Home" component={TabStack} />
        <Stack.Screen name="OrdersScreen" component={OrdersScreen} />
        <Stack.Screen name="OrderDetailsScreen" component={OrderDetailsScreen} />
        <Stack.Screen name="RestaurantDetailsScreen" component={RestaurantDetailsSCreen} />
        <Stack.Screen name="BasketScreen" component={BasketScreen} />
        <Stack.Screen name="DishDetailsSCreen" component={DishDetailsSCreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
