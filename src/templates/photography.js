import React from "react"
import { Link, graphql } from "gatsby"
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import ArticleBody from "../components/ArticleBody"
import ArticleIntro from "../components/ArticleIntro"
import ArticleMedia from "../components/ArticleMedia"
import ArticleTitleBar from "../components/ArticleTitleBar"
import PhotographyList from "../components/PhotographyList"
import Grid from "../components/Grid"
import Head from "../components/Head"
import Layout from "../components/Layout"

const Photography = ({ data }) => {

    // Components usable in MDX

    const includedComponents = { ArticleMedia, GatsbyImage, getImage, Grid, Link }

    // Post data

    const post = data.mdx

    return (
        <Layout>
            <Head
                title={post.frontmatter.title}
                description={post.frontmatter.dek}
            />
            <ArticleTitleBar title={post.frontmatter.title} />
            <div className="container">
                <section>
                    <ArticleIntro
                        type={post.frontmatter.type}
                        title={post.frontmatter.title}
                        dek={post.frontmatter.dek}
                        date={post.frontmatter.date}
                    />
                </section>
                <section>
                    <ArticleBody>
                        <MDXProvider components={includedComponents}>
                            <MDXRenderer>
                                {post.body}
                            </MDXRenderer>
                        </MDXProvider>
                    </ArticleBody>
                </section>
                <section>
                    <PhotographyList sectionTitle="More photography" />
                </section>
            </div>
        </Layout>
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
                type
            }
        }
    }
`

export default Photography