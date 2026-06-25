function Footer() {
  const socialClass =
    "text-[#B07C4C] no-underline text-base border-2 border-[#B07C4C] px-[18px] py-2 hover:bg-[#B07C4C] hover:text-white"

  return (
    <footer className="bg-[#103852] border-t-[6px] border-[#B07C4C] text-[#FBE18B] px-5 py-[30px] text-center mt-[50px]">
      <h3 className="text-[#B07C4C] mb-3.5 text-xl">Gusteau's Fine French Cuisine</h3>
      <p className="mb-1.5 text-[15px]">15 Quai de la Tournelle, 75005 Paris, France</p>
      <p className="mb-1.5 text-[15px]">Mon–Sun 11:00 AM – 10:00 PM</p>
      <p className="mb-1.5 text-[15px]">Phone: +33 1 0622 2007 | Email: eatery@gusteau.com</p>

      <div className="my-4 flex justify-center gap-6 flex-wrap">
        <a href="#" className={socialClass}>Facebook</a>
        <a href="#" className={socialClass}>Instagram</a>
        <a href="#" className={socialClass}>Twitter / X</a>
        <a href="#" className={socialClass}>YouTube</a>
      </div>

      <p className="mt-5 text-[13px] text-[#aac4d6]">
        &copy; 2025 Gusteau's Restaurant. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
