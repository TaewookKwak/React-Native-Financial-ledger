import React from 'react'
import { Button, TouchableOpacity, Text, View } from 'react-native'
const Calendar = ({ navigation }) => {
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

export default Calendar
