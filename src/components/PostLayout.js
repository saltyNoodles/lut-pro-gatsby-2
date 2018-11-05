import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from './Layout';

const PostLayout = ({ location, ...props }) => {
  const {
    html,
    frontmatter: { title, date, slug },
  } = props.data.markdownRemark;
  return (
    <Layout location={location}>
      <Article>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Article>
      <div>Posted on {date}</div>
    </Layout>
  );
};

export default PostLayout;

const Article = styled.article`
  padding: 29px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

export const Query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        title
        slug
      }
    }
  }
`;
