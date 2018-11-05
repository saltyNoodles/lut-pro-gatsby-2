import React, { Component } from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

export default class Listing extends Component {
  render() {
    return (
      <StaticQuery
        query={LISTING_QUERY}
        render={({ allMarkdownRemark: { edges: posts } }) => (
          <ArticleList>
            {posts.map(
              ({
                node: {
                  excerpt,
                  frontmatter: { title, slug, date },
                },
              }) => (
                <Article key={slug}>
                  <h2>{title}</h2>
                  <p>{excerpt}</p>
                  <p>{date}</p>
                  <Link className="read-more" to={`/posts/${slug}`}>
                    Read more
                  </Link>
                </Article>
              )
            )}
          </ArticleList>
        )}
      />
    );
  }
}

const ArticleList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-gap: 15px;
`;

const Article = styled.article`
  background: white;
  padding: 23px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 8px;
  color: #343434;

  h2 {
    margin-bottom: 0;
  }

  p {
    font-size: 0.8rem;
  }

  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    transition: all 100ms ease-in-out;
  }

  a {
    color: #000;
  }

  .read-more {
    text-decoration: underline;
  }
`;

const LISTING_QUERY = graphql`
  query BlogPostListing {
    allMarkdownRemark(
      limit: 20
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          excerpt
          frontmatter {
            title
            slug
            tags
            date(formatString: "DD MMMM, YYYY")
          }
        }
      }
    }
  }
`;
