import BlogListHome from '@/components/home/BlogListHome';
import HeroSection from '@/components/home/HeroSection';
import Layout from '@/components/layout/Layout';
import { client } from '@/lib/sanity.client';
import { groq } from 'next-sanity';

const query = groq`
*[_type=='post'] {
  ...,
  categories[]->
} | order(_createdAt desc)[0..2]
`;

export const revalidate = 3600; // Revalidate this page every one hour

export const metadata = {
  title: 'Home',
  description: 'Tansel Berkant Oflaz, @tanselberkant, Anasayfa, Home Page',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default async function HomePage() {
  const posts = await client.fetch(query);

  return (
    <>
      <Layout pageTitle="Home" currentPath={'/'}>
        <HeroSection />
        <BlogListHome posts={posts} />
      </Layout>
    </>
  );
}
