import React from "react";
import SocialLinks from "./SocialLinks";

function Footer() {
  return (
    <footer className="text-white bg-green-700">
      <div className="container flex flex-col items-center justify-between py-8 mx-auto lg:flex-row">
        <div className="mb-8 lg:mb-0">
          <div className="text-sm">
            <p className="text-white">
              This website is{" "}
              <a
                href="https://github.com/peoray/peoray.dev"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="text-white hover:text-gray-300"
              >
                open source.
              </a>{" "}
              Proudly built with{" "}
              <a
                href="https://www.gatsbyjs.com/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="text-white hover:text-gray-300"
              >
                Gatsby
              </a>{" "}
              and{" "}
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="text-white hover:text-gray-300"
              >
                Tailwind CSS
              </a>
              , and hosted with
              <a
                href="https://www.netlify.com/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="text-white hover:text-gray-300"
              >
                {" "}
                Netlify.
              </a>
            </p>
          </div>
          <div className="flex items-center mt-2 lg:mt-0">
            <p className="mr-2">
              &copy; Emmanuel Raymond 2017 - {new Date().getFullYear()}. All
              rights reserved.
            </p>

            {/* <svg
              role="img"
              aria-label="LGBTI Pride flag"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 777 480"
              class="h-3"
            >
              <rect fill="#9d61a4" width="777" height="480"></rect>{" "}
              <rect fill="#249cd5" width="777" height="400"></rect>{" "}
              <rect fill="#70bc53" width="777" height="320"></rect>{" "}
              <rect fill="#fdc753" width="777" height="240"></rect>{" "}
              <rect fill="#f48d3a" width="777" height="160"></rect>{" "}
              <rect fill="#d3555c" width="777" height="80"></rect>
            </svg> */}
          </div>
          {/* <div>
            Proudly powered by {' '}
            <a
              href="https://gatsby.org"
              className="font-normal text-white underline hover:text-gray-400"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Gatsby. {' '}
            </a>
            Deployed on {' '}
            <a
              href="https://www.netlify.com/"
              className="font-normal text-white underline hover:text-gray-400"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Netlify
            </a>
          </div> */}
          <div>
            <a
              href="/rss.xml"
              className="font-normal text-white underline hover:text-gray-400"
            >
              RSS Feed{" "}
            </a>
            |{" "}
            <a
              href="/sitemap.xml"
              className="font-normal text-white underline hover:text-gray-400"
            >
              Sitemap
            </a>
          </div>
        </div>

        <SocialLinks />
      </div>
    </footer>
  );
}

export default Footer;
