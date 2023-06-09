import Image from 'next/image'
import Link from 'next/link'
import { AiFillHome } from 'react-icons/ai'
import { BsFillCapslockFill, BsSearch } from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci'
import { FiArrowRight } from 'react-icons/fi'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdWork } from 'react-icons/md'

const Directions = () => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex justify-between p-4'>
        <GiHamburgerMenu size={25} />
        <Image
          src='https://i.ibb.co/HCdm8ny/Whats-App-Image-2023-05-08-at-22-36-21.jpg'
          alt=''
          width={150}
          height={50}
        />
        <p>Tirane</p>
      </div>
      <div className='relative rounded-md mt-10'>
        <input
          type='text'
          placeholder='Where do you want to go'
          className='w-full p-3 text-black'
        />
        <div className='absolute top-0 right-0 h-full p-4 bg-red-500'>
          <BsSearch className='text-black' />
        </div>
      </div>
      <div className='flex mt-4'>
        <div className='px-2 py-5 bg-orange-500 w-full flex items-center gap-3'>
          <div>
            <CiLocationOn size={25} />
          </div>
          <div>
            Your location is required in order to provide you with the best
            possible experience
          </div>
        </div>
      </div>
      <div className='flex-grow overflow-y-scroll my-4'>
        <div className='p-2 bg-gray-400'>
          <div className='flex justify-between'>
            <p>Favorites</p>
            <p>Add</p>
          </div>
        </div>
        <div className='bg-gray-800'>
          <div className='flex justify-between items-center p-2'>
            <div className='flex gap-2 items-center'>
              <AiFillHome size={25} />
              <div>
                <p>Home</p>
                <p>Tap To Set</p>
              </div>
            </div>
            <div>
              <FiArrowRight size={25} />
            </div>
          </div>
          <div className='flex justify-between items-center p-2'>
            <div className='flex gap-2 items-center'>
              <MdWork size={25} />
              <div>
                <p>Work</p>
                <p>Tap To Set</p>
              </div>
            </div>
            <div>
              <FiArrowRight size={25} />
            </div>
          </div>
        </div>
        <div className='p-2 bg-gray-400'>
          <div>
            <p>Next Stop Community</p>
          </div>
        </div>
        <div className='bg-gray-800'>
          <div className='flex justify-between items-center p-2'>
            <div className='flex gap-2 items-center'>
              <BsFillCapslockFill size={25} />
              <div className='py-4'>
                <p>Help make public transport better</p>
              </div>
            </div>
            <Link
              className='border-b border-gray-400 text-gray-400'
              href='https://github.com/anxhirr/next-stop--2h-build'
            >
              Join us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Directions
