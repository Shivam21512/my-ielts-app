import React from 'react'
import { motion } from 'framer-motion'
import { FaMicrophone, FaClipboardList, FaRobot, FaUserGraduate } from 'react-icons/fa'

const FEATURES = [
  {
    id: 1,
    title: 'Speaking Practice',
    desc: 'One-on-one mock speaking with expert feedback and sample answers.',
    icon: <FaMicrophone size={20} />
  },
  {
    id: 2,
    title: 'Mock Tests',
    desc: 'Timed full-length tests that mirror the real exam conditions.',
    icon: <FaClipboardList size={20} />
  },
  {
    id: 3,
    title: 'AI Band Score',
    desc: 'Instant AI-powered band estimation and tips to improve your score.',
    icon: <FaRobot size={20} />
  },
  {
    id: 4,
    title: 'Personalized Coaching',
    desc: 'Tailored study plans and teacher-led review sessions.',
    icon: <FaUserGraduate size={20} />
  }
]

export default function Features() {
  return (
    <section id="features" className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center">
        <h3 className="text-lg text-green-600 font-semibold">What we offer</h3>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-slate-900">Everything for a higher band score</h2>
        <p className="mt-3 text-slate-600 max-w-2xl mx-auto">Practice with confidence—our platform gives you tests, targeted feedback, and interactive lessons for all parts of the test.</p>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {FEATURES.map((f, i) => (
          <motion.article
            key={f.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12 }}
            className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-blue-50 to-green-50 text-blue-600">
                {f.icon}
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">{f.title}</h4>
                <p className="text-sm text-slate-500 mt-1">{f.desc}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
