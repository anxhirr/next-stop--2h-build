'use client'

import Header from '@/components/Header'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export const BUS_LINES = {
  all: [
    {
      id: 1,
      name: 'Line 1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      isFavorite: true,
      isBus: true,
      isNight: false,
      isMetro: false,
      etaInSec: 300,
    },
    {
      id: 2,
      name: 'Line 2',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      isFavorite: true,
      isBus: true,
      isNight: false,
      isMetro: false,
      etaInSec: 500,
    },
    {
      id: 3,
      name: 'Line 3',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      isFavorite: true,
      isBus: false,
      isNight: false,
      isMetro: true,
      etaInSec: 200,
    },
  ],
  recent: [
    {
      id: 1,
      name: 'Line 1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      isFavorite: true,
      isBus: true,
      isNight: false,
      isMetro: false,
    },
    {
      id: 2,
      name: 'Line 2',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      isFavorite: true,
      isBus: true,
      isNight: false,
      isMetro: false,
    },
  ],
  bus: [
    {
      id: 1,
      name: 'Line 1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      isFavorite: true,
      isBus: true,
      isNight: false,
      isMetro: false,
    },
    {
      id: 2,
      name: 'Line 2',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      isFavorite: true,
      isBus: true,
      isNight: false,
      isMetro: false,
    },
  ],
  metro: [
    {
      id: 3,
      name: 'Line 3',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      isFavorite: true,
      isBus: false,
      isNight: false,
      isMetro: true,
    },
  ],
}

const Lines = () => {
  const [lines, setLines] = useState(BUS_LINES)
  const [filteredLines, setFilteredLines] = useState(BUS_LINES)
  const [activeTab, setActiveTab] = useState(
    Object.keys(BUS_LINES)[0].toLowerCase()
  )
  const router = useRouter()

  useEffect(() => {
    if (activeTab === 'all') return setFilteredLines(lines)

    const filtered = {
      [activeTab]: lines[activeTab],
    }
    setFilteredLines(filtered)
  }, [activeTab])

  return (
    <div className='bg-gray-700 flex flex-col min-h-screen'>
      <Header busLines={lines} setFilteredLines={setFilteredLines} />
      <div className='flex justify-center'>
        <div className='flex gap-2'>
          {Object.keys(BUS_LINES).map((key) => {
            return (
              <button
                key={key}
                onClick={() => {
                  setActiveTab(key.toLowerCase())
                }}
                className={
                  activeTab === key.toLowerCase()
                    ? 'border-b-2 border-red-400'
                    : ''
                }
              >
                <div className='px-5 py-3 bg-gray-600 rounded-t-md'>{key}</div>
              </button>
            )
          })}
        </div>
      </div>
      <div className='flex-grow'>
        <div className='px-3'>
          {Object.keys(filteredLines).map((key) => {
            console.log(key)
            return (
              <div key={key}>
                <div className='flex flex-col gap-3'>
                  <div className='text-2xl font-bold capitalize'>{key}</div>
                  {filteredLines[key].map((line) => {
                    return (
                      <button
                        key={line.id}
                        className='flex flex-col gap-1 p-3 bg-gray-600 rounded-md'
                        onClick={() => {
                          router.push(`/lines/${line.id}`)
                        }}
                      >
                        <div className='flex justify-between'>
                          <div className='flex gap-2'>
                            <div className='text-xl font-bold'>{line.name}</div>
                          </div>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default Lines
