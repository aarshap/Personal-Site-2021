import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"

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
            <div>
                <h1>A good guy who makes good websites.</h1>
                <p>I’m Aaron – a Brooklyn-based product designer with over a decade of experience working on behalf of journalists, artists, and makers.</p>
                <p>Creative people make me happy.</p>
            </div>
            <h3>Work</h3>
            <a href="#">
                <h4>VICE</h4>
                <p>Small team. Big network.</p>
                <h5>2016–2020</h5>
            </a>
            <h3>Writing</h3>
            <a href="#">
                <h4>On Relearning to Code</h4>
                <div>
                <h5>2021</h5>
                <h5>Code</h5>
                </div>
            </a>
        </Layout>
    )
}