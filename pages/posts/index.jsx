import axios from 'axios';
import React from 'react';
import { getPosts } from '../../utils/getPosts';
import Link from 'next/link';

export async function getStaticProps() {
  const posts = await getPosts();

  return {
    props: {
      posts,
    },
  };
}

const Posts = ({ posts }) => {
  return (
    <>
      <div className="flex bg-yellow-400 p-2 space-x-3">
        {posts?.map((post) => (
          <p>
            <Link href={`/posts/${post._id}`}>{post.title}</Link>
          </p>
        ))}
        <h1>Posts</h1>
      </div>
    </>
  );
};

export default Posts;
