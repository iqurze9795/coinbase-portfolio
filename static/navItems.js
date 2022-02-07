import {
  AiOutlinePieChart,
  AiOutlinePlusCircle,
  AiOutlineGift,
  AiFillEdit,
} from 'react-icons/ai'
import { BiTrendingUp } from 'react-icons/bi'
import { RiCoinsLine, RiNotification3Line } from 'react-icons/ri'
import { MdWeb } from 'react-icons/md'
import { BsPersonPlus } from 'react-icons/bs'

export const navItems = [
  {
    title: 'Dashboard',
    icon: <AiOutlinePieChart size={32} />,
  },
  {
    title: 'Allowance',
    icon: <AiFillEdit size={32} />,
  },
  {
    title: 'Transaction',
    icon: <RiCoinsLine size={32} />,
  },
  {
    title: 'Staking',
    icon: <MdWeb size={32} />,
  },
  {
    title: 'Defi Board',
    icon: <AiOutlinePlusCircle size={32} />,
  },
  // {
  //   title: 'Notifications',
  //   icon: <RiNotification3Line />,
  // },
  // {
  //   title: 'Invite Friends',
  //   icon: <BsPersonPlus />,
  // },
  // {
  //   title: 'Send a gift',
  //   icon: <AiOutlineGift />,
  // },
]
