import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Cart from './components/Cart.jsx'

import Home from './pages/Home.jsx'
import Menu from './pages/Menu.jsx'
import About from './pages/About.jsx'
import Gallery from './pages/Gallery.jsx'
import Contact from './pages/Contact.jsx'

function App() {
  // the cart, loaded from localStorage so it survives a page refresh
  const [cartItems, setCartItems] = useState(function () {
    const saved = localStorage.getItem("gusteauCart")
    return saved ? JSON.parse(saved) : []
  })

  // whether the cart panel is open
  const [cartOpen, setCartOpen] = useState(false)

  // save the cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("gusteauCart", JSON.stringify(cartItems))
  }, [cartItems])

  // add an item (or bump its quantity if it is already in the cart)
  function addToCart(name, price) {
    let found = false
    const newCart = cartItems.map((item) => {
      if (item.name === name) {
        found = true
        return { ...item, qty: item.qty + 1 }
      }
      return item
    })
    if (!found) {
      newCart.push({ name: name, price: price, qty: 1 })
    }
    setCartItems(newCart)
    setCartOpen(true)
  }

  // change the quantity by +1 or -1; remove the item if it hits 0
  function changeQty(name, delta) {
    const newCart = []
    cartItems.forEach((item) => {
      if (item.name === name) {
        const newQty = item.qty + delta
        if (newQty > 0) {
          newCart.push({ ...item, qty: newQty })
        }
      } else {
        newCart.push(item)
      }
    })
    setCartItems(newCart)
  }

  // remove one item completely
  function removeFromCart(name) {
    setCartItems(cartItems.filter((item) => item.name !== name))
  }

  // empty the cart
  function clearCart() {
    setCartItems([])
  }

  // total number of items, for the badge in the navbar
  let cartCount = 0
  cartItems.forEach((item) => {
    cartCount += item.qty
  })

  return (
    <div>
      <Header />
      <Navbar cartCount={cartCount} onOpenCart={() => setCartOpen(true)} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu addToCart={addToCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />

      <Cart
        cartItems={cartItems}
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        onChangeQty={changeQty}
        onRemove={removeFromCart}
        onClear={clearCart}
      />
    </div>
  )
}

export default App
