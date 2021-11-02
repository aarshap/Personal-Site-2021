import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import * as Styled from "./styled"
import ArticleCard from "../ArticleCard"

const PhotographyList = (props) => {

    // Data

    const data = useStaticQuery(graphql`
    query {
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
        <>
            <Styled.SectionTitle>
                {props.sectionTitle
                    ? props.sectionTitle
                    : "Photography"
                }
            </Styled.SectionTitle>
            {data.photography.edges.map(({ node }) => (
                <ArticleCard
                    key={node.id}
                    slug={node.fields.slug}
                    title={node.frontmatter.title}
                    date={node.frontmatter.date}
                    />
            ))}
        </>
    )
}

export default PhotographyList