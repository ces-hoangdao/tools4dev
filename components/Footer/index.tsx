import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-800">
      <div className=" max-w-7xl mx-auto px-8 p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/" className="text-xl text-gray-800 font-bold">
            <Image src="/logo.png" alt="logo" width={113} height={60} />
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500  sm:mb-0">
            <li>
              <Link href="/about-me" className="mr-4 hover:underline md:mr-6 ">
                About
              </Link>
            </li>
            <li>
              <Link href="contact" className="mr-4 hover:underline md:mr-6">
                Contact
              </Link>
            </li>
            <li>
              <a
                href="https://www.paypal.com/paypalme/hoanghelios"
                target="_blank"
                rel="noreferrer"
                className="mr-4 hover:underline md:mr-6"
              >
                Buy Me a Coffee
              </a>
            </li>
          </ul>
        </div>
        <span className="block text-sm text-gray-500 sm:text-center">
          © 2023{' '}
          <a href="#" className="hover:underline">
            Tools4dev by Hoang Helios
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
