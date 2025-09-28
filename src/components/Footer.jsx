import React from 'react'

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-50 border-t mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h4 className="text-xl font-bold">IELTS Pro</h4>
          <p className="mt-2 text-slate-600">Helping students get the band they deserve. Contact us for personalized coaching and mock tests.</p>
        </div>

        <div>
          <h5 className="font-semibold">Quick Links</h5>
          <ul className="mt-3 space-y-2 text-slate-600">
            <li><a href="#" className="hover:text-slate-900">Courses</a></li>
            <li><a href="#" className="hover:text-slate-900">Mock Tests</a></li>
            <li><a href="#" className="hover:text-slate-900">Pricing</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold">Contact</h5>
          <p className="mt-3 text-slate-600">hello@ieltspro.example<br/>+1 (555) 123-456</p>
        </div>
      </div>

      <div className="border-t pt-4 pb-6">
        <div className="max-w-7xl mx-auto px-6 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} IELTS Pro — Built with Shivam Ugale
        </div>
      </div>
    </footer>
  )
}
