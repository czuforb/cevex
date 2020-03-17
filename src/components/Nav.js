import React, { useState, useEffect, useRef } from "react"
import { Link } from "gatsby"

const Nav = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setOpen] = useState(false)
  const ref = useRef()

  useOnClickOutside(ref, () => setOpen(false))

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
      <section
        className={`w-full  fixed z-50 ${
          scrolled ? "bg-gray-300 shadow-md" : "transparent"
        } ease-in-out transition-all duration-500`}
      >
        <div className="max-w-screen-xl p-4 mx-auto flex justify-end items-center">
          <h1
            className={`mr-auto text-4xl ${
              scrolled ? "text-gray-900" : "text-gray-100"
            } font-bold`}
          >
            Cevex
          </h1>
          <ul className="hidden md:flex">
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
              <button className="py-2 px-3 bg-yllw-00 hover:bg-yellow-500 rounded font-bold shadow-xl hover:shadow-2xl transition-all duration-150 ease-in">
                Contact us
              </button>
            </Link>
          </ul>
          <button
            className="md:hidden"
            onClick={() => {
              setOpen(!isOpen)
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                className="heroicon-ui"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </div>
        <div
          ref={ref}
          className={`absolute z-10 w-1/4 bg-bl-00 right-0 top-0 h-screen transform ${
            isOpen ? "" : "translate-x-500"
          } ease-in-out transition-all duration-300`}
        >
          <ul className="mt-40 flex flex-col px-4">
            <li>
              <Link
                to="/about"
                className="inline-block py-2 px-3 text-gray-100 font-bold hover:text-gray-400 no-underline"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/references"
                className="inline-block py-2 px-3 text-gray-100 font-bold hover:text-gray-400 no-underline"
              >
                References
              </Link>
            </li>
            <Link to="/" className="mt-4">
              <button className="py-2 px-3 bg-yllw-00 hover:bg-yellow-500 rounded font-bold shadow-xl hover:shadow-2xl transition-all duration-150 ease-in">
                Contact us
              </button>
            </Link>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Nav

function useOnClickOutside(ref, handler) {
  useEffect(
    () => {
      const listener = event => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return
        }

        handler(event)
      }

      document.addEventListener("mousedown", listener)
      document.addEventListener("touchstart", listener)

      return () => {
        document.removeEventListener("mousedown", listener)
        document.removeEventListener("touchstart", listener)
      }
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  )
}
