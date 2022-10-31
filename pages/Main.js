import React from 'react'
import { Button, StyleSheet, Text, View, Pressable } from 'react-native'
import commonStyles from '../assets/styles'
const Main = ({ navigation }) => {
  return (
    <View style={[commonStyles.flexColFirstEnd]}>
      <View style={[styles.leftMoneyCont]}>
        <Text style={styles.leftMoneyPercent}>10%</Text>
        <Text>9,996,000원 남음</Text>
        <View>
          <Text>9,996,000원</Text>
          <Text>마지막날</Text>
        </View>
      </View>
      <View style={[styles.dateCont]}>
        <Text>2022년 10월 31일 (월)</Text>
      </View>
      <View style={[styles.diffSpendCont]}>
        <View>
          <Text>오늘 현재까지</Text>
          <Text>0원</Text>
        </View>
        <View>
          <Text>어제</Text>
          <Text>0원</Text>
        </View>
        <View>
          <Text>이번 달 현재까지</Text>
          <Text>0원</Text>
        </View>
        <View>
          <Text>지난달</Text>
          <Text>0원</Text>
        </View>
      </View>
      <Pressable style={[commonStyles.btnType1]}>
        <Text style={[commonStyles.btnType1Text]}>+</Text>
      </Pressable>
      <Button title="버튼" onPress={() => navigation.navigate('Calendar')} />
    </View>
  )
}

const styles = StyleSheet.create({
  leftMoneyCont: {
    flex: 6,
    backgroundColor: '#4488ed',
    width: '100%',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  leftMoneyPercent: {
    fontSize: '80px',
    color: '#eae5e5',
    fontWeight: '100',
  },
  dateCont: {
    flex: 1,
  },
  diffSpendCont: {
    flex: 8,
  },
})

export default Main
