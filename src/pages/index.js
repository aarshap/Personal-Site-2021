import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ArticleCard from "../components/ArticleCard"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import WorkList from "../components/WorkList"

export default () => {

    // Data

    const data = useStaticQuery(graphql`
    query {
        work: allMdx(
            sort: { fields: [frontmatter___key], order: ASC },
            filter: { fileAbsolutePath: {regex: "/(work)/"  }}
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        dek
                        dateStart
                        dateEnd
                        cardImage
                        cardImagePosition
                        key
                    }
                    fields {
                        slug
                    }
                }
            }
        }
        blog: allMdx(
            sort: { fields: [frontmatter___date], order: DESC },
            filter: { fileAbsolutePath: {regex: "/(blog)/"} }
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "YYYY")
                        category
                        dek
                    }
                    fields {
                        slug
                    }
                }
            }
        }
        photography: allMdx(
            sort: { fields: [frontmatter___date], order: DESC },
            filter: { fileAbsolutePath: {regex: "/(photography)/"  }}
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "YYYY")
                        dek
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`)

    return (
        <Layout>
            <section>
                <Hero />
            </section>
            <div className="container">
                <section>
                    <h3>Work</h3>
                    <WorkList />
                </section>
                <section>
                    <h3>Writing</h3>
                    {data.blog.edges.map(({ node }) => (
                        <ArticleCard
                            key={node.id}
                            slug={node.fields.slug}
                            title={node.frontmatter.title}
                            date={node.frontmatter.date}
                            category={node.frontmatter.category}
                        />
                    ))}
                </section>
                <section>
                    <h3>Photography</h3>
                    {data.photography.edges.map(({ node }) => (
                        <ArticleCard
                            key={node.id}
                            slug={node.fields.slug}
                            title={node.frontmatter.title}
                            date={node.frontmatter.date}
                            />
                    ))}
                </section>
            </div>
        </Layout>
    )
}