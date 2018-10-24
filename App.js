import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createTopTabNavigator,createMaterialTopTabNavigator,createTabNavigator } from 'react-navigation';
import HomeScreen from "./HomeScreen/HomeScreen"
import FirstScreen from "./FirstScreen/FirstScreen"
import SettingScreen from "./SettingScreen/SettingScreen"
import ProfileScreen from "./ProfileScreen/ProfileScreen"
export default class App extends React.Component {

  render() {
    return (
       <TabNavigator/>
    )
    
}
}

const SettingsStack = createStackNavigator({
  Settings: SettingScreen,
  Profile: ProfileScreen,
});

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    First:FirstScreen
  },
  {
    initialRouteName: 'Home',
  }
);

const TabNavigator = createTabNavigator(
  {
    Home: RootStack,
    Settings: SettingsStack,
  }
); 