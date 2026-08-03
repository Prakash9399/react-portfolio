import React from "react";
import { motion } from "framer-motion";

import { RiReactjsLine } from "react-icons/ri";
import { DiJava } from "react-icons/di";
import { FaNodeJs, FaDocker, FaGitAlt } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

import {
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiGraphql,
  SiExpress,
  SiMongodb,
  SiJenkins,
  SiPlaywright,
  SiJest,
} from "react-icons/si";

const iconVariants=(duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse",
        }
    }
})
const Technologies = () => {
  return (
    <div className=' border-b border-neutral-800 pb-24'>
    <motion.h2
    whileInView={{opacity:1,y:0}}
    initial={{opacity:0,y:-100}}
    transition={{duration:1.5}}
     className=' my-20 text-center text-4xl'>
    Technologies
    </motion.h2>
    <motion.div
  whileInView={{ opacity: 1, x: 0 }}
  initial={{ opacity: 0, x: -100 }}
  transition={{ duration: 1.5 }}
  className="flex flex-wrap items-center justify-center gap-4"
>
  <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
    <RiReactjsLine className="text-7xl text-cyan-400" />
  </motion.div>

  <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
    <SiTypescript className="text-7xl text-blue-500" />
  </motion.div>

  <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
    <SiJavascript className="text-7xl text-yellow-400" />
  </motion.div>

  <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
    <SiRedux className="text-7xl text-purple-500" />
  </motion.div>

  <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
    <SiTailwindcss className="text-7xl text-sky-400" />
  </motion.div>

  <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
    <DiJava className="text-7xl text-orange-500" />
  </motion.div>

  <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
    <FaNodeJs className="text-7xl text-green-500" />
  </motion.div>

  <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
    <SiExpress className="text-7xl text-gray-300" />
  </motion.div>

  <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
    <SiGraphql className="text-7xl text-pink-500" />
  </motion.div>

  <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
    <SiMongodb className="text-7xl text-green-500" />
  </motion.div>

  <motion.div variants={iconVariants(5.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
    <BiLogoPostgresql className="text-7xl text-sky-700" />
  </motion.div>

  <motion.div variants={iconVariants(4.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
    <FaDocker className="text-7xl text-blue-500" />
  </motion.div>

  <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
    <SiJenkins className="text-7xl text-red-500" />
  </motion.div>

  <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
    <SiPlaywright className="text-7xl text-green-500" />
  </motion.div>

  <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
    <SiJest className="text-7xl text-red-600" />
  </motion.div>

  <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
    <FaGitAlt className="text-7xl text-orange-600" />
  </motion.div>
</motion.div>
    </div>
  )
}

export default Technologies