import React from 'react';
import { useSpring, animated } from 'react-spring';
import pic from '../assets/businesspic.png';

const About = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { tension: 280, friction: 60 }, // Adjust these values for different transition effects
  });

  return (
    <animated.div name='about' className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4' style={props}>
      
      {/* Right Side */}
      <div className='flex flex-col h-full justify-center'>
        <h3 className='text-5xl md:text-6xl font-bold'>About My Business</h3>
        <p className='text-2xl py-6'>This is My Lash n Me</p>
        <p className='pb-6'>
        My Lash N’ Me embodies Individuality in Everything Lashes!
        From the styles, to the lengths to the curls, we aim to cater
         exclusively to YOU. It’s an all inclusive experience, exclusively
          at My Lash N’ Me. Stay Tuned for our upcoming releases!
        </p>
      </div>

      {/* Left Side */}
      <div className='h-[80vh] flex items-center justify-center'>
        <img
          className='object-cover p-2 rounded-full'
          src={pic}
          alt="/"
          style={{ width: '500px', height: '500px' }} // Adjust these values as needed
        />
      </div>
    </animated.div>
  );
};

export default About;
