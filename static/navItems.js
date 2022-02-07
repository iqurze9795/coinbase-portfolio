import {
  AiOutlinePieChart,
  AiOutlinePlusCircle,
  AiFillEdit,
} from 'react-icons/ai'
import { RiCoinsLine } from 'react-icons/ri'
import { MdOutlineAnchor } from 'react-icons/md'
import { GrAnchor } from 'react-icons/gr'
import { BsPiggyBank } from 'react-icons/bs'

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
    icon: <BsPiggyBank size={32} />,
  },
  {
    title: 'Defi Board',
    icon: <MdOutlineAnchor size={32} />,
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
