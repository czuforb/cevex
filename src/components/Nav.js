import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

const Nav = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled)
      }
    }

    document.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <>
      {/* DESKTOP NAVIGATION */}
      <div className="fixed top-0 w-full h-auto py-8  mx-auto flex justify-center z-50 overflow-hidden transition-all ease-in duration-500">
        <nav
          data-active={scrolled}
          className="hidden md:flex w-3/4 text-center justify-end align-center py-2 px-10 rounded-md"
        >
          <div href="/" className="mr-auto block text-left">
            <Link to="/" className="text-2xl font-bold">
              Cevex
            </Link>
          </div>
          <ul className="list-none flex justify-around">
            <li>
              <Link
                to="/about"
                className="inline-block py-2 px-3 text-gray-900 font-bold hover:text-gray-700 no-underline"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/references"
                className="inline-block py-2 px-3 text-gray-900 font-bold hover:text-gray-700 no-underline"
              >
                References
              </Link>
            </li>
            <Link to="/" className="">
              <button className="py-2 px-3 bg-yllw-00 hover:bg-yellow-500 rounded font-bold transition-all duration-150 ease-in">
                Contact us
              </button>
            </Link>
          </ul>
        </nav>

        {/* MOBILE NAVIGATION */}

        <nav className="fixed w-3/4 flex flex-row items-center mx-auto md:hidden z-50 transition-all ease-in p-2 px-4 duration-500 rouded">
          <div href="/" className="mr-auto block text-left">
            <Link to="/" className="text-2xl font-bold">
              Cevex
            </Link>
          </div>

          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                class="heroicon-ui"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </nav>
      </div>
    </>
  )
}

export default Nav
