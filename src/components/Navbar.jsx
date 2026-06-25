import { useState } from 'react'
import { Link } from 'react-router-dom'

// the nav links, listed once and reused for both the desktop bar and the mobile dropdown
const navLinks = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About Us" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact Us" },
]

function Navbar({ cartCount, onOpenCart }) {
  // tracks whether the mobile menu is open
  const [menuOpen, setMenuOpen] = useState(false)

  const linkClass =
    "block px-[22px] py-[18px] text-[#B07C4C] text-lg no-underline hover:bg-[#0d2c41]"

  // close the mobile menu after a link is tapped
  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <div className="bg-[#103852] border-t-[6px] border-b-[6px] border-[#B07C4C]">

      {/* Top bar */}
      <div className="flex items-center">

        {/* Hamburger on the left (mobile only) */}
        <div
          className="flex md:hidden flex-col cursor-pointer px-5 py-[18px] gap-[5px]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block w-[26px] h-[3px] bg-[#B07C4C] rounded-sm"></span>
          <span className="block w-[26px] h-[3px] bg-[#B07C4C] rounded-sm"></span>
          <span className="block w-[26px] h-[3px] bg-[#B07C4C] rounded-sm"></span>
        </div>

        {/* Nav links shown inline (desktop only) */}
        <div className="hidden md:flex md:flex-1">
          {navLinks.map((link) => (
            <div key={link.to}>
              <Link to={link.to} className={linkClass} onClick={closeMenu}>{link.label}</Link>
            </div>
          ))}
        </div>

        {/* Cart button on the right */}
        <button
          className="ml-auto px-5 text-[#B07C4C] text-[22px] bg-transparent border-none cursor-pointer flex items-center"
          onClick={onOpenCart}
        >
          &#128722;
          <span className="bg-[#B07C4C] text-white rounded-full text-xs w-5 h-5 inline-flex items-center justify-center ml-1">
            {cartCount}
          </span>
        </button>
      </div>

      {/* Nav links as a dropdown below the bar (mobile only, when open) */}
      {menuOpen && (
        <div className="md:hidden flex flex-col border-t border-[#B07C4C]">
          {navLinks.map((link) => (
            <div key={link.to}>
              <Link to={link.to} className={linkClass} onClick={closeMenu}>{link.label}</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Navbar
