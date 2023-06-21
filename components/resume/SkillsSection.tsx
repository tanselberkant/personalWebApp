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
            className="border-2 border-light-cardBorder dark:border-dark-cardBorder p-4 text-center min-h-36 h-36 "
          >
            <div className="min-h-16 h-16 rounded-lg w-full">
              <Image
                src={urlFor(skill.logo).url()}
                className="rounded-lg w-full h-full object-contain"
                width={100}
                height={100}
                alt="lolo"
              />
            </div>
            <div className="text-light-textDescription dark:text-dark-textDescription my-2 text-sm">
              {skill.skill}{' '}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
