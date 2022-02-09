import React from 'react'
import styled from 'styled-components'
import { Doughnut, Bar } from 'react-chartjs-2'
import Image from 'next/image'
import 'chart.js/auto'
import MoonbeamIcon from '../assets/coin-icon/moonbeam.png'
import MoonriverIcon from '../assets/coin-icon/moonriver.png'

const ChainInfo = () => {
  return (
    <Wrapper>
      <Card style={{ borderLeft: '8px solid #f29299' }}>
        <ChainWrapper>
          <Title>Marketcap</Title>
          <Description className="gradient__text">$439.48M</Description>
        </ChainWrapper>
      </Card>
      <Card style={{ borderLeft: '8px solid #97E39A' }}>
        <ChainWrapper>
          <Title>Circulating</Title>
          <Description className="gradient__text">~81.75M GLMR</Description>
        </ChainWrapper>
      </Card>
      <Card style={{ borderLeft: '8px solid #97A0E3' }}>
        <ChainWrapper>
          <Title>Staked Value</Title>
          <Description className="gradient__text">
            ~ 30.33M GLMR
          </Description>
        </ChainWrapper>
      </Card>
      <Card style={{ borderLeft: '8px solid #E3C697' }}>
        <ChainWrapper>
          <Title>Holders</Title>
          <Description className="gradient__text">
            103,248
          </Description>
        </ChainWrapper>
      </Card>
    </Wrapper>
  )
}

export default ChainInfo

const Wrapper = styled.div`
  display: flex;

  justify-content: space-between;
`

const Card = styled.div`
  width: 156px;
  height: 60px;
  border-right: 1px solid #282b2f;
  border-top: 1px solid #282b2f;
  border-bottom: 1px solid #282b2f;
  margin-top: 1rem;
  /* padding: 1.5rem; */
  display: flex;
  align-items: center;
  /* background: linear-gradient(89.97deg, #ae67fa 1.84%, #f49867 102.67%); */
  flex-direction: column;
`
const ChainWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Title = styled.div`
  font-weight: 500;
  font-size: 1rem;
`
const Description = styled.div`
  margin-top: 6px;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
`
const PlaceHolder = styled.div`
  flex: 1;
`
const Additional = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > span {
    color: #8a919e !important;
    font-size: 1rem;
  }
`
