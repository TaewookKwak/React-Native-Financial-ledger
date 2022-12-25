import React, { useCallback, useEffect } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const Home = ({ navigation }) => {
  return (
    <View>
      <Text style={{ fontSize: '30', fontFamily: 'Ttang' }}>
        나는나는나는멍충이다
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Record', { msg: 'From Screen 1' })}
      >
        <Text style={{ fontSize: '30', fontFamily: 'Pretendard' }}>
          나는나는나는멍충이다
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home
