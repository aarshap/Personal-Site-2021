import React from "react"
import { Link, graphql } from "gatsby"
// import { MDXRenderer } from "gatsby-plugin-mdx"
// import { MDXProvider } from "@mdx-js/react"
// import ArticleBody from "../components/ArticleBody"
// import ArticleMedia from "../components/ArticleMedia"
// import Grid from "../components/Grid"
// import Image from "../components/Image"
// import PhotographyIntro from "../components/PhotographyIntro"
import SEO from "../components/SEO"

export default ({ data, pageContext }) => {

    // Components usable in MDX

    const includedComponents = { Link, Image, ArticleMedia, Grid }

    // Post data

    const post = data.mdx

    return (
        <>
            <SEO
                title={post.frontmatter.title}
                description={post.frontmatter.dek}
            />
            {/* <PhotographyIntro
                date={post.frontmatter.date}
                title={post.frontmatter.title}
                keyImage={post.frontmatter.keyImage}
            />
            <ArticleBody>
                <MDXProvider components={includedComponents}>
                    <MDXRenderer>
                        {post.body}
                    </MDXRenderer>
                </MDXProvider>
            </ArticleBody> */}
        </>
    )
}

export const query = graphql`
    query($slug: String!) {
        mdx(fields: { slug: { eq: $slug } }) {
            body
            frontmatter {
                title
                dek
                date(formatString: "YYYY")
                category
                keyImage
            }
        }
    }
`