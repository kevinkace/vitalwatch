import React from 'react';

import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title='404: Not found' />
    <h1>404</h1>
    <p>You're probably looking for <Link to='/'>this</Link></p>
  </Layout>
)

export default NotFoundPage
