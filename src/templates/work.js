import React, { useContext, useEffect } from "react"
import { Link, graphql } from "gatsby"
// import { MDXRenderer } from "gatsby-plugin-mdx"
// import { MDXProvider } from "@mdx-js/react"
// import ArticleBody from "../components/ArticleBody"
// import ArticleMedia from "../components/ArticleMedia"
// import ArticleToc from "../components/ArticleToc"
// import Grid from "../components/Grid"
// import Image from "../components/Image"
import SEO from "../components/SEO"
// import WorkIntro from "../components/WorkIntro"

export default ({ data }) => {

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

            {/* <WorkIntro
                title={post.frontmatter.title}
                tagline={post.frontmatter.tagline}
                dek={post.frontmatter.dek}
                dateStart={post.frontmatter.dateStart}
                dateEnd={post.frontmatter.dateEnd}
                roles={post.frontmatter.roles}
                className={post.frontmatter.className}
                invertColors={post.frontmatter.invertColors}
                keyImage={post.frontmatter.keyImage}
            />

                <ArticleBody>
                    <ArticleToc headings={post.headings} />
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
            headings {
                depth
                value
            }
            frontmatter {
                title
                tagline
                dek
                dateStart
                dateEnd
                roles
                className
                invertColors
                keyImage
            }
        }
    }
`