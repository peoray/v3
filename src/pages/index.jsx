import React from "react"
import { Helmet } from "react-helmet"
import SEO from "../components/SEO"
import DefaultLayout from "../layout/Index"
import About from "../components/About"
import ProjectListing from "../components/ProjectListing"
import Contact from "../components/Contact"
import Newsletter from "../components/Newsletter"
import config from "../../data/SiteConfig"

export default () => (
  <DefaultLayout>
    <Helmet title={`Home - ${config.siteTitle} | Full Stack Software Developer`} />
    <SEO />
    <About />
    <ProjectListing />
    <Contact />
    <Newsletter />
  </DefaultLayout>
)
