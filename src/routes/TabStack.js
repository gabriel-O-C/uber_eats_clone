import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Foundation, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import {
  HomeScreen,
  OrdersScreen,
  RestaurantDetailsSCreen,
  DishDetailsSCreen,
  BasketScreen,
  OrderDetailsScreen,
} from '../screens';

const Tab = createMaterialBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const OrderStack = createNativeStackNavigator();

export default function TabStack() {
  return (

    <Tab.Navigator
      barStyle={{ backgroundColor: 'white' }}
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
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{ tabBarIcon: ({ color }) => <Foundation name="home" size={24} color={color} /> }}
      />
      <Tab.Screen
        name="Orders"
        component={OrderStackNavigator}
        options={{ tabBarIcon: ({ color }) => <MaterialIcons name="list-alt" size={24} color={color} /> }}
      />
      <Tab.Screen
        name="Profile"
        component={OrdersScreen}
        options={{ tabBarIcon: ({ color }) => <FontAwesome5 name="user-alt" size={24} color={color} /> }}
      />
    </Tab.Navigator>

  );
}
function HomeStackNavigator() {
  return (
    <HomeStack.Navigator
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
      <HomeStack.Screen name="Restaurants" component={HomeScreen} />
      <HomeStack.Screen name="Restaurant" component={RestaurantDetailsSCreen} />
      <HomeStack.Screen name="Dish" component={DishDetailsSCreen} />
      <HomeStack.Screen name="Basket" component={BasketScreen} />

    </HomeStack.Navigator>
  );
}

function OrderStackNavigator() {
  return (
    <OrderStack.Navigator
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
      <OrderStack.Screen name="Orders" component={OrdersScreen} />
      <OrderStack.Screen name="Order" component={OrderDetailsScreen} />

    </OrderStack.Navigator>
  );
}
