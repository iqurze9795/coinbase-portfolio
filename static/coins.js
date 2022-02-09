import btcLogo from '../assets/btc.png'
import maticLogo from '../assets/matic.png'
import dogeLogo from '../assets/doge.png'
import ethLogo from '../assets/eth.png'
import lunaLogo from '../assets/luna.png'
import solLogo from '../assets/sol.png'

export const coins = [
  {
    name: 'Bitcoin',
    sign: 'BTC',
    chain: 'moonbeam',
    logo: btcLogo,
    balanceUsd: '230,345.32',
    balanceCoin: 6.35667736,
    priceUsd: 43359.32,
    change: -1.94,
    allocation: 30.01,
  },
  {
    name: 'Solana',
    sign: 'SOL',
    chain: 'moonbeam',
    logo: solLogo,
    balanceUsd: '120,239.2',
    balanceCoin: '1,000',
    priceUsd: 120.90,
    change: 10.74,
    allocation: 28.29,
  },
  {
    name: 'Polygon',
    sign: 'MATIC',
    chain: 'moonriver',
    logo: maticLogo,
    balanceUsd: '50,239',
    balanceCoin: '12,000',
    priceUsd: 1.92,
    change: -5.24,
    allocation: 17.89,
  },
  {
    name: 'Ethereum',
    sign: 'ETH',
    chain: 'moonriver',
    logo: ethLogo,
    balanceUsd: '30,073',
    balanceCoin: 10.8,
    priceUsd: '3,073',
    change: 6.24,
    allocation: 15.89,
  },
  {
    name: 'Terra',
    sign: 'LUNA',
    chain: 'moonriver',
    logo: lunaLogo,
    balanceUsd: '21,230',
    balanceCoin: 200,
    priceUsd: 54.74,
    change: -5.24,
    allocation: 12.89,
  },
  {
    name: 'Dogecoin 🌙',
    sign: 'DOGE',
    chain: 'moonbeam',
    logo: dogeLogo,
    balanceUsd: '12,030',
    balanceCoin: '120,000',
    priceUsd: 0.155,
    change: 12,
    allocation: 7.3,
  },
]
