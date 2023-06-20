'use client';
import React from 'react';

type Props = {
  posts: Post[];
};

const BlogListHome = ({ posts }: Props) => {
  console.log(posts);
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
            <div
              key={post._id}
              className="flex flex-col items-center  md:flex-row my-6 border-[1.5px] border-light-cardBorder dark:border-dark-cardBorder  shadow-2xl px-4 py-4 cursor-pointer"
            >
              {/* POST IMAGE WILL BE THERE */}
              <div className=" w-44 h-40 bg-slate-500 flex-shrink-0 mb-2 md:mb-0 "></div>
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
                <div className="text-light-textDescription dark:text-dark-textDescription">
                  {/* {post.description} */}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio perferendis architecto accusamus quos...
                </div>
                {/* POST CATEGORIES */}
                <div className=" text-light-cardBorder dark:text-dark-cardBorder text-base mt-2">
                  {post.categories.map((category) => (
                    <span key={category._id}>{category.title}</span>
                  ))}
                </div>

                {/* Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur aut rem natus? Veniam sunt dignissimos voluptas ipsa
                perferendis incidunt enim labore! Ratione iure placeat quis
                voluptatum similique magni ea optio. */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogListHome;

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const formatter = new Intl.DateTimeFormat('en-US', options);
  return formatter.format(date);
}
