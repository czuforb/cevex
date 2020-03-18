import React from "react"
import avatar1 from "../../static/avatars/avatar-1.png"
import avatar2 from "../../static/avatars/avatar-2.png"
import avatar3 from "../../static/avatars/avatar-3.png"
import avatar4 from "../../static/avatars/avatar-4.png"
import Testimonial from "./Testimonial"
const Testimonials = () => {
  return (
    <section className="w-full flex flex-col items-center p-16 bg-bl-00">
      <h2 className="text-gray-200 text-4xl font-bold">Our clients said</h2>
      <div className="flex flex-col md:flex-row flex-wrap justify-center mt-8 mb-16">
        <Testimonial
          img={avatar1}
          name="Margaret Somebody"
          quote="I STRONGLY recommend Cevex to EVERYONE interested in running a successful online business! Absolutely wonderful! Cevex was the best investment I ever made."
        />
        <Testimonial
          img={avatar2}
          name="Susane Whocouldbe"
          quote="I'd be lost without Cevex. Cevex has really helped our business. Cevex has completely surpassed our expectations."
        />
        <Testimonial
          img={avatar3}
          name="Johnny Someone"
          quote="Cevex was the best investment I ever made. I use Cevex often. Definitely worth the investment."
        />
        <Testimonial
          img={avatar4}
          name="Female Boss"
          quote="We have no regrets! I would gladly pay over 600 dollars for Cevex. Cevex has completely surpassed our expectations. We're loving it."
        />
      </div>
    </section>
  )
}

export default Testimonials
