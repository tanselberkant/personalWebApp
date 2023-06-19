import React from 'react';

type Props = {
  posts: Post[];
};

const BlogList = ({ posts }: Props) => {
  console.log(posts.length);
  return <div></div>;
};

export default BlogList;
