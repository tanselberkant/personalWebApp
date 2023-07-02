import Layout from '@/components/layout/Layout';
import CertificationsSection from '@/components/resume/CertificationsSection';
import EducationsSection from '@/components/resume/EducationsSection';
import ExperiencesSection from '@/components/resume/ExperiencesSection';
import SkillsSection from '@/components/resume/SkillsSection';
import { client } from '@/lib/sanity.client';
import { groq } from 'next-sanity';

const query = groq`
  *[_type=='cv'] {
    ...,
  } | order(_createdAt desc)[0]
`;

export const revalidate = 3600; // Revalidate this page every one hour

export default async function ResumePage() {
  const resume: CV = await client.fetch(query);
  // console.log(resume);

  return (
    <>
      <Layout pageTitle="Resume" currentPath={'/resume'}>
        <div className=" mb-10">
          <h1 className=" text-light-textHeader dark:text-dark-textHeader uppercase text-2xl font-bold">
            Resume
          </h1>
          <div className="my-10  text-light-textDescription dark:text-dark-textDescription text-lg">
            <p className="mb-4">
              Hello, I'm Tansel. I embarked on an intriguing journey that began
              with eight years as a professional ice hockey player and led me to
              the captivating world of software development. The decision to
              transition from the sports arena to the arena of codes and
              algorithms was indeed a bold one, but it was fueled by my
              unwavering passion for technology and problem-solving.
            </p>
            <p className="mb-4">
              After dedicating several years to intense self-learning and driven
              by my aspiration to make a significant impact in the software
              industry, I took a crucial step and graduated from Kodluyoruz
              Frontend Development Bootcamp. The Bootcamp, coupled with my
              self-taught skills, served as the launchpad for my software
              development career.
            </p>
            <p className="mb-4">
              Since March 2022, I've been actively involved in the software
              industry, undertaking various roles and ceaselessly enhancing my
              skills. The excitement and vigor I once felt on the ice rinks have
              found a new home in the realm of frontend development, where every
              line of code I write, every application I build, sparks the same
              thrill. My journey from the ice rink to the tech industry has been
              a unique one, reinforcing my belief that with determination and
              passion, one can reshape their career path and achieve their
              dreams...
            </p>
          </div>
        </div>
        <ExperiencesSection experiences={resume.experience} />
        <EducationsSection educations={resume.education} />
        <SkillsSection skills={resume.skills} />
        <CertificationsSection certifications={resume.certifications} />
      </Layout>
    </>
  );
}
