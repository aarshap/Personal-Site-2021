import React from "react"
import WritingList from "../components/WritingList"
import Head from "../components/Head"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import PhotographyList from "../components/PhotographyList"
import WorkList from "../components/WorkList"

const Index = () => {
    return (
        <Layout>
            <Head title="Home" />
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

export default Index