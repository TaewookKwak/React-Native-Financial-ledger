import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '@pages/Home/Home'
import Calendar from '@pages/Calendar/Calendar'
import Setting from '@pages/Setting/Setting'
import {
  HomeScreenNavigation,
  CalendarScreenNavigation,
  SettingScreenNavigation,
} from '@routes/screenNavigation'

const Tab = createBottomTabNavigator()
const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBarOptions={{
        labelStyle: { fontSize: 18 },
        activeTintColor: 'red',
        inactiveTintColor: 'black',
      }}
    >
      <Tab.Screen name="Home" component={HomeScreenNavigation} />
      <Tab.Screen name="Calendar" component={CalendarScreenNavigation} />
      <Tab.Screen name="Setting" component={SettingScreenNavigation} />
    </Tab.Navigator>
  )
}

export default TabNavigation
