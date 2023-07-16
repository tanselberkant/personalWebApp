import { client } from '@/lib/sanity.client';
import { groq } from 'next-sanity';

const query = groq`
*[_type=='post'] {
  ...,
} | order(_createdAt desc)
`;

export const revalidate = 3600; // Revalidate this page every one hour

export default async function sitemap() {
  const baseUrl = 'https://tanselberkant.dev';

  // GetAllPosts
  const posts = await client.fetch(query);
  const postUrls =
    posts?.map((post: any) => {
      return {
        url: `${baseUrl}/posts/${post.slug.current}`,
        lastModified: new Date(),
      };
    }) ?? [];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/posts`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/resume`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/dashboard`,
      lastModified: new Date(),
    },
    ...postUrls,
  ];
}
