import React from 'react'
import styled from 'styled-components/native'

export const MyText = ({ children, color }) => {
  return <StyledText color={color}>{children}</StyledText>
}

export const StyledText = styled.Text`
  font-family: 'Ttang_L';
  font-weight: 900;
  color: ${({ color }) => color};
`
