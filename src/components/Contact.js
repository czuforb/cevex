import React from "react"

const Contact = () => {
  return (
    <section id="contact" className="contact-bg bg-gray-200 p-16">
      <div className="z-20 lg:w-3/4 mx-auto flex flex-col md:flex-row justify-start p-4 bg-gray-400 rounded shadow-xl">
        <div className="w-full md:w-1/3 lg:w-1/3 mx-auto my-auto">
          <h3 className="font-display text-xl md:text-4xl font-bold mb-4 ">
            Get in touch with us!
          </h3>
          <p className="text-base md:text-lg text-gray-800">
            If you are in front of an infrastructure related project or need
            consultancy from an experimented technical engineer, please don't
            hesitet and call ass. We are waiting for your call.
            <p className="font-bold my-4 text-gray-800">
              {" "}
              Monday - Friday | 9:00 - 18:00{" "}
            </p>
          </p>
          <div class="h-1 w-24 opacity-75 my-4 rounded"></div>
          <div className="flex justify-around p-8 bg-gray-300">
            <div className="w-1/2 text-lg">
              <h1 className="font-bold font-display">Joseph Engineer</h1>
              <p className="">CEO & Founder</p>
              <a className="block" href="tel:+36305537883">
                +36 30 553 7883
              </a>
              <a className="block underline" href="mailto:czj@cevex.hu">
                czj@cevex.hu
              </a>
            </div>
            <div className="w-1/3 text-lg">
              <h1 className="font-bold font-display">Cevex Kft.</h1>
              <p className="">Béke út 167.</p>
              <p className="">3416 Tard</p>
              <p className="">Hungary</p>
            </div>
          </div>
          <div className="w-3/4 h-24 rounded mx-auto"></div>
        </div>
        <div class="w-ful lg:w-1/2">
          <form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            class="m-4 p-10 bg-white rounded shadow-xl"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <div class="">
              <label class="block text-sm text-gray-600 mb-2 font-bold">
                Name
              </label>
              <input
                class="w-full px-5 py-4 text-gray-600 bg-gray-200 rounded mb-4"
                type="text"
                placeholder="Your Name"
                aria-label="Name"
              />
            </div>
            <div class="mt-2">
              <label class="block text-sm text-gray-600 font-bold mb-2">
                Email
              </label>
              <input
                class="w-full px-5 py-4 text-gray-700 bg-gray-200 rounded mb-4"
                type="text"
                placeholder="Your Email"
                aria-label="Email"
              />
            </div>
            <div class="mt-2">
              <label class="block text-sm text-gray-600 font-bold mb-2">
                Message
              </label>
              <input
                class="w-full h-40 px-5 text-gray-700 bg-gray-200 rounded mb-4"
                type="text"
                required=""
                placeholder="Your Message"
                aria-label="Email"
              />
            </div>

            <div class="mt-4">
              <button
                class="px-4 py-1 font-bold tracking-wider bg-yllw-00 rounded"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
