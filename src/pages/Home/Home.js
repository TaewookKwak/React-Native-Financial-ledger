import React, { useCallback, useEffect } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { MyMainContainer } from '@/styled-components/MyContainer'
import styled from 'styled-components/native'
import { COLOR } from '@/constant'
import { StyledText } from '@/styled-components/MyText'
import { Entypo } from '@expo/vector-icons'

const StyledBoxText = styled(StyledText)`
  font-size: 24px;
  margin-bottom: 24px;
  text-align: center;
`

const StyledSmallBtnText = styled(StyledText)`
  font-size: 12px;
  margin-right: 5px;
`

const StyledBoxContainer = styled.View`
  padding: 20px;
  background-color: ${({ color }) => color};
  border-radius: 14px;
`
const StyledSmallBtnContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
`

const Home = ({ navigation }) => {
  return (
    <MyMainContainer>
      <StyledBoxContainer color={COLOR.LIGHTBLUE}>
        <StyledBoxText>2,500,000원 벌었어요</StyledBoxText>
        <StyledSmallBtnContainer>
          <StyledSmallBtnText>자세히</StyledSmallBtnText>
          <Entypo name="chevron-thin-right" size={12} color="black" />
        </StyledSmallBtnContainer>
      </StyledBoxContainer>

      <StyledBoxContainer color={COLOR.LIGHTPINK}>
        <StyledBoxText>2,500,000원 벌었어요</StyledBoxText>
      </StyledBoxContainer>

      <Text style={{ fontSize: '30', fontFamily: 'Ttang_L' }}>
        나는나는나는멍충이다
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Record', { msg: 'From Screen 1' })}
      >
        <Text style={{ fontSize: '30', fontFamily: 'Pretendard' }}>
          나는나는나는멍충이다
        </Text>
      </TouchableOpacity>
    </MyMainContainer>
  )
}

export default Home
