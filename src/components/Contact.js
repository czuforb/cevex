import React from "react"

const Contact = () => {
  return (
    <section className="w-full bg-gray-300">
      <div className="lg:w-3/4 mx-auto flex flex-col md:flex-row justify-start  p-4">
        <div className="w-full md:w-1/3 lg:w-1/3 mx-auto my-auto">
          <h3 className="text-xl md:text-4xl font-bold mb-4 ">
            Get in touch with us!
          </h3>
          <p className="text-base md:text-lg text-gray-800">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
            similique?
          </p>
          <div class="h-1 w-24 opacity-75 my-4 rounded"></div>
          <div className="flex justify-around p-8 bg-gray-200">
            <div className="w-1/2 text-lg">
              <h1 className="font-bold">Joseph Engineer</h1>
              <p className="">CEO & Founder</p>
              <a className="block" href="tel:+36305537883">
                +36 30 553 7883
              </a>
              <a className="block underline" href="mailto:czj@cevex.hu">
                czj@cevex.hu
              </a>
            </div>
            <div className="w-1/3 text-lg">
              <h1 className="font-bold">Cevex Kft.</h1>
              <p className="">Béke út 167.</p>
              <p className="">3416 Tard</p>
              <p className="">Hungary</p>
            </div>
          </div>
          <div className="w-3/4 h-24 rounded mx-auto"></div>
        </div>
        <div class="w-ful lg:w-1/2">
          <form class="m-4 p-10 bg-white rounded shadow-xl">
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
                required=""
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
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
