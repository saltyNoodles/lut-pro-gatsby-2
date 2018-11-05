const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const { data } = await graphql(`
    query BlogPostSlugs {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  data.allMarkdownRemark.edges.forEach(
    ({
      node: {
        frontmatter: { slug },
      },
    }) => {
      createPage({
        path: `/posts/${slug}`,
        component: path.resolve('./src/components/PostLayout.js'),
        context: {
          slug,
        },
      });
    }
  );

  // return new Promise(async (resolve, reject) => {
  //   graphql(`
  //     query BlogPostArchive {
  //       allMarkdownRemark {
  //         edges {
  //           node {
  //             frontmatter {
  //               slug
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `).then(({ data }) => {
  //     data.allMarkdownRemark.edges.forEach(({ node }) => {
  //       createPage({
  //         path: `/${node.frontmatter.slug}`,
  //         component: path.resolve('./src/components/PostLayout.js'),
  //       });
  //     });
  //   });
  //   resolve();
  // });
};
