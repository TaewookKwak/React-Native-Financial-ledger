import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const Record = ({ navigation }) => {
  return (
    <View>
      <Text>I am screen1</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Record2ND', { msg: 'From Record' })}
      >
        <Text>Click Me!</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Record
