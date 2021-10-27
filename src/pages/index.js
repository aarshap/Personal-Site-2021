import React from "react"
import WritingList from "../components/WritingList"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import PhotographyList from "../components/PhotographyList"
import SEO from "../components/SEO"
import WorkList from "../components/WorkList"

export default () => {
    return (
        <Layout>
            <SEO title="Home" />
            <section>
                <Hero />
            </section>
            <div className="container">
                <section>
                    <WorkList />
                </section>
                <section>
                    <WritingList />
                </section>
                <section>
                    <PhotographyList />
                </section>
            </div>
        </Layout>
    )
}