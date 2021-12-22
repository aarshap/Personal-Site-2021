import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import * as Styled from "./styled"
import ArticleCard from "../ArticleCard"

const WritingList = (props) => {

    // Data

    const data = useStaticQuery(graphql`
    query {
        writing: allMdx(
            sort: { fields: [frontmatter___date], order: DESC },
            filter: { fileAbsolutePath: {regex: "/(writing)/"} }
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
    }
    `)

    return (
        <>
            <Styled.SectionTitle>
                {props.sectionTitle
                    ? props.sectionTitle
                    : "Writing"
                }
            </Styled.SectionTitle>
            {data.writing.edges.map(({ node }) => (
                <ArticleCard
                    key={node.id}
                    slug={node.fields.slug}
                    title={node.frontmatter.title}
                    date={node.frontmatter.date}
                    category={node.frontmatter.category}
                />
            ))}
        </>
    )
}

export default WritingList