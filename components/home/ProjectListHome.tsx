import React from 'react';
import { formatDate } from '../../utils/dateFormater';
import Image from 'next/image';
import urlFor from '@/utils/urlFormater';
// import ClientSideRoute from '@/routes/ClientSideRoute';

type Props = {
  projects: Project[];
};

const ProjectListHome = ({ projects }: Props) => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 mb-20">
        {/* <div className="col-span-12 lg:col-span-5 flex justify-center"></div> */}
        <div className="col-span-12 lg:col-span-12 items-center ">
          <h1 className=" text-light-textHeader dark:text-dark-textHeader uppercase text-2xl font-bold">
            Projects
          </h1>
          <p className="mt-1 mb-8 text-light-textDescription dark:text-dark-textDescription">
            Here are my little projects...
          </p>
          <div className="lg:px-20">
            {projects.map((project) => (
              <a key={project._id} target="_blank" href={project.link}>
                <div className="customShadow flex flex-col items-center rounded-md  md:flex-row my-6 border-[1.5px] border-light-cardBorder dark:border-dark-cardBorder  px-4 py-4 cursor-pointer">
                  {/* POST IMAGE WILL BE THERE */}
                  <div className=" w-32 h-28  flex-shrink-0 mb-2 md:mb-0 rounded-lg">
                    <Image
                      className="object-contain w-full h-full rounded-lg"
                      alt={`${project.name}-image`}
                      src={urlFor(project.image).url()}
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="px-4 w-full">
                    {/* Project TITLE */}
                    <div className=" text-light-smallHeader dark:text-dark-smallHeader font-bold text-lg">
                      {project.name}
                    </div>

                    {/* Project SUBSCRIBED DESC */}
                    <div className="text-light-textDescription dark:text-dark-textDescription font-semibold text-lg">
                      {project.description}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectListHome;
