import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import AddScreen from './AddScreen';
import ProfileScreen from './ProfileScreen';

Icon.loadFont();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline';
              } else if (route.name === 'Add') {
                iconName = focused ? 'ios-list-box' : 'ios-list';
              } else if (route.name === 'Profile') {
                iconName = focused ? 'ios-list-box' : 'ios-list';
              }
  
              // You can return any component that you like here!
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
          >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Add" component={AddScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}