// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Favorites, Restaurants} from './pages';

const Tab = createBottomTabNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="RestaurantPage">
        <Tab.Screen name="FavoritePage" component={Favorites} />
        <Tab.Screen options={{fontSize: 20}} name="RestaurantPage" component={Restaurants} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Router;
