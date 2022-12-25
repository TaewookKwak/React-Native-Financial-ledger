import { useFonts } from 'expo-font'
import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'

export const MyText = ({ children, color }) => {
  return <StyledText color={color}>{children}</StyledText>
}

const StyledText = styled.Text`
  font-family: 'Ttang_L';
  font-weight: 900;
  color: ${({ color }) => color};
`
