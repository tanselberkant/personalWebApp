import Layout from '@/components/layout/Layout';
import PostLists from '@/components/posts/PostLists';
import { client } from '@/lib/sanity.client';
import { groq } from 'next-sanity';

const query = groq`
*[_type=='post'] {
  ...,
  categories[]->
} | order(_createdAt desc)
`;

export const revalidate = 3600; // Revalidate this page every one hour

export default async function PostsPage() {
  const posts = await client.fetch(query);

  return (
    <>
      <Layout pageTitle="Posts" currentPath={'/posts'}>
        <div className=" mb-10">
          <h1 className=" text-light-textHeader dark:text-dark-textHeader uppercase text-2xl font-bold">
            Latest Post
          </h1>
          <p className="mt-1 mb-8 text-light-textDescription dark:text-dark-textDescription">
            Here's the latest posts I've written and published...
          </p>
        </div>
        <div className="md:pr-8">
          <PostLists posts={posts} />
        </div>
      </Layout>
    </>
  );
}
