import React from "react"
import SocialLinks from "./SocialLinks"

function Footer() {
  return (
    <footer className="bg-green-700 text-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between py-8">
        <div className="mb-8 lg:mb-0">
          <div>&copy; Emmanuel Raymond 2017 - {new Date().getFullYear()}. All rights reserved.</div>
          {/* <div>
            Proudly powered by {' '}
            <a
              href="https://gatsby.org"
              className="text-white hover:text-gray-400 font-normal underline"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Gatsby. {' '}
            </a>
            Deployed on {' '}
            <a
              href="https://www.netlify.com/"
              className="text-white hover:text-gray-400 font-normal underline"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Netlify
            </a>
          </div> */}
          <div>
            <a
              href="/rss.xml"
              className="text-white hover:text-gray-400 font-normal underline"
            >
              RSS Feed {' '}
            </a>
            | {' '}
            <a
              href="/sitemap.xml"
              className="text-white hover:text-gray-400 font-normal underline"
            >
              Sitemap
            </a>
          </div>
        </div>

          <SocialLinks />
      </div>
    </footer>
  )
}

export default Footer
