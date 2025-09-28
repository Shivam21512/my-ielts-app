import React, { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full bg-white/70 backdrop-blur sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-2xl font-extrabold text-blue-600">IELTS <span className="text-green-600">Pro</span></div>
          <span className="hidden md:inline text-sm text-slate-500">Master your band</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-slate-600 hover:text-slate-900">Home</a>
          <a href="#features" className="text-slate-600 hover:text-slate-900">Features</a>
          <a href="#testimonials" className="text-slate-600 hover:text-slate-900">Testimonials</a>
          <a href="#contact" className="text-slate-600 hover:text-slate-900">Contact</a>
          <button className="ml-4 bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-2 rounded-lg shadow">Get Started</button>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="p-2 rounded-md border">
            {open ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      
{open && (
  <div className="md:hidden bg-white/95 border-t">
    <div className="px-6 py-4 flex flex-col gap-3">
      <a href="#" onClick={() => setOpen(false)} className="text-slate-700">Home</a>
      <a href="#features" onClick={() => setOpen(false)} className="text-slate-700">Features</a>
      <a href="#testimonials" onClick={() => setOpen(false)} className="text-slate-700">Testimonials</a>
      <a href="#contact" onClick={() => setOpen(false)} className="text-slate-700">Contact</a>
      <button
        onClick={() => setOpen(false)}
        className="mt-2 bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-2 rounded-lg shadow"
      >
        Get Started
      </button>
    </div>
  </div>
)}

    </header>
  )
}
