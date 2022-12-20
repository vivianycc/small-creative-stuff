const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(
    `
      {
        allMdx {
          nodes {
            frontmatter {
              path
              posttype
            }
            slug
            id
          }
        }
      }
    `
  );
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const blogPostTemplate = path.resolve(`src/components/blogLayout.js`);
  const workLayout = path.resolve(`src/components/work-layout.js`);
  result.data.allMdx.nodes.forEach((node) => {
    const slug = node.slug;
    const id = node.id;
    const posttype = node.frontmatter.posttype;
    if (posttype === "work") {
      createPage({
        path: `/work/${slug}`,
        component: workLayout,
        context: {
          pagePath: `/work/${slug}`,
          id: id,
        },
      });
    } else if (posttype === "blog") {
      createPage({
        path: `/blog/${slug}`,
        component: blogPostTemplate,
        context: {
          pagePath: `/blog/${slug}`,
          id: id,
        },
      });
    } else {
      createPage({
        path: `/${slug}`,
        component: workLayout,
        context: {
          pagePath: `/${slug}`,
          id: id,
        },
      });
    }
  });
};
