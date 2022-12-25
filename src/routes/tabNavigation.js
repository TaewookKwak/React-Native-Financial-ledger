import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '@pages/Home/Home'
import Calendar from '@pages/Calendar/Calendar'
import Setting from '@pages/Setting/Setting'
import { Foundation } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import {
  HomeScreenNavigation,
  CalendarScreenNavigation,
  SettingScreenNavigation,
} from '@routes/screenNavigation'
import { Text } from 'react-native'
import { MyText } from '@/styled-components/MyText'

const Tab = createBottomTabNavigator()

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // route 값을 받아서 아이콘 다르게 설정
        tabBarIcon: ({ color, focused, size }) => {
          if (route.name === 'Home') {
            return <Foundation name="home" size={28} color={color} />
          } else if (route.name === 'Calendar') {
            return <FontAwesome5 name="calendar-alt" size={28} color={color} />
          } else if (route.name === 'Setting') {
            return <Ionicons name="settings-sharp" size={28} color={color} />
          }
        },
        // name은 영문으로 유지하되, 보여지는 값은 한글로 설정
        tabBarLabel: ({ children, color, focused, position }) => {
          if (route.name === 'Home') {
            return <MyText color={color}>홈</MyText>
          } else if (route.name === 'Calendar') {
            return <MyText color={color}>달력</MyText>
          } else if (route.name === 'Setting') {
            return <MyText color={color}>설정</MyText>
          }
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'lightgray',
        headerShown: false,
        // 상위 컨테이너
        tabBarStyle: {
          height: 80,
          position: 'absolute',
          bottom: 16,
          left: 16,
          right: 16,
          borderRadius: 25,
          paddingBottom: 0,
        },
        // 아이콘+이름 컨테이너
        tabBarItemStyle: {
          padding: 15,
        },
        // 라벨
        tabBarLabelStyle: {
          fontSize: '16px',
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreenNavigation} />
      <Tab.Screen name="Calendar" component={CalendarScreenNavigation} />
      <Tab.Screen name="Setting" component={SettingScreenNavigation} />
    </Tab.Navigator>
  )
}

export default TabNavigation
