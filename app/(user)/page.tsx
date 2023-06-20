import BlogListHome from '@/components/home/BlogList';
import HeroSection from '@/components/home/HeroSection';
import Layout from '@/components/layout/Layout';
import { client } from '@/lib/sanity.client';
import { groq } from 'next-sanity';

const query = groq`
*[_type=='post'] {
  ...,
  categories[]->
} | order(_createdAt desc)
`;

export default async function HomePage() {
  const posts = await client.fetch(query);
  // console.log(posts);
  return (
    <>
      <Layout pageTitle="Home" currentPath={'/'}>
        <HeroSection />
        <BlogListHome posts={posts} />
      </Layout>
    </>
  );
}
