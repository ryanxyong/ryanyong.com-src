import React from 'react';

// import images
import Img1 from '../img/portfolio/1.jpg';
import Img2 from '../img/portfolio/2.jpg';
import Img3 from '../img/portfolio/3.jpg';
import Img4 from '../img/portfolio/4.jpg';
import Img5 from '../img/portfolio/5.jpg';
import Img6 from '../img/portfolio/6.jpg';

// import Link
import { Link } from 'react-router-dom';

// import motion
import { motion } from 'framer-motion';

// import transition
import { transition1 } from '../transitions';

const Portfolio = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: '100%' }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: '100%' }}
      transition={ transition1 }
      className='section'
    >
      <div className='container mx-auto h-full relative'>
        {/* <div className='flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'> */}
        <div className='flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: '-80%' }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: '-80%' }}
            transition={ transition1 }
            className='flex flex-col lg:items-start'
          >
            <h1 className='h1'>Portfolio</h1>
            <p className='mb-12 max-w-sm'>
              Hearing stories connects me to people. From entrepreneurs
              to foodies, people face challenges. I actively listen to people's
              perspectives to understand their problems and needs that I 
              guide my iterations to a solution.
              <br />
              <br />
              I love optimizing solutions with creative solution to generate 
              value to the users and business.
              <br />
              <br />
              Languages: Python, C/C++, Java, JavaScript
              Technical Skills: Agile, Git, Linux, HTTP, REST API, Microservices, React
              <br />
              <br />
              Contact me if my skills interest you!
            </p>

            <Link to={'/contact'} className='btn mb-[30px] mx-auto lg:mx-0'>
              Contact me
            </Link>
          </motion.div>

          {/* img grid */}
          <div className='grid grid-cols-2 gap-4'>
            {/* img */}
            <div className='w-[187] lg:max-w-[220px] h-[187px] lg:h-[220px] bg-accent object-fit:cover overflow-hidden'>
              <a href='https://github.com/ryanxyong/ryanyong.com'>
                <img
                  className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' 
                  src={Img1} 
                  alt='' 
                />
              </a>
            </div>

            {/* img */}
            <div className='w-[187] lg:max-w-[220px] h-[187px] lg:h-[220px] bg-accent object-fit:cover overflow-hidden'>
              <a href='https://github.com/ryanxyong/cel-shader'>
                <img
                  className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' 
                  src={Img2} 
                  alt='' 
                />
              </a>
            </div>

            {/* img */}
            <div className='w-[187] lg:max-w-[220px] h-[187px] lg:h-[220px] bg-accent object-fit:cover overflow-hidden'>
              <a href='https://github.com/ryanxyong/handwritingrecog'>
                <img
                  className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' 
                  src={Img3} 
                  alt='' 
                />
              </a>
            </div>

            {/* img */}
            <div className='w-[187] lg:max-w-[220px] h-[187px] lg:h-[220px] bg-accent object-fit:cover overflow-hidden'>
              <a href='https://github.com/ryanxyong/nuggets-2'>
                <img
                  className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' 
                  src={Img4} 
                  alt='' 
                />
              </a>
            </div>

            {/* img */}
            <div className='w-[187] lg:max-w-[220px] h-[187px] lg:h-[220px] bg-accent object-fit:cover overflow-hidden'>
              <a href='https://github.com/ryanxyong/gradientpaste'>
                <img
                  className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' 
                  src={Img5} 
                  alt='' 
                />
              </a>
            </div>

            {/* img */}
            <div className='w-[187] lg:max-w-[220px] h-[187px] lg:h-[220px] bg-accent object-fit:cover overflow-hidden'>
              <a href='https://github.com/ryanxyong/tinysearchengine'>
                <img
                  className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' 
                  src={Img6} 
                  alt='' 
                />
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
