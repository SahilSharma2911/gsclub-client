"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative bg-[url('/images/adult-page-hero.jpg')] bg-cover bg-center h-[350px] m-14 px-8 py-12 max-w-full rounded-4xl overflow-hidden">
      <motion.div
        initial={{ opacity: 1 }}
        className="absolute inset-0 flex items-center justify-center text-center text-white text-4xl font-extrabold tracking-wide font-unbounded uppercase"
      >
        Adult Toys
      </motion.div>
    </div>
  );
};

export default Hero;
