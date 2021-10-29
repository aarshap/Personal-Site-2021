import React from "react"
import * as Styled from "./styled"
import { graphql, useStaticQuery } from "gatsby"
import Pill from "../Pill"

export default (props) => {

    // Data

    const data = useStaticQuery(graphql`
    query {
        allMdx(
            sort: {fields: frontmatter___key, order: ASC},
            filter: { fileAbsolutePath: {regex: "/(work)/"} }
            ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        dateStart
                        dateEnd
                        key
                    }
                    fields {
                        slug
                    }
                }
            }
        }            
    }
    `)

    // Framer motion variants

    const menuVariants = {
        hidden: {
            x: -20,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1
        }
    }

    const overlayVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 0.9
        }
    }

    return (
        <>
            <Styled.Overlay
                onClick={() => props.closeMenu()}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={overlayVariants}
            />
            <Styled.Menu
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={menuVariants}
            >
                {data.allMdx.edges.map(({ node }) => (
                    <Styled.StyledLink
                        onClick={() => props.closeMenu()}
                        to={node.fields.slug}
                        key={node.id}
                    >
                        <Styled.Title>{node.frontmatter.title}</Styled.Title>
                        <Pill>{node.frontmatter.dateStart === node.frontmatter.dateEnd ? node.frontmatter.dateEnd : `${node.frontmatter.dateStart} - ${node.frontmatter.dateEnd}`}</Pill>
                    </Styled.StyledLink>
                ))}
            </Styled.Menu>
        </>
    )
}