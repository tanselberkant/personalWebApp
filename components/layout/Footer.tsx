import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className="w-full px-5 py-5 flex flex-col sm:flex-row justify-between items-center  border-t-[1.5px] border-dark-smallHeader dark:border-light-smallHeader lg:px-10 ">
      <div className="flex justify-start items-center mb-2 md:mb-0">
        <Link
          href="/posts"
          className="text-light-textDescription dark:text-dark-textDescription  text-center md:text-left  text-sm"
        >
          Posts
        </Link>
        <p className="xl:text-xs text-[9px] text-headingPrimary px-3">|</p>
        <Link
          href="/resume"
          className="text-light-textDescription dark:text-dark-textDescription  text-center md:text-left  text-sm"
        >
          Resume
        </Link>
        <p className="xl:text-xs text-[9px] text-headingPrimary px-3">|</p>
        <Link
          href="/dashboard"
          className="text-light-textDescription dark:text-dark-textDescription  text-center md:text-left  text-sm"
        >
          Dashboard
        </Link>
      </div>
      <p className="text-light-textDescription dark:text-dark-textDescription text-sm">
        © {new Date().getFullYear()} Tansel Berkant Oflaz. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
