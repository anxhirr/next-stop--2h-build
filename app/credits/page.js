import { AiFillCheckCircle } from 'react-icons/ai'

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
            <div key={plan.name} className='h-full'>
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Credits
