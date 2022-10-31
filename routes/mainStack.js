import Main from '../pages/Main'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

const screens = {
  Main: {
    screen: Main,
  },
}

const MainStack = createNativeStackNavigator()
