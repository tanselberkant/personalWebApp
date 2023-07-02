'use client';
import urlFor from '@/utils/urlFormater';
import { motion, useScroll } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';

type Props = {
  experiences: Experience[];
};

const ExperiencesSection = ({ experiences }: Props) => {
  const scrollRef = useRef(null);
  const liRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['center end', 'center center'],
  });
  //   console.log(experiences);
  return (
    <div className="my-48">
      <h2 className=" text-light-smallHeader dark:text-dark-smallHeader  mb-32 mt-20 w-full text-center text-6xl md:text-6xl lg:text-8xl   md:mb-16">
        Experiences
      </h2>

      <div className="w-full mx-auto relative " ref={scrollRef}>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9  top-0 w-[4px] h-full bg-light-cardBorder dark:bg-light-cardBorder origin-top
          md:w-[2px] md:left-[35px] xs:left-[10px] "
        />
        <ul className="w-full flex flex-col items-start justify-between ml-16 md:ml-4 ">
          {experiences.map((experience, index) => (
            <li
              ref={liRef}
              key={index}
              className="my-12  first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between "
            >
              <div className="absolute left-4 stroke-1  stroke-light-cardBorder">
                <Image
                  src={urlFor(experience.logo).url()}
                  className="rounded-full w-10 h-10"
                  width={100}
                  height={100}
                  alt="lolo"
                />
              </div>

              <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: 'spring' }}
              >
                <h3 className="capitalize font-bold text-2xl">
                  {' '}
                  {experience.position}{' '}
                  <a
                    href="#"
                    className=" font-extrabold text-light-textHeader dark:text-dark-textHeader"
                  >
                    @{experience.company}
                  </a>{' '}
                </h3>
                <div className="mt-2 mb-3">
                  <span className="capitalize font-medium  text-gray-500">
                    {experience.startDate} - {experience.endDate} |
                    Ankara/Turkey
                  </span>
                </div>
                <div className="my-4">
                  {experience.responsibilities.map((responsable, index) => (
                    <p key={index} className="font-medium w-full">
                      - {responsable}
                    </p>
                  ))}
                </div>
                <div className="flex gap-2 my-4">
                  {experience.technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="px-2 py-2 bg-light-secondary dark:bg-dark-secondary text-light-primary rounded-lg"
                    >
                      {tech}{' '}
                    </div>
                  ))}
                </div>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperiencesSection;
