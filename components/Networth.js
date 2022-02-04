import React from 'react'
import styled from 'styled-components'
import { Doughnut } from 'react-chartjs-2'
import 'chart.js/auto'

const Networth = () => {
  const data = {
    labels: ['ETH', 'USDC', 'BTC', 'GLMR'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [300, 50, 100, 100],
        backgroundColor: ['#D93780', '#78C8C7', '#E8B840', '#65C378'],
        borderColor: 'none',
        color: '#FFFFFF',
        hoverOffset: 4,
      },
    ],
  }
  return (
    <Wrapper>
      <Card>
        <Title>NET WORTH</Title>
        <h1 className="gradient__text">470,000$</h1>
        <Description>Holding 4 Assets</Description>
        <PlaceHolder />
      </Card>
      <Card style={{ height: '20rem' }}>
        <Title>Allocation</Title>
        <Doughnut style={{ padding: '2rem' }} data={data} />
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
