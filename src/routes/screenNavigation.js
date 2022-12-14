import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home from '@pages/Home/Home'
import Record from '@pages/Record/Record'
import Calendar from '@pages/Calendar/Calendar'
import Setting from '@pages/Setting/Setting'
import Record2ND from '@pages/Record/Record2ND'

const Stack = createNativeStackNavigator()

export const HomeScreenNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={Home}
        options={{
          headerTitle: '안씨네가계부',
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerTitleStyle: {
            color: 'red',
            textAlign: 'left',
          },
        }}
      />
      <Stack.Screen
        name="Record"
        component={Record}
        options={{
          title: '기록',
        }}
      />
      <Stack.Screen
        name="Record2ND"
        component={Record2ND}
        options={{
          title: '기록2',
        }}
      />
    </Stack.Navigator>
  )
}

export const CalendarScreenNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={Calendar}
        options={{
          title: 'Calendar',
        }}
      />
      <Stack.Screen name="Record" component={Record} />
      <Stack.Screen name="Record2ND" component={Record2ND} />
    </Stack.Navigator>
  )
}

export const SettingScreenNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={Setting}
        options={{
          title: 'Setting',
        }}
      />
      <Stack.Screen name="Record" component={Record} />
      <Stack.Screen name="Record2ND" component={Record2ND} />
    </Stack.Navigator>
  )
}
