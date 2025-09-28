import React from 'react'
import { motion } from 'framer-motion'
import heroImg from '../assets/hero.jpg'

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
      
      <div className="md:col-span-7">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight text-slate-900"
        >
          Achieve Your Dream <span className="gradient-text">IELTS Score</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-6 text-slate-600 max-w-xl"
        >
          Master all four IELTS skills with our comprehensive online platform. Expert-led courses, timed mock tests, and personalized feedback powered by smart analytics to help you succeed.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <a className="inline-flex items-center justify-center px-6 py-3 rounded-lg shadow-md bg-gradient-to-r from-blue-500 to-green-500 text-white font-medium" href="#">
            Get Started Today
          </a>
          <a className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-slate-200 text-slate-700" href="#">
            View Free Resources
          </a>
        </motion.div>

        <div className="mt-10 flex gap-10">
          <div>
            <div className="text-2xl font-bold text-blue-500">10K+</div>
            <div className="text-sm text-slate-500">Students Trained</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600">8.5</div>
            <div className="text-sm text-slate-500">Average Score</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600">95%</div>
            <div className="text-sm text-slate-500">Success Rate</div>
          </div>
        </div>
      </div>

      
      <div className="md:col-span-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative rounded-2xl shadow-2xl overflow-hidden"
        >
          <img src={heroImg} alt="Students studying" className="w-full h-auto object-cover md:h-[360px]" />
          <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm shadow-lg">#1 IELTS Platform</div>
        </motion.div>
      </div>
    </section>
  )
}
