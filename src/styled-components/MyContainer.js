import React from 'react'
import styled from 'styled-components/native'

export const MyMainContainer = ({ children }) => {
  return <StyledMainContainer>{children}</StyledMainContainer>
}

const StyledMainContainer = styled.View`
  padding: 20px;
  background-color: 'white';
`
