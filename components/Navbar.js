'use client'

import { useRouter } from 'next/navigation'
import { FaDirections } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineSatelliteAlt } from 'react-icons/md'

const LINKS = [
  {
    name: 'Directions',
    path: '/directions',
    icon: <FaDirections size={25} />,
  },
  {
    name: 'Lines',
    path: '/lines',
    icon: <MdOutlineSatelliteAlt size={25} />,
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
    <div className='bg-gray-700'>
      <div className='p-2 flex justify-between'>
        {LINKS.map((link) => {
          return (
            <button
              key={link.name}
              onClick={() => router.push(link.path)}
              className='flex flex-col gap-1 p-2 items-center'
            >
              {link.icon}
              <p>{link.name}</p>
            </button>
          )
        })}
      </div>
    </div>
  )
}
export default Navbar
