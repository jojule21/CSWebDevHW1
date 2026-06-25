import { useState } from 'react'

function Contact() {
  // controlled form fields
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    alert("Thank you, " + name + "! We have received your message and will be in touch shortly.")
    // clear the form
    setName("")
    setEmail("")
    setMessage("")
  }

  const inputClass =
    "w-full p-2.5 mb-4 border-2 border-[#B07C4C] bg-white text-[15px] text-[#103852]"

  return (
    <div>
      <div className="max-w-[900px] mx-auto my-10 px-5 flex gap-10 flex-wrap">

        {/* Find Us / Reservations */}
        <div className="flex-1 min-w-[260px] bg-[#fffdd0] border-4 border-[#B07C4C] p-[30px] text-[#103852]">
          <h2 className="text-[#B07C4C] mb-4 text-2xl">Find Us</h2>
          <p className="mb-2.5 text-base leading-[1.6]">15 Quai de la Tournelle<br />75005 Paris, France</p>
          <p className="mb-2.5 text-base leading-[1.6]">+33 1 0622 2007</p>
          <p className="mb-2.5 text-base leading-[1.6]">eatery@gusteau.com</p>
          <p className="mb-2.5 text-base leading-[1.6]">Mon – Sun: 11:00 AM – 10:00 PM</p>
          <br />
          <h2 className="text-[#B07C4C] mb-4 text-2xl">Reservations</h2>
          <p className="mb-2.5 text-base leading-[1.6]">
            For groups of 6 or more, please call us directly or send a message
            using the form. We recommend booking at least 48 hours in advance.
          </p>
        </div>

        {/* Message form */}
        <div className="flex-1 min-w-[260px] bg-[#fffdd0] border-4 border-[#B07C4C] p-[30px]">
          <h2 className="text-[#B07C4C] mb-4 text-2xl">Send a Message</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name" className="block mb-1.5 text-[#103852] font-bold">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your full name"
              required
              className={inputClass}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="email" className="block mb-1.5 text-[#103852] font-bold">Email</label>
            <input
              type="email"
              id="email"
              placeholder="your@email.com"
              required
              className={inputClass}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="message" className="block mb-1.5 text-[#103852] font-bold">Message</label>
            <textarea
              id="message"
              placeholder="Your message or reservation request..."
              required
              className={inputClass + " h-[120px] resize-y"}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button
              type="submit"
              className="bg-[#103852] text-[#B07C4C] border-2 border-[#B07C4C] px-7 py-2.5 text-base cursor-pointer hover:bg-[#B07C4C] hover:text-white"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Google Map */}
      <div className="flex justify-center items-center mx-auto mt-5 mb-10 px-5">
        <iframe
          title="Gusteau's location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.4401391900196!2d2.3524042766282096!3d48.84981687133096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671e4b5a12d83%3A0x8dcf6e46e0e4b19!2s15%20Quai%20de%20la%20Tournelle%2C%2075005%20Paris%2C%20France!5e0!3m2!1sen!2sus!4v1781197590535!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full max-w-[860px] h-[350px] border-4 border-[#B07C4C]"
        ></iframe>
      </div>
    </div>
  )
}

export default Contact
