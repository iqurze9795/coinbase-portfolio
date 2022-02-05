import React from 'react'
import styled from 'styled-components'
import Portfolio from './Portfolio'
import Networth from '../components/Networth'
const Main = () => {
  return (
    <Wrapper>
      <Portfolio />
      <Networth />
    </Wrapper>
  )
}

export default Main

const Wrapper = styled.div`
  display: flex;
  /* max-height: calc(100vh - 64px); */
  overflow: hidden;
  & div {
    border-radius: 0.4rem;
  }
`
