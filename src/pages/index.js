import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Image from '../components/Image';
import Listing from '../components/Listing';

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <Listing />
  </Layout>
);

export default IndexPage;
