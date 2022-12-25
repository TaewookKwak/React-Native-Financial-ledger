import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import TabNavigation from '@/routes/tabNavigation'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

export default function App() {
  const Stack = createNativeStackNavigator()
  const [loaded] = useFonts({
    Pretendard: require('@/assets/fonts/PretendardVariable.ttf'),
    Ttang: require('@/assets/fonts/T-Medium.ttf'),
  })

  if (!loaded) {
    return null
  }

  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
