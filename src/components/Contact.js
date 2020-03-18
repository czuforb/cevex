import React from "react"

const Contact = () => {
  return (
    <section id="contact" className="contact-bg bg-gray-200 w-full p-6">
      <div className="z-20 max-w-screen-xl mx-auto flex flex-col md:flex-row justify-start p-4 bg-gray-400 rounded shadow-xl">
        <div className="w-full md:w-1/3 lg:w-1/3 mx-auto my-auto">
          <h3 className="font-display text-4xl font-bold mb-4">
            Get in touch with us!
          </h3>
          <p className="text-xl text-gray-800">
            If you are in front of an infrastructure related project or need
            consultancy from an experimented technical engineer, please don't
            hesitet and call ass. We are waiting for your call.
          </p>
          <p className="font-bold my-4 text-gray-600 text-xl">
            Monday - Friday | 9:00 - 18:00
          </p>
          <div className="p-6 flex justify-around text-xl bg-gray-300">
            <div className="p-2">
              <h1 className="font-bold font-display">Joseph Engineer</h1>
              <p className="">CEO & Founder</p>
              <a className="block" href="tel:+36305537883">
                +36 30 553 7883
              </a>
              <a className="block underline" href="mailto:czj@cevex.hu">
                czj@cevex.hu
              </a>
            </div>
            <div className="p-2">
              <h1 className="font-bold font-display">Cevex Kft.</h1>
              <p className="">Béke út 167.</p>
              <p className="">3416 Tard</p>
              <p className="">Hungary</p>
            </div>
          </div>
        </div>
        <div class="mt-8 md:m-0 w-ful lg:w-1/2">
          <h3 className="font-display text-4xl font-bold mb-4 ">
            Send us a message!
          </h3>
          <form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            class="text-xl"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <div>
              <label class="block text-lg text-gray-700 mb-2 font-bold">
                Name
              </label>
              <input
                class="w-3/4 px-4 py-2 text-gray-900 bg-gray-200 rounded mb-4 focus:border-teal-500"
                type="text"
                placeholder="Your Name"
                aria-label="Name"
                name="Name"
              />
            </div>
            <div>
              <label class="block text-lg text-gray-700 mb-2 font-bold">
                E-mail
              </label>
              <input
                class="w-3/4 px-4 py-2 text-gray-900 bg-gray-200 rounded mb-4 focus:border-teal-500"
                type="email"
                placeholder="Your e-mail"
                aria-label="E-mail"
                name="E-mail"
              />
            </div>
            <div class="mt-2">
              <label class="block text-lg text-gray-700 mb-2 font-bold">
                Message
              </label>
              <textarea
                class="w-3/4 px-4 py-2 text-gray-700 bg-gray-200 rounded mb-4"
                type="text"
                required=""
                placeholder="Your Message"
                aria-label="Email"
                name="message"
              />
            </div>

            <div class="mt-2">
              <button
                className="text-xl py-4 px-6 bg-yllw-00 hover:bg-yellow-300 shadow-xl hover:shadow-2xl rounded font-bold transition-all duration-150 ease-in"
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
