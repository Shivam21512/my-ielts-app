import React from 'react'
import { motion } from 'framer-motion'
import avatar1 from '../assets/avatar1.jpg'
import avatar2 from '../assets/avatar2.jpg'
import avatar3 from '../assets/avatar3.jpg'
import { FaStar } from 'react-icons/fa'

const TESTIMONIALS = [
  {
    avatar: avatar1,
    name: 'Rani Patil',
    role: 'Student',
    text: 'I improved from 6.5 to 8.0 in just 3 months. The mock tests helped me manage time perfectly.',
    rating: 5
  },
  {
    avatar: avatar2,
    name: 'Sheth lokk',
    role: 'Student',
    text: 'The AI Band Score and personalized feedback were spot-on. Tutors were friendly and professional.',
    rating: 5
  },
  {
    avatar: avatar3,
    name: 'Raj Patil',
    role: 'Student',
    text: 'Well-structured lessons and lots of speaking practice. Highly recommended!',
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center">
        <h3 className="text-lg text-green-600 font-semibold">Student Reviews</h3>
        <h2 className="text-3xl font-bold mt-2 text-slate-900">Real students. Real results.</h2>
        <p className="mt-3 text-slate-600 max-w-2xl mx-auto">Hear from students who improved their bands using the platform.</p>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t, i) => (
          <motion.blockquote
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12 }}
            className="bg-white p-6 rounded-xl shadow"
          >
            <div className="flex items-center gap-4">
              <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <div className="font-semibold text-slate-900">{t.name}</div>
                <div className="text-sm text-slate-500">{t.role}</div>
              </div>
            </div>

            <p className="mt-4 text-slate-600">{t.text}</p>

            <div className="mt-4 flex items-center gap-1">
              {Array.from({ length: t.rating }).map((_, idx) => (
                <FaStar key={idx} className="text-yellow-400" />
              ))}
            </div>
          </motion.blockquote>
        ))}
      </div>
    </section>
  )
}
