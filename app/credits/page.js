import { AiFillCheckCircle } from 'react-icons/ai'
import { BsChevronRight } from 'react-icons/bs'

const pricingPlans = [
  {
    name: 'Hobby',
    price: '$0',
    description: 'Limited to access to some features',
    features: [
      'Includes 250 buse service credits',
      'Includes 2,000 daily flow runs',
      'Includes 1 portal login',
    ],
  },
  {
    name: 'Pro',
    price: '$9.99',
    description: 'Limited only to busses of a part of the town',
    features: [
      'Includes 250 buse service credits',
      'Includes 2,000 daily flow runs',
      'Includes 1 portal login',
    ],
    hasBadge: true,
  },
  {
    name: 'Enterprise',
    price: '$20',
    description: 'Unlimited access to all buses in all cities',
    features: [
      'Includes 250 buse service credits',
      'Includes 2,000 daily flow runs',
      'Includes 1 portal login',
    ],
  },
]

const Credits = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold mb-3'>Credits</h1>
        <p>
          You have 0 credits, check out our pricing plans below to get started.
        </p>
      </div>
      <div className='mt-6 flex-grow'>
        <div className='flex flex-col gap-5 md:flex-row items-center justify-center'>
          {pricingPlans.map((plan) => (
            <div key={plan.name} className='h-full relative'>
              {plan.hasBadge && (
                <div className='absolute top-2 -right-6 bg-red-500 text-white rounded-full p-2 rotate-45'>
                  <p className='text-sm font-bold'>10% Discount</p>
                </div>
              )}
              <div className='flex flex-col gap-1 p-4 border border-red-200 rounded-2xl max-w-xs'>
                <h2 className='text-2xl font-bold'>{plan.name}</h2>
                <p className='text-2xl font-bold'>{plan.price}</p>
                <p className='text-xl font-extralight'>{plan.description}</p>
                <ul className='flex flex-col gap-3 mt-4'>
                  {plan.features.map((feature) => (
                    <li key={feature} className='text-xl font-extralight'>
                      <AiFillCheckCircle className='inline-block mr-2 text-green-500' />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button>
                  <div className='flex justify-center items-center gap-2 bg-red-500 text-white rounded-md p-3'>
                    <p className='text-xl font-bold'>Buy Now</p>
                    <p className='text-xl font-bold'>
                      <BsChevronRight size={20} />
                    </p>
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Credits
