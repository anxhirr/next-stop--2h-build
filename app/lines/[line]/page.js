'use client'

import Image from 'next/image'
import { BUS_LINES } from '../page'
import Navbar from '@/components/Navbar'
import { BsArrowLeft } from 'react-icons/bs'
import { useEffect, useState } from 'react'

const Line = (props) => {
  const { line } = props.params
  const busData = BUS_LINES.all.find((bus) => bus.id === parseInt(line))
  const [etaInSec, setEtaInSec] = useState(busData.etaInSec)

  useEffect(() => {
    const interval = setInterval(() => {
      setEtaInSec((prev) => prev - 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])
  const minutes = Math.floor(etaInSec / 60)
  const seconds = etaInSec % 60

  return (
    <div className='min-h-screen flex flex-col'>
      <div className='w-full bg-gray-600 py-4 flex justify-between px-4'>
        <button>
          <BsArrowLeft size={25} />
        </button>
        <h1>{busData.name}</h1>
        <div />
      </div>
      <Image
        src='https://xmonkeys360.com/wp-content/uploads/2020/02/Googlemap-600x551-1.jpg'
        alt={busData.description}
        width={500}
        height={500}
      />
      <div className='flex-grow flex flex-col items-center mt-6'>
        <div>Estimated Arrival Time:</div>
        <div>
          {etaInSec > 0 ? (
            <div className='text-4xl font-bold'>
              {`${minutes}:${seconds}`} minutes
            </div>
          ) : (
            <div className='text-4xl font-bold mt-3'>Arrived</div>
          )}
        </div>
      </div>
      <Navbar />
    </div>
  )
}
export default Line
