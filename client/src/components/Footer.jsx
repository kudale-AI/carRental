import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-60 text-sm text-gray-500">
      
      {/* Top section */}
      <div className="flex flex-wrap justify-between gap-8 pb-6 border-b border-gray-300">
        
        {/* Logo & description */}
        <div>
          <img src={assets.logo} alt="logo" className="h-8 md:h-9" />
          <p className="max-w-80 mt-3">
            Premium car rental service with a wide selection of luxury and everyday vehicles.
          </p>

          <div className="flex items-center gap-4 mt-4">
            <a href="#"><img src={assets.facebook_logo} alt="Facebook" className="w-6 h-6" /></a>
            <a href="#"><img src={assets.instagram_logo} alt="Instagram" className="w-6 h-6" /></a>
            <a href="#"><img src={assets.twitter_logo} alt="Twitter" className="w-6 h-6" /></a>
            <a href="#"><img src={assets.gmail_logo} alt="Gmail" className="w-6 h-6" /></a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h2 className="text-base font-medium text-gray-800">Quick Links</h2>
          <ul className="mt-3 flex flex-col gap-2">
            <li><a href="#">Home</a></li>
            <li><a href="#">Browse Cars</a></li>
            <li><a href="#">List Your Car</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </div>
           <div>
          <h2 className="text-base font-medium text-gray-800 uppercase">Resources</h2>
          <ul className="mt-3 flex flex-col gap-2">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Insurance</a></li>
          
          </ul>
        </div>
        <div>
          <h2 className="text-base font-medium text-gray-800 uppercase">Contact</h2>
          <ul className="mt-3 flex flex-col gap-2">
            <li>72, Electronic Complex</li>
            <li>Indore, Madhya Pradesh(India)</li>
            <li>+91 9876543210</li>
            <li>Support.@kar.com</li>
          
          </ul>
        </div>

      </div>

      {/* Bottom section */}
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between py-5">
        <p>
          © {new Date().getFullYear()}{' '}
          <a href="https://karz.com" className="hover:underline">
            Karz
          </a>
          . All rights reserved.
        </p>

        <ul className="flex items-center gap-4">
          <li><a href="#">Privacy</a></li><li> | </li>
          <li><a href="#">Terms</a></li><li> | </li>
          <li><a href="#">Cookies</a></li>
        </ul>
      </div>

    </div>
  )
}

export default Footer
