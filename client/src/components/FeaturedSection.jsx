import React from 'react'
import Title from './Title'
import { dummyCarData, assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import CarCard from './CarCard'

const FeaturedSection = () => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center py-24 px-6 md:px-16 lg:px-24 xl:px-32">
      
      <Title
        title="Featured Cars"
        subTitle="Discover our premium selection of vehicles."
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-18">
        {dummyCarData.slice(0, 6).map((car) => (
          <CarCard key={car._id} car={car} />
        ))}
      </div>

      <button
        onClick={() => {
          navigate('/cars')
          window.scrollTo(0, 0)
        }}
        className="flex items-center justify-center gap-2 px-6 py-2 border border-borderColor hover:bg-gray-md mt-18 cursor-pointer"
      >
        Explore all cars
        <img src={assets.arrow_icon} alt="arrow icon" />
      </button>

    </div>
  )
}

export default FeaturedSection
