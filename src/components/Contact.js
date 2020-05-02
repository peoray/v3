import React from "react"

function Contact() {
  let styles = {
    transform: "translate(100%) rotate(180deg)",
  }
  return (
    <div className="overflow-x-hidden">
      <div className="contact-me bg-background-secondary pt-16">
        <div className="container-inner mx-auto text-xl pb-4 relative">
          <h2 className="font-bold mb-6" id="contact">
            Contact me:
          </h2>

          <div className="absolute right-0 top-0" style={styles}>
            <svg width="170px" height="170px">
              <use xlinkHref="#dots-triangle" />
            </svg>
          </div>

          <p className="mb-12">
            If you’re looking to get in contact with me for business inquiries
            or if you have a question, feel free to send me a message. I’ll try
            to respond as soon as I can 
          </p>

          <div className="text-lg sm:text-lg mb-16">
            <form
              action="https://formspree.io/xyykwazv"
              method="POST"
              className="mb-12"
            >
              <div className="flex flex-wrap mb-6 -mx-4">
                <div className="w-full md:w-1/2 mb-6 md:mb-0 px-4">
                  <label className="block mb-2 text-copy-primary" htmlFor="name">
                    Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Jon Snow"
                    className="block w-full bg-background-form border border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-4"
                    required
                  />
                </div>

                <div className="w-full px-4 md:w-1/2">
                  <label className="block text-copy-primary mb-2" htmlFor="email">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="_replyto"
                    id="email"
                    placeholder="email@example.com"
                    className="block w-full bg-background-form border border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-4"
                    required
                  />
                </div>
              </div>

              <div className="w-full mb-12">
                <label className="block text-copy-primary mb-2" htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  rows="5"
                  name="message"
                  className="block w-full bg-background-form border border-color-primary shadow rounded outline-none appearance-none focus:border-green-700 mb-2 px-4 py-4"
                  placeholder="Enter your message here."
                  required
                ></textarea>
              </div>

              <div className="flex justify-end w-full">
                <input
                  type="submit"
                  value="Submit"
                  className="block bg-green-700 hover:bg-green-800 text-white text-sm font-semibold tracking-wide uppercase shadow rounded cursor-pointer px-6 py-3"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- end contact-me --> */}
    </div>
  )
}

export default Contact
