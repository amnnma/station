import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { css } from '@emotion/core';
import Layout from '../components/layout';
import ReadLink from '../components/read-link';
import AdSense from 'react-adsense';

// auto full width responsive ads
<AdSense.Google
  client='ca-pub-7292810486004926'
  slot='7806394673'
  style={{ display: 'block' }}
  format='auto'
  responsive='true'
/>

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`;

const PostTemplate = ({ data: { mdx: post } }) => (
  <Layout>
    <h1>{post.frontmatter.title}</h1>
    <p
      css={css`
        font-size: 0.75rem;
      `}
    >
      Posted by {post.frontmatter.author}
    </p>
    <MDXRenderer>{post.body}</MDXRenderer>
    <ReadLink to="/">&larr; back to all posts</ReadLink>
  </Layout>
);

export default PostTemplate;
