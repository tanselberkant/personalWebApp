import BlogList from '@/components/BlogList';
import Layout from '@/components/layout/Layout';
import { client } from '@/lib/sanity.client';
import { groq } from 'next-sanity';

const query = groq`
*[_type=='post'] {
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;

export default async function HomePage() {
  const posts = await client.fetch(query);
  // console.log(posts);
  return (
    <>
      <Layout pageTitle="Home" currentPath={'/'}>
        <h1 className="text-4xl">DENEME</h1>
        <BlogList posts={posts} />
      </Layout>
    </>
  );
}
