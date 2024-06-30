import React from 'react';
import { useSpring, animated } from 'react-spring';
import Logo from '../assets/logo.png';

const About = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { tension: 280, friction: 60 }, // Adjust these values for different transition effects
  });

  return (
    <animated.div name='about' className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4' style={props}>
      {/* Left Side */}
      <div className='h-[80vh] flex items-center justify-center'>
        <img
          className='object-cover p-2'
          src={Logo}
          alt="/"
          style={{ width: '500px', height: '500px' }} // Adjust these values as needed
        />
      </div>
      {/* Right Side */}
      <div className='flex flex-col h-full justify-center'>
        <h3 className='text-5xl md:text-6xl font-bold'>About Me</h3>
        <p className='text-2xl py-6'>Hi. Im Trusta</p>
        <p className='pb-6'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse modi commodi dignissimos id maiores error,
          nihil dolor pariatur minima voluptatum officiis aut laboriosam, qui et impedit dolorum veniam harum accusantium
          magnam placeat veritatis quas suscipit? Iusto corrupti nam aperiam culpa cum excepturi, iste quo assumenda
          blanditiis, laborum aut asperiores porro.
        </p>
      </div>
    </animated.div>
  );
};

export default About;
