'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >

    <div className="footer-gradient" />

    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-evenly flex-wrap gap-5">

        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Join the virtual realm
        </h4>

        <button type="button"
          className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]"
        >

          <img
            src="/headset.svg"
            alt="headset"
            className="w-[24px] h-[24px] object-contain"
          />

          <span className="font-normal text-[16px] text-white">
            Enter Metaverse
          </span>

        </button>
      </div>

      <div className="grid grid-cols-3 gap-8 py-8 px-6 md:grid-cols-3 items-center justify-items-center">

        <div>
          <h2 className="mb-6 text-lg font-bold text-gray-500 uppercase dark:text-gray-400">Company</h2>
          <ul className="text-gray-500 dark:text-gray-400">
            <li className="mb-4">
              <a href="#" className=" hover:underline">About</a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">Careers</a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">Blog</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-6 text-lg font-bold text-gray-500 uppercase dark:text-gray-400">Legal</h2>
          <ul className="text-gray-500 dark:text-gray-400">
            <li className="mb-4">
              <a href="#" className="hover:underline">Privacy Policy</a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">Licensing</a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">Terms &amp; Conditions</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-6 text-lg font-bold text-gray-500 uppercase dark:text-gray-400">Download</h2>
          <ul className="text-gray-500 dark:text-gray-400 ">
            <li className="mb-4">
              <a href="#" className="hover:underline">iOS</a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">Android</a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">Windows</a>
            </li>
          </ul>
        </div>

      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">
            METAVERUS
          </h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2021 - 2022 Metaversus. All rights reserved.
          </p>

          <div className="flex gap-4">
            {socials.map((social) => (
              <img
                key={social.name}
                src={social.url}
                alt={social.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
