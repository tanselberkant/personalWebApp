// 'use client'
import React from 'react';

const HeroSection = () => {
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          neque voluptatibus sint sed vero. Inventore architecto, laboriosam
          provident iure quos voluptatibus atque ex minus perferendis laborum
          sit corporis, quis quod.
        </p>
        <p className="mt-2 text-base md:text-lg">
          I now work at{' '}
          <a
            className="text-light-smallHeader dark:text-dark-smallHeader"
            href="https://community.rexven.com/"
          >
            Rexven
          </a>
        </p>
      </div>
      {/* HOCKEY THING WILL BE THERE  */}
      <div className="col-span-12 lg:col-span-5 text-center flex justify-center"></div>
    </div>
  );
};

export default HeroSection;
