// Generate slugs for all MDX files

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `Mdx`) {
        const slug = createFilePath({ node, getNode, basePath: `pages`, trailingSlash: false })
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
}

// Generate pages for writing posts

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    // Queries

    const result = await graphql(`
        query {
            writing: allMdx(
                sort: { 
                    fields: [frontmatter___date],
                    order: DESC 
                },
                filter: { fileAbsolutePath: {regex: "/(writing)/"} }
            ) {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                    previous {
                        frontmatter {
                            title
                            dek
                        }
                        fields {
                            slug
                        }
                    }
                    next {
                        frontmatter {
                            title
                            dek
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
            photography: allMdx(
                sort: { 
                    fields: [frontmatter___date],
                    order: DESC 
                },
                filter: { fileAbsolutePath: {regex: "/(photography)/"} }
            ) {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
            work: allMdx(
                sort: { 
                    fields: [frontmatter___date],
                    order: DESC 
                },
                filter: { fileAbsolutePath: {regex: "/(work)/"} }
            ) {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    result.data.writing.edges.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/writing.js`),
            context: {
                slug: node.fields.slug
            },
        })
    })

    result.data.photography.edges.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/photography.js`),
            context: {
                slug: node.fields.slug,
            },
        })
    })

    result.data.work.edges.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/work.js`),
            context: {
                slug: node.fields.slug,
            },
        })
    })

}
