import { GiHamburgerMenu } from 'react-icons/gi'
import { BsSearch } from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci'
import { AiFillHome } from 'react-icons/ai'
import { FiArrowRight } from 'react-icons/fi'
import { MdWork } from 'react-icons/md'
import Navbar from '@/components/Navbar'

const Directions = () => {
  return (
    <div className='flex flex-col gap-2 min-h-screen'>
      <div className='flex justify-between p-4'>
        <GiHamburgerMenu />
        <p>Tirane</p>
      </div>
      <div className='relative rounded-md mt-10'>
        <input
          type='text'
          placeholder='Wher do you want to go'
          className='w-full p-3'
        />
        <div className='absolute top-0 right-0 h-full p-4 bg-red-500'>
          <BsSearch className='text-black' />
        </div>
      </div>
      <div className='flex mt-4'>
        <div className='p-2 bg-orange-500'>
          <CiLocationOn />
          <div>
            Your location is rewuired in order to provide you with the best
            possible experience
          </div>
        </div>
      </div>
      <div className='flex-grow'>
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
              <MdWork size={25} />
              <div>
                <p>Work</p>
                <p>Tap To Set</p>
              </div>
            </div>
            <p>Join us</p>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  )
}
export default Directions
