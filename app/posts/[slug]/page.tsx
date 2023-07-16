import Layout from '@/components/layout/Layout';
import { RichTextComponents } from '@/components/post/RichTextComponent';
import { client } from '@/lib/sanity.client';
import { formatDate } from '@/utils/dateFormater';
import urlFor from '@/utils/urlFormater';
import { groq } from 'next-sanity';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 3600; // Revalidate this page every one hour

export async function generateStaticParams() {
  const query = groq`
*[_type=='post'] 
  {
    slug
  }`;

  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map((slug) => ({
    slug: slug,
  }));
}

async function Post({ params: { slug } }: Props) {
  const query = groq`
    *[_type=='post' && slug.current == $slug][0]
    {
    ...,
    author->,
    categories[]->
    }
  `;

  const post: Post = await client.fetch(query, { slug });

  return (
    <Layout currentPath="/posts" pageTitle="Post">
      <article className="px-10 pb-28">
        <section className="space-y-2 border-[1px] border-light-cardBorder dark:border-dark-cardBorder text-dark-textDescription dark:text-dark-textDescription ">
          <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
            <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
              <Image
                className="object-fit object-center mx-auto "
                src={urlFor(post.mainImage).url()}
                alt={post.title + '-img'}
                fill
              />
            </div>
            <section className="p-5 bg-light-textHeader dark:bg-light-textHeader  w-full">
              <div className="flex flex-col md:flex-row justify-between gap-y-5">
                <div>
                  <h1 className="text-4xl font-extrabold">{post.title} </h1>
                  <p>{formatDate(post._createdAt)}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Image
                    className="rounded-full w-16 h-16"
                    src={urlFor(post.author.image).url()}
                    alt={post.author.name}
                    height={100}
                    width={100}
                  />
                  <div className="w-64">
                    <h3 className="text-lg font-bold">{post.author.name} </h3>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="italic pt-10">{post.description}</h2>
                <div className="flex items-center justify-end mt-auto space-x-2">
                  {post.categories.map((category) => (
                    <p
                      key={category._id}
                      className=" bg-dark-secondary px-3 py-1 text-white rounded-full text-sm font-semibold mt-4"
                    >
                      {category.title}
                    </p>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </section>
        <PortableText
          onMissingComponent={false}
          value={post.body}
          components={RichTextComponents}
        />
      </article>
    </Layout>
  );
}

export default Post;
