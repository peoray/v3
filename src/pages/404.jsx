import React from "react"
import DefaultLayout from "../layout/Index"
import notFound from "../assets/images/404.svg"
import { Helmet } from "react-helmet"
import SEO from "../components/SEO"
import config from "../../data/SiteConfig"

function NoPageFound() {
  return (
    <DefaultLayout>
      <Helmet title={`Page not found – ${config.siteTitle}`} />
      <SEO />
      <div className="container-inner mx-auto py-16">
        <h2 className="text-4xl font-bold mb-16">Page Not Found</h2>
        <img src={notFound} alt="404 error" />
      </div>
    </DefaultLayout>
  )
}

export default NoPageFound
