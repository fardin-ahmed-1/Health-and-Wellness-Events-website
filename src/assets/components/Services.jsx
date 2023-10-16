import React from 'react'
import Service from './Service'


const Services = ({ services }) => {
  return (

    <div className=' bg-whiteC py-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container px-6 mx-auto'>
        {
          services.map(service => <Service key={service.id} service={service}> </Service>)
        }
      </div>
    </div>
  )
}

export default Services