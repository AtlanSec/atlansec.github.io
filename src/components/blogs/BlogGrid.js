import React from 'react';
import { BlogGridStyles } from '../../styles/blog/BlogGridStyles';
import BlogItem from './BlogItem';

function BlogGrid({ blogs }) {
  return (
    <BlogGridStyles>
      {blogs &&
        blogs.map((blog) => (
          <BlogItem
            key={blog.id}
            title={blog.frontmatter.title}
            path={blog.frontmatter.slug}
            categories={blog.frontmatter.categories}
            image={blog.frontmatter.hero_image}
            publishedAt={blog.frontmatter.date}
            author={blog.frontmatter.author}
            ></BlogItem>
        ))}
    </BlogGridStyles>
  );
}

export default BlogGrid;