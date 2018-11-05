import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql, Link } from 'gatsby';

const Archive = () => (
  <StaticQuery
    query={POST_ARCHIVE_QUERY}
    render={data => (
      <SidePanel>
        <h2>Archive</h2>
        <ArchiveList>
          {data.allMarkdownRemark.edges.map(
            (
              {
                node: {
                  excerpt,
                  frontmatter: { title, tags, slug },
                },
              },
              i
            ) => (
              <ArchiveItem key={`blog-post-${i}-${Date.now()}`}>
                <Link to={`/posts/${slug}`}>
                  <h4>{title}</h4>
                </Link>
              </ArchiveItem>
            )
          )}
        </ArchiveList>
      </SidePanel>
    )}
  />
);

const SidePanel = styled.aside`
  text-align: center;
  h2 {
    margin: 0;
    padding: 0;
  }
`;

const ArchiveList = styled.ul`
  margin: 0px;
  padding: 0px;
  list-style: none;
`;

const ArchiveItem = styled.li`
  margin: 0px;
  font-size: 0.8rem;

  a {
    color: #000;
  }
`;

const POST_ARCHIVE_QUERY = graphql`
  query BlogPostArchive {
    allMarkdownRemark(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`;

export default Archive;
