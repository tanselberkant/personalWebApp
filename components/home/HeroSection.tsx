'use client';
import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { classNames } from '@/utils/conditionalClasses';

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [loadingSpline, setLoadingSpline] = useState(true);

  const hoverDiv = () => setIsHovered(true);
  const unHoverDiv = () => setIsHovered(false);

  return (
    <div className="grid gap-4 grid-cols-12 mb-40 ">
      {/* PERSONAL INFO SECTION */}
      <div className="col-span-12 lg:col-span-7 items-center md:mt-12 ">
        <h1 className="text-light-textDescription dark:text-dark-textDescription text-3xl md:text-4xl  font-bold">
          Tansel Berkant Oflaz
        </h1>
        <p className="mt-3  text-sm tracking-wide">
          <span className="mr-2">Fronted Developer</span>
          <a
            className="text-light-smallHeader dark:text-dark-smallHeader underline"
            target="_blank"
            href="https://twitter.com/rexvencom"
          >
            @Rexven
          </a>
        </p>
        <p className="mt-2 text-base md:text-lg">Hey there! 👋</p>
        <p className="mt-2  text-base md:text-lg">
          Hello, I'm Tansel. Once upon a time, I was a national ice hockey
          player, but after 2-3 years of intense work and dedication, I realized
          that the software industry was my true passion. I transferred the
          speed and excitement of the ice rinks to the world of codes and
          algorithms. Since March 2022, I've been actively working in the
          software industry, taking on various roles and continually improving
          myself.
        </p>
        <p className="mt-2 text-base md:text-lg">
          I now work at{' '}
          <a
            target="_blank"
            className="text-light-smallHeader dark:text-dark-smallHeader"
            href="https://www.rexven.com/"
          >
            Rexven
          </a>
        </p>
      </div>
      {/* HOCKEY THING WILL BE THERE  */}
      <div
        className="hidden lg:col-span-5 text-center lg:flex justify-center items-center relative cursor-pointer sm:w-[50%] sm:mx-auto lg:w-full"
        onMouseEnter={hoverDiv}
        onMouseLeave={unHoverDiv}
      >
        {loadingSpline && <Loader />}
        <Spline
          onLoad={() => {
            console.log('Spline loaded');
            setLoadingSpline(false);
          }}
          scene="https://prod.spline.design/V58XNZOtjAQFJ77l/scene.splinecode"
        />

        <p
          className={classNames(
            isHovered ? 'opacity-100' : 'opacity-0',
            'absolute bottom-0 left-2 text-gray-400 text-xs interact-info transition-opacity duration-500'
          )}
        >
          You can interact with this hockey helmet
        </p>
      </div>
    </div>
  );
};

export default HeroSection;

const Loader = () => {
  return <div className="absolute top-0">Loading Hockey Helmet</div>;
};
