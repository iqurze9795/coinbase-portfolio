import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })
import React from 'react'
import styled from 'styled-components'

function CustomChart() {
  const options = {
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0,
      },
    },
    chart: {
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      width: 2.5,
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 0.9,
        opacityFrom: 0.5,
        opacityTo: 0.2,
        stops: [0, 80, 100],
      },
    },
    xaxis: {
      type: 'numeric',
      lines: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: { show: false },
    },
    yaxis: {
      show: false,
    },
    tooltip: {
      x: { show: false },
    },
    theme: {
      monochrome: {
        enabled: true,
        color: '#F29299',
        shadeTo: 'light',
        shadeIntensity: 0.65,
      },
    },
  }
  const series = [
    {
      name: 'Moonbeam',
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    },
  ]
  return (
    <Wrapper>
      <Chart
        options={options}
        series={series}
        type="area"
        width="100%"
        height={200}
      />
    </Wrapper>
  )
}

export default CustomChart

const Wrapper = styled.div`
  display: flex;
  width: 100%;
`
