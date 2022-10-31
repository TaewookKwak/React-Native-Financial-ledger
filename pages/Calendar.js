import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
const Calendar = ({ navigation }) => {
  return (
    <View>
      <Text>Calendar</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Calendar')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  )
}

export default Calendar
