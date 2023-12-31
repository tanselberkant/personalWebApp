import { client } from '@/lib/sanity.client';
import { groq } from 'next-sanity';
import Link from 'next/link';
import React from 'react';

interface Category {
  id: string;
  title: string;
  postCount: number;
  color: string;
}

const query = groq`
*[_type=="category"]{
    _id,
    title,
    color,
    "postCount": count(*[_type=="post" && references(^._id)])
  }[0..7]
`;

export default async function PostCategories() {
  const categories = await client.fetch(query);
  const totalPosts = categories.reduce(
    (total: number, item: Category) => total + item.postCount,
    0
  );

  const sortedCategories = categories.sort(
    (a: Category, b: Category) => b.postCount - a.postCount
  );
  return (
    <div>
      <h2 className="text-2xl text-light-textHeader dark:text-dark-textHeader font-bold my-8">
        Post Categories
      </h2>
      <div className="my-10 border-2 border-light-cardBorder dark:border-dark-cardBorder rounded-lg p-4 h-[350px] max-h-[350px] relative ">
        {sortedCategories.map((category: Category, index: number) => (
          <div
            className="w-full bg-light-smallHeader rounded-full dark:bg-gray-700"
            key={index}
          >
            <div
              className={` text-xs font-medium text-dark-textDescription text-center my-2 p-0.5 leading-none rounded-full shadow-lg `}
              style={{
                backgroundColor: category.color,
                width: `${(category.postCount / totalPosts) * 100}%`,
              }}
            >
              {((category.postCount / totalPosts) * 100).toFixed(1)}%
            </div>
          </div>
        ))}
        <div className="my-6 text-base">
          {sortedCategories.map((category: Category, index: number) => (
            <div className="flex items-center" key={index}>
              <div
                style={{ backgroundColor: category.color }}
                className=" dark:text-dark-textHeader h-3 w-3 rounded-full my-2"
              />
              <div className="text-base text-light-textDescription dark:text-dark-textDescription ml-2">
                {category.title}
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-4 right-4">
          <div className="flex justify-end underline text-light-smallHeader dark:text-dark-smallHeader">
            <Link href={'/posts'} className="cursor-pointer">
              Check Posts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
