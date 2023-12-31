import urlFor from '@/utils/urlFormater';
import Image from 'next/image';
import React from 'react';

type Props = {
  certifications: Certification[];
};

const CertificationsSection = ({ certifications }: Props) => {
  return (
    <div className="my-48">
      <h2 className=" text-light-smallHeader dark:text-dark-smallHeader  mb-32 mt-20 w-full text-center text-6xl md:text-6xl lg:text-8xl   md:mb-16">
        Certifications
      </h2>

      {certifications.map((certification, index) => (
        <div
          key={index}
          className="customShadow flex flex-col items-center rounded-md  md:flex-row my-6 border-[1.5px] border-light-cardBorder dark:border-dark-cardBorder  px-4 py-4 "
        >
          {/* CERTIFACATION IMAGE */}
          <div className="w-36 h-32 flex-shrink-0 mb-2 md:mb-0 rounded-xl">
            <Image
              className="object-contain w-full h-full  rounded-xl"
              alt={`${certification.name}-image`}
              src={urlFor(certification.logo).url()}
              width={100}
              height={100}
            />
          </div>
          <div className="px-4 w-full">
            {/* CERTIFICATION DATE */}
            <div className=" text-light-smallHeader dark:text-dark-smallHeader font-bold text-lg">
              {certification.date}
            </div>
            {/* CERTIFICATION NAME */}
            <div className="text-light-textDescription dark:text-dark-textDescription font-semibold text-lg">
              {certification.name}
            </div>
            {/* CERTIFCATION INST */}
            <div className="text-light-textDescription dark:text-dark-textDescription line-clamp-2">
              {certification.institution}
            </div>
            {/* CERTIFAATION LINK */}
            <div className="mt-3">
              <a
                href={certification.link}
                target="_blank"
                className="bg-dark-secondary px-4  py-1 text-white rounded-full text-sm font-semibold cursor-pointer"
              >
                Link
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CertificationsSection;
