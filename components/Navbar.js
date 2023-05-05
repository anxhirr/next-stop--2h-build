'use client'

import { useRouter } from 'next/navigation'
import { FaDirections } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineSatelliteAlt } from 'react-icons/md'
import Link from 'next/link'
import { BsFillCreditCardFill } from 'react-icons/bs'

const LINKS = [
  {
    name: 'Directions',
    path: '/',
    icon: <FaDirections size={25} />,
  },
  {
    name: 'Lines',
    path: '/lines',
    icon: <MdOutlineSatelliteAlt size={25} />,
  },

  {
    name: 'Credits',
    path: '/credits',
    icon: <BsFillCreditCardFill size={25} />,
  },
  {
    name: 'Profile',
    path: '/profile',
    icon: <CgProfile size={25} />,
  },
]

const Navbar = () => {
  const router = useRouter()
  return (
    <div className='bg-gray-700 text-white sticky bottom-0'>
      <div className='p-2 flex justify-between'>
        {LINKS.map((link) => {
          return (
            <Link
              href={link.path}
              key={link.name}
              className='flex flex-col gap-1 p-2 items-center'
            >
              {link.icon}
              <p>{link.name}</p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
export default Navbar
