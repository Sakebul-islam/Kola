import React from 'react'
import aboutUs from '../assets/images/aboutUs.jpg'
const AboutUs = () => {
  return (
    <div className='my-14 p-4 flex flex-col lg:flex-row justify-between items-center gap-6'>
      <div className='flex-1 space-y-3'>
        <h1 className='text-left font-semibold text-3xl'>
          <span className='text-lime-500 font-bold text-4xl'>A</span>bout Us
        </h1>

        <p>
          Our platform aims to connect individuals and organizations to reduce
          food waste and ensure that surplus food reaches those in need. We
          believe in the power of community and collective action to make a
          positive impact on food sustainability and hunger alleviation.
        </p>
        <p>
          By facilitating the sharing of excess food, we contribute to
          minimizing food waste and promoting a more sustainable environment.
          Through the efforts of our dedicated community members, we strive to
          create a more equitable food distribution system and foster a sense of
          social responsibility.
        </p>
        <p>
          Join us in our mission to create a world where no one goes hungry and
          where every individual has access to nutritious meals. Together, we
          can make a significant difference in the lives of individuals and
          communities while working towards a more sustainable future for all.
        </p>
      </div>
      <figure className='flex-1'>
        <img src={aboutUs} alt='' />
      </figure>
    </div>
  );
}

export default AboutUs