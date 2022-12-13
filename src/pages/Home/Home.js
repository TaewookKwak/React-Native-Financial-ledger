import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>I am screen1</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Record', { msg: 'From Screen 1' })}
      >
        <Text>Click Me!</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home
