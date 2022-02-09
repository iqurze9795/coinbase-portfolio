import React, { useState } from 'react'
import styled from 'styled-components'
import MoonbeamLogo from '../assets/coin-icon/moonbeam.png'
import MoonriverLogo from '../assets/coin-icon/moonriver.png'
import Image from 'next/image'
const ChainSelect = () => {
  const [activeChain, setActiveChain] = useState('moonbeam')
  return (
    <Wrapper>
      <Button
        onClick={() => setActiveChain('moonbeam')}
        style={{
          //   background:  'white' : 'transparent',
          border:
            activeChain === 'moonbeam'
              ? '1px solid #C6467F'
              : '1px solid #272b2f',
          //   color: activeChain === 'moonbeam' ? 'black' : 'white',
        }}
      >
        <Image src={MoonbeamLogo} width={16} height={16} />
        <span>Moonbeam</span>
      </Button>
      <Button
        onClick={() => setActiveChain('moonriver')}
        style={{
          border:
            activeChain === 'moonriver'
              ? '1px solid #E6B73F'
              : '1px solid #272b2f',
        }}
      >
        <Image src={MoonriverLogo} width={16} height={16} />
        <span>Moonriver</span>
      </Button>
    </Wrapper>
  )
}

export default ChainSelect

const Wrapper = styled.div`
  display: flex;
  margin-top: 1rem;
  margin-bottom: 1rem;
  justify-content: flex-end;
  align-items: center;
  & > button:first-child {
    margin-right: 10px;
  }
`
const Title = styled.div`
  font-size: 1rem;
  font-weight: 600;
`

const Button = styled.button`
  border: 1px solid #272b2f;
  color: white;
  width: 120px;
  padding: 0.5rem;
  border-radius: 16px;
  background: transparent;
  display: flex;
  & > :first-child {
    margin-right: 10px !important;
  }
  cursor: pointer;
`
