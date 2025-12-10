// components/Footer.jsx

import React from 'react';
import Image from 'next/image';

const socialIcons = [
  { name: 'Instagram', src: '/images/instagram.png', alt: 'Instagram', href: '#' },
  { name: 'Facebook', src: '/images/facebook.png', alt: 'Facebook', href: '#' },
  { name: 'WhatsApp', src: '/images/whatsapp.png', alt: 'WhatsApp', href: '#' },
];

export default function Footer() {
  return (
    // REDUCED VERTICAL PADDING (py-8/py-10) and removed mt-22
    <footer className="bg-[#FFFFFF] py-8 md:py-10 border-t border-[#e7e7e7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 3-Column Grid Layout for Desktop */}
        <div className="
          grid grid-cols-1 md:grid-cols-3 
          gap-6 md:gap-4 
          items-center 
          text-center md:text-left
          mb-4
        ">

          {/* 1. Contact Info (Left) */}
          <div className="text-gray-700 text-sm order-2 md:order-1 flex flex-col items-center md:items-start">
            <p className="mb-1">
              <span className="font-semibold">Contact</span> - +91 90817 51109
            </p>
            <p>
              <span className="font-semibold">Email</span> - tanzoinquire@gmail.com
            </p>
          </div>

          {/* 2. Brand Logo/Tagline (Center) */}
          <div className="order-1 md:order-2 text-center">
            <h3 className="text-3xl font-bold tracking-wider text-gray-900 mb-1">
              TANZO
            </h3>
            <p className="text-sm text-gray-600">
              Premium T-shirts for Everyone.
            </p>
          </div>

          {/* 3. Follow Us / Social Icons (Right) */}
          <div className="order-3 md:order-3 flex flex-col items-center md:items-end">
            <p className="text-sm font-semibold text-gray-700 mb-2">
              Follow Us
            </p>
            <div className="flex space-x-3">
              {socialIcons.map((icon) => (
                <a key={icon.name} href={icon.href} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={icon.src}
                    alt={icon.alt}
                    width={28}
                    height={28}
                    className="transition duration-150 hover:opacity-80"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright (Below the main content) */}
        {/* REDUCED vertical spacing: pt-4 mt-4 */}
        <div className="pt-4  border-t border-gray-200 text-center">
            <p className="text-xs text-gray-500 pt-4">
                © 2024 TANZO. All Rights Reserved.
            </p>
        </div>

      </div>
    </footer>
  );
}