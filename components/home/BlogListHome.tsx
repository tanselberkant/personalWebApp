import React from 'react';
import { formatDate } from '../../utils/dateFormater';
import Image from 'next/image';
import urlFor from '@/utils/urlFormater';
import ClientSideRoute from '@/routes/ClientSideRoute';

type Props = {
  posts: Post[];
};

const BlogListHome = ({ posts }: Props) => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 mb-20">
        <div className="col-span-12 lg:col-span-5 flex justify-center"></div>
        <div className="col-span-12 lg:col-span-7 items-center">
          <h1 className=" text-light-textHeader dark:text-dark-textHeader uppercase text-2xl font-bold">
            Latest Post
          </h1>
          <p className="mt-1 mb-8 text-light-textDescription dark:text-dark-textDescription">
            Here's the latest posts I've written and published...
          </p>
          {posts.map((post) => (
            <ClientSideRoute
              key={post._id}
              route={`/posts/${post.slug.current}`}
            >
              <div className="customShadow flex flex-col items-center rounded-md  md:flex-row my-6 border-[1.5px] border-light-cardBorder dark:border-dark-cardBorder  px-4 py-4 cursor-pointer">
                {/* POST IMAGE WILL BE THERE */}
                <div className=" w-44 h-40  flex-shrink-0 mb-2 md:mb-0 rounded-md">
                  <Image
                    className="object-fit w-full h-full"
                    alt={`${post.title}-image`}
                    src={urlFor(post.mainImage).url()}
                    width={100}
                    height={100}
                  />
                </div>
                <div className="px-4">
                  {/* POST DATE */}
                  <div className=" text-light-smallHeader dark:text-dark-smallHeader font-bold text-lg">
                    {formatDate(post._createdAt)}
                  </div>
                  {/* POST TITLE */}
                  <div className="text-light-textDescription dark:text-dark-textDescription font-semibold text-lg">
                    {post.title}
                  </div>
                  {/* POST SUBSCRIBED DESC */}
                  <div className="text-light-textDescription dark:text-dark-textDescription line-clamp-2">
                    {post.description}
                  </div>
                  {/* POST CATEGORIES */}
                  <div className=" text-light-cardBorder dark:text-dark-cardBorder text-base mt-2">
                    {post.categories.map((category) => (
                      <span
                        className="bg-dark-secondary px-3 py-1 text-white rounded-full text-sm font-semibold mt-4 mr-1"
                        key={category._id}
                      >
                        {category.title}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ClientSideRoute>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogListHome;
