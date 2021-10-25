module.exports = {
    siteMetadata: {
        siteUrl: "https://aaron.mn",
        title: "Aaron Shapiro",
        description: `Aaron Shapiro is a product designer living in Brooklyn, New York.`
    },
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-mdx-embed",
        "gatsby-plugin-sass",
        "gatsby-plugin-sharp",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-styled-components",
        "gatsby-remark-images",
        "gatsby-transformer-sharp",
        // "gatsby-plugin-twitter",
        {
            resolve: "gatsby-plugin-mdx",
            options: {
                extensions: [".md", ".mdx"],
                plugins: [`gatsby-remark-images`],
                gatsbyRemarkPlugins: [
                    {
                        resolve: "gatsby-remark-images",
                        options: {
                            linkImagesToOriginal: false,
                            maxWidth: 1600,
                            quality: 90
                        }
                    }
                ]
            }
        },
        {
            resolve: "gatsby-plugin-web-font-loader",
            options: {
                typekit: {
                    id: "krh8qnp"
                }
            }
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images"
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./src/pages/",
            },
            __key: "pages"
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `blog`,
                path: `${__dirname}/src/`,
            }
        }
    ]
}