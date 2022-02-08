import {
  AiOutlinePieChart,
  AiOutlinePlusCircle,
  AiOutlineGift,
  AiFillEdit,
} from 'react-icons/ai'
import { RiCoinsLine, RiGitPullRequestFill, RiEdit2Line } from 'react-icons/ri'
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
    icon: <RiEdit2Line size={32} />,
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
  {
    title: 'Feature Request',
    icon: <RiGitPullRequestFill size={32} />,
  },
  // {
  //   title: 'Invite Friends',
  //   icon: <BsPersonPlus />,
  // },
  // {
  //   title: 'Send a gift',
  //   icon: <AiOutlineGift />,
  // },
]
