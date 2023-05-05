'use client'

import { BsSearch } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'

const Header = ({ setFilteredLines, busLines }) => {
  const handleSearch = (e) => {
    const searchQuery = e.target.value
    if (searchQuery === '') return setFilteredLines(busLines)
    const filteredLines = busLines.all.filter((line) =>
      line.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    setFilteredLines({ all: filteredLines })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='flex justify-between items-center gap-3 p-3'>
          <GiHamburgerMenu size={25} />
          <div className='relative rounded-md flex-grow'>
            <input
              type='text'
              placeholder='Search for a bus line'
              className='w-full p-3 text-black'
              onChange={handleSearch}
            />
            <button
              type='submit'
              className='absolute top-0 right-0 h-full p-4 bg-red-500'
            >
              <BsSearch className='text-black' />
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
export default Header
