import React from 'react'
import styled from 'styled-components'
import Portfolio from './Portfolio'
import Networth from '../components/Networth'
import ChainInfo from './ChainInfo'
const Main = () => {
  return (
    <Wrapper>
      
      <Portfolio />
      <Networth />
      {/* <ChainInfo /> */}
    </Wrapper>
  )
}

export default Main

const Wrapper = styled.div`
  display: flex;
  max-height: calc(100vh - 100px);
  width: 1024px;
  overflow: hidden;
  overflow-y: scroll; /// เยดโด้วววว!!
  ::-webkit-scrollbar {
    display: none;
  }
  & div {
    border-radius: 0.4rem;
  }
`
