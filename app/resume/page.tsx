'use client';
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
          <p className="my-10  text-light-textDescription dark:text-dark-textDescription text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ipsum et
            sequi labore totam necessitatibus eius soluta nostrum quia error
            recusandae libero tenetur iusto, expedita saepe, minima atque
            excepturi sit. Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Tenetur explicabo provident dolores cumque inventore
            blanditiis. Nobis, atque molestias! Eaque autem provident sed.
            Labore adipisci dolor impedit dolores sint hic necessitatibus. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Quia
            necessitatibus illo nesciunt, vero facere officia, voluptatem minus
            quasi numquam quo aut veritatis suscipit libero inventore nihil
            possimus architecto consequatur perferendis?
          </p>
        </div>
        <ExperiencesSection experiences={resume.experience} />
        <EducationsSection educations={resume.education} />
        <SkillsSection skills={resume.skills} />
        <CertificationsSection certifications={resume.certifications} />
      </Layout>
    </>
  );
}
