import React from "react"
import DefaultLayout from "../layout/Index"
import { Helmet } from "react-helmet"
import SEO from "../components/SEO"
import config from "../../data/SiteConfig"

function About() {
  return (
    <DefaultLayout>
      <Helmet title={`About – ${config.siteTitle}`} />
      <SEO />
      <div className="container-inner mx-auto py-16">
        <h2 className="text-4xl font-bold mb-16">About me</h2>
      </div>
    </DefaultLayout>
  )
}

export default About
