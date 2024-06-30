import React from 'react';
import { motion } from 'framer-motion';
import services from "../assets/servicespic.png";
import gallery from "../assets/gallery.png";

const GalleryPage = () => {
  return (
    <div name='gallery' className="w-full h-full text-black bg-white">
      <div className="max-w-[1240px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 2.0 }}
          className="pb-8"
        >
          <p className="text-4xl font-bold inline border-b-4 text-black border-black">Full Gallery</p>
          <p className="py-6">A comprehensive collection of our works</p>
        </motion.div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Grid Item 1 */}
          <motion.div
            style={{ backgroundImage: `url(${services})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-96 bg-cover bg-center"
            whileHover={{ scale: 1.05 }}
          >
            <div className='opacity-0 group-hover:opacity-100'></div>
          </motion.div>

          {/* Grid Item 2 */}
          <motion.div
            style={{ backgroundImage: `url(${gallery})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-96 bg-cover bg-center"
            whileHover={{ scale: 1.05 }}
          >
            <div className='opacity-0 group-hover:opacity-100'></div>
          </motion.div>

          

          {/* Add more grid items as needed */}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
