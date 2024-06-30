import React, { useEffect, useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import {motion, useInView, useAnimation, useScroll, useTransform} from "framer-motion";
import services from "../assets/servicespic.png";
import gallery from "../assets/gallery.png";
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";
import client4 from "../assets/client4.png";
import client5 from "../assets/client5.png";
import client6 from "../assets/client6.png";



const TextParallaxContentExample = () => {
    return (
        <div className="bg-white">
            <TextParallaxContent 
                imgUrl={services}
                subheading="Our Services"
                heading="Heres What We Offer"
            >
               <ExampleContent2/>
            </TextParallaxContent>

            <TextParallaxContent
                imgUrl={gallery}
                subheading="Client Cam"
                heading="Check out some of stunning clients"

            >
               <ExampleContent3/>
            </TextParallaxContent>

            <TextParallaxContent
                imgUrl="https://images.unsplash.com/photo-1488509082528-cefbba5ad692"
                subheading="Modern"
                heading="Dress for the best"
            >
               <ExampleContent/>
            </TextParallaxContent>
        </div>
    );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
    return (
        <div
        style={{
         paddingLeft: IMG_PADDING,
         paddingRight: IMG_PADDING,
        }}
        >
            <div className="relative h-[150vh]">
               <StickyImage imgUrl={imgUrl}/>
               <OverlayCopy subheading={subheading} heading={heading}/>   
                
            </div>
            {children}
        </div>
    );
};

const StickyImage = ({imgUrl}) => {
   const targetRef = useRef(null);
      const {scrollYProgress} = useScroll ({
         target: targetRef,
         offset: ["end end", "end start"]
      });

      const scale = useTransform(scrollYProgress, [0,1], [1,0.85]);
      const opacity = useTransform(scrollYProgress, [0,1], [1,0]);

   return (
      <motion.div
      style={{
         backgroundImage: `url(${imgUrl})`,
         backgroundSize: "cover",
         backgroundPosition: "center",
         height: `calc(100vh - ${IMG_PADDING * 2}px)`,
         top: IMG_PADDING,
         scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl">
         <motion.div 
         style={{opacity,
         }}

         className="absolute inset-0 bg-neutral-950/70"
         />
      </motion.div>
   )
};

const OverlayCopy = ({heading, subheading}) => {
   const targetRef = useRef(null);
      const {scrollYProgress} = useScroll ({
         target: targetRef,
         offset: ["start end", "end start"]
      });
      

   return <motion.div
   ref={targetRef}
         className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
   
   >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">{subheading}</p>

      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>

   </motion.div>
}
 
const ExampleContent = () => (
   <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
     <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
       Additional content explaining the above card here
     </h2>
     <div className="col-span-1 md:col-span-8">
       <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
         blanditiis soluta eius quam modi aliquam quaerat odit deleniti minima
         maiores voluptate est ut saepe accusantium maxime doloremque nulla
         consectetur possimus.
       </p>
       <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
         reiciendis blanditiis aliquam aut fugit sint.
       </p>
       <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
         Learn more <FiArrowUpRight className="inline" />
       </button>
     </div>
   </div>
 );

 const ExampleContent2 = () => (
  <div className='max-w-[1240px] mx-auto flex flex-col gap-2 mt-10 mb-24'>
    {/* Section 1: Lash Extensions */}
    <div className="w-full md:h-[400px] flex flex-col md:flex-row border border-black">
      {/* Left side for text */}
      <div className="w-full md:w-[60%] lg:w-[50%] xl:w-[40%] shadow-xl flex flex-col rounded-lg ml-0">
        <h2 className="text-2xl font-bold text-center py-8">Lash Extensions</h2>
        <button className="bg-[#FBEEEA] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:scale-105 duration-200">
          <a href="https://app.acuityscheduling.com/schedule.php?owner=21251692" target="_blank" rel="noopener noreferrer" className="text-black block w-full h-full">Book Now</a>
        </button>
      </div>
      {/* Right side for image */}
      <div className="w-full md:w-[40%] lg:w-[50%] xl:w-[60%] flex items-center justify-center p-4">
        <img src={services} alt="Lash Extensions" className="max-w-full max-h-full" />
      </div>
    </div>

    {/* Section 2: Strip Lashes */}
    <div className="w-full md:h-[500px] flex flex-col md:flex-row border border-black">
      {/* Right side for image */}
      <div className="w-full md:w-[40%] lg:w-[50%] xl:w-[60%] flex items-center justify-center p-4">
        <img src={services} alt="Strip Lashes" className="max-w-full max-h-full" />
      </div>
      {/* Left side for text */}
      <div className="w-full md:w-[60%] lg:w-[50%] xl:w-[40%] shadow-xl flex flex-col rounded-lg ml-0">
        <h2 className="text-2xl font-bold text-center py-8">Strip Lashes</h2>
        <p className="text-center text-4xl font-bold">Kustom Kolletion</p>
        <p className="text-center text-4xl font-bold">£40/hr</p>
        <div className="text-center font-medium">
          <p className="py-2 border-b mx-8">Me X Cléopâtre: £40* The ultimate strip-cat eye look...</p>
          <p className="py-2 border-b mx-8">*Me X Sugarr: £40* A simple doll-eyed glam look. For when you want your lashes to be seen but not obvious.</p>
          <p className="py-2 border-b mx-8">*Me X Wispay: £40* Our signature strip lash look, with both wisp & spikes.</p>
          <p className="py-2 border-b mx-8">*Me X Savauge: £40* A sweet but savage strip lash look. A.K.A ‘Subtle Choppy Russians’</p>
          <p className="py-2 border-b mx-8">*Drop down for each:* Length: Maximum Length Volume: Light Hybrids, Russian Volume Extra Specifications/ add ons: (short text box)</p>
        </div>
      </div>
    </div>

    {/* Section 3: Online Training Course */}
    <div className="w-full md:h-[500px] flex flex-col md:flex-row border border-black">
      {/* Left side for text */}
      <div className="w-full md:w-[60%] lg:w-[50%] xl:w-[40%] shadow-xl flex flex-col rounded-lg ml-0">
        <div className="w-full md:w-[80%] shadow-xl bg-gray-100 flex flex-col p-4 my-4 rounded-lg">
          <h2 className="text-2xl font-bold text-center py-8">Online Training Course</h2>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Lorem ipsum dolor sit amet.</p>
            {/* Other paragraph elements */}
          </div>
          <button className="bg-[#FBEEEA] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:scale-105 duration-200">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-black block w-full h-full">Sign up Now</a>
          </button>
        </div>
      </div>
      {/* Right side for image */}
      <div className="w-full md:w-[40%] lg:w-[50%] xl:w-[60%] flex items-center justify-center p-4">
        <img src={services} alt="Online Training Course" className="max-w-full max-h-full" />
      </div>
    </div>
  </div>
);












 const ExampleContent3 = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true });
 
   const controls = useAnimation();
 
   useEffect(() => {
     if (isInView) {
       controls.start('visible');
     }
   }, [isInView, controls]);
 
   return (
     <div ref={ref} name='work' className="w-full h-full text-black bg-white">
       <div className="max-w-[1240px] mx-auto p-4 flex flex-col justify-center w-full h-full">
         <motion.div
           variants={{
             hidden: { opacity: 0, x: -100 },
             visible: { opacity: 1, x: 0 },
           }}
           initial="hidden"
           animate={controls}
           transition={{ duration: 2.0 }}
           className="pb-8"
         >
            <p className='text-center text-4xl font-bold pt-20 pb-20'>Client Cam</p>

         </motion.div>
 
         <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
           {/* Grid Item 1 */}
           <motion.div
             style={{ backgroundImage: `url(${client1})` }}
             className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-96 bg-cover bg-center"
             whileHover={{ scale: 1.05 }}
           >
             <div className='opacity-0 group-hover:opacity-100'></div>
           </motion.div>
 
           {/* Grid Item 2 */}
           <motion.div
             style={{ backgroundImage: `url(${client2})` }}
             className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-96 bg-cover bg-center"
             whileHover={{ scale: 1.05 }}
           >
             <div className='opacity-0 group-hover:opacity-100'></div>
           </motion.div>

           {/* Grid Item 3 */}
           <motion.div
             style={{ backgroundImage: `url(${client3})` }}
             className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-96 bg-cover bg-center"
             whileHover={{ scale: 1.05 }}
           >
             <div className='opacity-0 group-hover:opacity-100'></div>
           </motion.div>

           {/* Grid Item 4 */}
           <motion.div
             style={{ backgroundImage: `url(${client4})` }}
             className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-96 bg-cover bg-center"
             whileHover={{ scale: 1.05 }}
           >
             <div className='opacity-0 group-hover:opacity-100'></div>
           </motion.div>

           {/* Grid Item 5 */}
           <motion.div
             style={{ backgroundImage: `url(${client5})` }}
             className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-96 bg-cover bg-center"
             whileHover={{ scale: 1.05 }}
           >
             <div className='opacity-0 group-hover:opacity-100'></div>
           </motion.div>

           {/* Grid Item 6 */}
           <motion.div
             style={{ backgroundImage: `url(${client6})` }}
             className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-96 bg-cover bg-center"
             whileHover={{ scale: 1.05 }}
           >
             <div className='opacity-0 group-hover:opacity-100'></div>
           </motion.div>
         </div>
 
         <div className="flex justify-center mt-8 pt-20 pb-20">
           <a href="/more-gallery">
             <button className="text-center rounded-lg px-6 py-3 bg-black text-white font-bold text-lg">View More</button>
           </a>
         </div>
       </div>
     </div>
   );
 };
 

 
export default TextParallaxContentExample;
