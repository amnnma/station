import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

const PostPreview = ({ post }) => (
  <article>
    <Link
      to={post.slug}
      css={css`
        margin: 1rem 1rem 0 0;
        width: 100px;
      `}
    >
    </Link>
    <div>
      <h3>
        <Link to={post.slug}>{post.title}</Link>
      </h3>
      <p>{post.slug}</p>
    </div>
  </article>
);

export default PostPreview;
