import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome, Entypo } from '@expo/vector-icons';

import Splash from '~/screens/Splash';
import Dividends from '~/screens/Dividends';
import Wallet from '~/screens/Wallet';
import Registration from '~/screens/Registration';
import AssetsList from '~/screens/AssetsList';
import Edit from '~/screens/Edit';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigatorRoutes = () => (
  <Tab.Navigator
    tabBarOptions={{ activeTintColor: '#000', labelStyle: { fontSize: 12 } }}
  >
    <Tab.Screen
      name="Dividends"
      component={Dividends}
      options={{
        title: 'Dividendos',
        tabBarIcon: ({ color }) => <FontAwesome name="dollar" size={20} color={color} />,
      }}
    />
    <Tab.Screen
      name="Wallet"
      component={Wallet}
      options={{
        title: 'Ativos',
        tabBarIcon: ({ color }) => <Entypo name="wallet" size={20} color={color} />,
      }}
    />
  </Tab.Navigator>
);

const AppRoutes = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TabNavigatorRoutes"
        component={TabNavigatorRoutes}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AssetsList"
        component={AssetsList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Registration"
        component={Registration}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Edit"
        component={Edit}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppRoutes;
