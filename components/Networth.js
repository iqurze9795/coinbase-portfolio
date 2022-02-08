import React from 'react'
import styled from 'styled-components'
import { Doughnut, Bar } from 'react-chartjs-2'
import Image from 'next/image'
import 'chart.js/auto'
import MoonbeamIcon from '../assets/coin-icon/moonbeam.png'
import MoonriverIcon from '../assets/coin-icon/moonriver.png'

const Networth = () => {
  const data = {
    labels: ['ETH', 'USDC', 'BTC', 'GLMR'],
    datasets: [
      {
        data: [300, 50, 100, 100],
        backgroundColor: ['#D93780', '#78C8C7', '#E8B840', '#65C378'],
        borderColor: 'none',
        color: '#FFFFFF',
        hoverOffset: 4,
      },
    ],
  }
  const networkData = {
    labels: ['GLMR', 'MOVR'],
    datasets: [
      {
        data: [300000, 1000000],
        backgroundColor: ['#D93780', '#E8B840'],
        borderColor: 'none',
        color: '#FFFFFF',
        hoverOffset: 4,
      },
    ],
  }
  const networkOptions = {
    plugins: {
      legend: {
        display: false,
        labels: {
          // This more specific font property overrides the global property
          font: {
            size: 14,
          },
          color: 'white',
        },
      },
    },
  }
  const options = {
    plugins: {
      legend: {
        labels: {
          // This more specific font property overrides the global property
          font: {
            size: 14,
          },
          color: 'white',
        },
      },
    },
  }
  return (
    <Wrapper>
      <Card>
        <Title>YOUR NET WORTH</Title>
        <h1 className="gradient__text">470,000$</h1>
        <Description>With Holding 4 Assets</Description>
        <PlaceHolder />
      </Card>
      <ChainWrapper>
        <p>Network Allocation ($)</p>
        <Bar data={networkData} options={networkOptions}></Bar>
      </ChainWrapper>
      <Card style={{ height: '20rem' }}>
        <Title>Coin Allocation</Title>
        <Doughnut style={{ padding: '2rem' }} data={data} options={options} />
        <PlaceHolder />
      </Card>
    </Wrapper>
  )
}

export default Networth

const Wrapper = styled.div`
  margin-top: 2rem;
  padding-right: 1rem;
`

const Card = styled.div`
  width: 21rem;
  height: 11rem;
  border: 1px solid #282b2f;
  margin-bottom: 1rem;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`
const ChainWrapper = styled.div`
  width: 21rem;
  height: 16rem;
  border: 1px solid #282b2f;
  margin-bottom: 1rem;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`

const Title = styled.div`
  font-weight: 500;
  font-size: 1rem;
`
const Description = styled.div`
  font-size: 1.1rem;
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
