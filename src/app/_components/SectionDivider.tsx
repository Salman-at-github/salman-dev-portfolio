"use client"
import React from 'react';
import {motion} from 'framer-motion';

export default function SectionDivider() {
  return (
    <motion.div className='flex items-center justify-center'
    initial={{y:100, opacity:0}}
    animate={{y:0, opacity:1}}
    transition={{delay:0.3}}>
      <div className='bg-[#97deff] dark:bg-purple-950 w-1 h-16 my-10 rounded-full'></div>
    </motion.div>
  );
}
