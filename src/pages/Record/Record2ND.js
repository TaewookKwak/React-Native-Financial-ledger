import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
const Record2ND = ({ navigation }) => {
  return (
    <View>
      <Text>I am screen1</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Main', { msg: 'From Record' })}
      >
        <Text>Click Me!</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Record2ND
