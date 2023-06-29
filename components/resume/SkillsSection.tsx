import React from 'react';
import Image from 'next/image';
import urlFor from '@/utils/urlFormater';

type Props = {
  skills: Skill[];
};

const SkillsSection = ({ skills }: Props) => {
  return (
    <div className="my-48">
      <h2 className=" text-light-smallHeader dark:text-dark-smallHeader  mb-32 mt-20 w-full text-center text-6xl md:text-6xl lg:text-8xl   md:mb-16">
        Skills
      </h2>
      <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="border-2 rounded-lg border-light-cardBorder dark:border-dark-cardBorder  text-center min-h-40 h-40 cursor-pointer custom-skill-card"
          >
            <div className="skill-card-front  h-full w-full p-4">
              <Image
                src={urlFor(skill.logo).url()}
                className="rounded-lg w-full h-full object-contain"
                width={100}
                height={100}
                alt={`${skill.skill}-logo`}
              />
            </div>
            <div className="skill-card-back bg-dark-cardBorder text-dark-textDescription">
              <div className="w-full h-full flex items-center justify-center font-semibold text-xl px-2">
                <h1>{skill.skill}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
