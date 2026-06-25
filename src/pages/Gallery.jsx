import { useState } from 'react'

import logoOutside from '../assets/guesteauslogo.jpg'
import chefs from '../assets/chefs.jpg'
import headChef from '../assets/Alfredo-Linguini.Ratatouille.png'
import restaurant from '../assets/restaurant.jpg'
import chefsAtWork from '../assets/chefsatwork.jpg'
import ratatouille from '../assets/ratatouille.png'

// the slides, kept in an array so we can loop over them
const slides = [
  { img: logoOutside, caption: "Our logo outside the restaurant" },
  { img: chefs, caption: "Our chefs at work" },
  { img: headChef, caption: "Our head chef" },
  { img: restaurant, caption: "An evening at Gusteau's" },
  { img: chefsAtWork, caption: "French cuisine being made" },
  { img: ratatouille, caption: "Chef's Signature Ratatouille" },
]

function Gallery() {
  const [slideIndex, setSlideIndex] = useState(0)

  // move forward/backward and wrap around the ends
  function changeSlide(n) {
    let next = slideIndex + n
    if (next >= slides.length) next = 0
    if (next < 0) next = slides.length - 1
    setSlideIndex(next)
  }

  // jump straight to a slide when a dot is clicked
  function goToSlide(n) {
    setSlideIndex(n)
  }

  return (
    <div className="max-w-[900px] mx-2.5 md:mx-auto my-5 md:my-10 text-center">
      <h1 className="text-[#103852] mb-6 text-[32px]">Our Gallery</h1>

      <div className="relative w-full overflow-hidden bg-black">
        {/* show only the current slide */}
        <div>
          <img
            src={slides[slideIndex].img}
            alt={slides[slideIndex].caption}
            className="w-full h-[260px] md:h-[480px] object-cover"
          />
          <div className="bg-[#103852]/70 text-[#FBE18B] px-4 py-2.5 text-base text-left">
            {slides[slideIndex].caption}
          </div>
        </div>

        <button
          className="absolute top-1/2 -translate-y-1/2 left-0 bg-[#103852]/75 text-[#B07C4C] border-none px-5 py-3.5 cursor-pointer text-[22px] z-10 hover:bg-[#103852]"
          onClick={() => changeSlide(-1)}
        >
          &#10094;
        </button>
        <button
          className="absolute top-1/2 -translate-y-1/2 right-0 bg-[#103852]/75 text-[#B07C4C] border-none px-5 py-3.5 cursor-pointer text-[22px] z-10 hover:bg-[#103852]"
          onClick={() => changeSlide(1)}
        >
          &#10095;
        </button>
      </div>

      {/* dots */}
      <div className="text-center py-3.5">
        {slides.map((slide, i) => (
          <span
            key={i}
            onClick={() => goToSlide(i)}
            className={
              "inline-block w-[13px] h-[13px] bg-[#B07C4C] rounded-full mx-[5px] cursor-pointer " +
              (i === slideIndex ? "opacity-100" : "opacity-40")
            }
          ></span>
        ))}
      </div>
    </div>
  )
}

export default Gallery
