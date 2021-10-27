import React from "react"
import { Link } from "gatsby"
import ArticleBody from "../components/ArticleBody"
import InfoIntro from "../components/InfoIntro"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

export default () => {
    return (
        <Layout>
            <SEO
                title="Info"
            />
            <InfoIntro />
            <div className="container">
                <section>
                    <ArticleBody>
                        <h2>I’m <em>Aaron</em> – a product designer living in Brooklyn, New York.</h2>
                        <p>I was most recently the director of product design at <Link to="/work/vice">VICE</Link>. I also worked with two <Link to="/work/cover">small</Link> <Link to="/work/karma">startups</Link>, a not-so-small <Link to="/work/etsy">tech company</Link>, and spent a few years living agency life. My broad experience makes me adaptable, I think.</p>
                        <p>Aside from work, I love to take photos, shake drinks, tend to my balcony garden, and continue to wait patiently for a successful Minnesota Timberwolves season. Sometimes I <a href="https://twitch.tv/okayaaron">stream</a> very, very old video games.</p>
                        <p>Good inspiration comes from experience. I try to stand often and spend time away from my desk. It helps.</p>
                        <h2>About the website</h2>
                        <p>My website is built with <a href="https://www.gatsbyjs.com/">Gatsby</a> – a React-based framework for generating static sites. As an exercise to relearn to code in 2021, I built the site from scratch (no templates!) with the help of <a href="https://www.framer.com/motion/">Framer Motion</a> and <a href="https://styled-components.com/">Styled Components</a>.</p>
                    </ArticleBody>
                </section>
            </div>
        </Layout>
    )
}