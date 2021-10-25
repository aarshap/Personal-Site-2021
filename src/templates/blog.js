import React from "react"
import { Link, graphql } from "gatsby"
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import ArticleMedia from "../components/ArticleMedia"
// import ArticleRecirc from "../components/ArticleRecirc"
import Grid from "../components/Grid"
import Layout from "../components/Layout"
import Pill from "../components/Pill"
import SEO from "../components/SEO"

export default ({ data, pageContext }) => {

    // Components usable in MDX

    const includedComponents = { ArticleMedia, GatsbyImage, getImage, Grid, Link }

    // Post data

    const post = data.mdx

    // Page context from gatsby-node.js used for next and previous links

    const { next, previous } = pageContext

    // const previousProps = {}
    // const nextProps = {}

    // if (previous) {
    //     previousProps.show = true
    //     previousProps.slug = previous.fields.slug
    //     previousProps.title = previous.frontmatter.title
    //     previousProps.dek = previous.frontmatter.dek
    // }

    // if (next) {
    //     nextProps.show = true
    //     nextProps.slug = next.fields.slug
    //     nextProps.title = next.frontmatter.title
    //     nextProps.dek = next.frontmatter.dek
    // }

    return (
        <Layout>
            <SEO
                title={post.frontmatter.title}
                description={post.frontmatter.dek}
            />
            <div className="container">
                <h1>{post.frontmatter.title}</h1>
                <p>{post.frontmatter.dek}</p>
                <Pill>{post.frontmatter.date}</Pill>
                <Pill>{post.frontmatter.category}</Pill>
                <MDXProvider components={includedComponents}>
                    <MDXRenderer>
                        {post.body}
                    </MDXRenderer>
                </MDXProvider>
                {/* <ArticleRecirc
                    previous={previousProps}
                    next={nextProps}
                /> */}
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
                category
            }
        }
    }
`