import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const About = () => (
  <Layout>
    <h1>About Me</h1>
    <p>I AM.</p>
    <Link to="/">&larr; back to home</Link>
  </Layout>
);

export default About;
