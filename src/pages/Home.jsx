import { Link } from 'react-router-dom'
import heroImg from '../assets/ratatouille.png'

function Home() {
  return (
    <div>
      {/* Hero */}
      <div className="relative w-full h-[280px] md:h-[420px] overflow-hidden flex items-center justify-center text-center">
        <img
          src={heroImg}
          alt="Gusteau's Restaurant"
          className="absolute w-full h-full object-cover top-0 left-0 brightness-[0.45]"
        />
        <div className="relative z-[1] text-[#FBE18B]">
          <h1
            className="text-[26px] sm:text-[34px] md:text-[56px] tracking-[4px] text-[#B07C4C]"
            style={{ textShadow: "2px 2px 8px #000" }}
          >
            Gusteau's
          </h1>
          <p
            className="text-[15px] md:text-xl mt-3 tracking-[2px]"
            style={{ textShadow: "1px 1px 4px #000" }}
          >
            Anyone Can Cook!
          </p>
          <Link
            to="/menu"
            className="inline-block mt-6 px-8 py-3 bg-[#B07C4C] text-white no-underline text-lg border-2 border-white tracking-wide hover:bg-[#8a5e35]"
          >
            View Our Menu
          </Link>
        </div>
      </div>

      {/* Welcome biography */}
      <div className="max-w-[700px] mx-auto my-10 text-center px-5">
        <h2 className="text-[#103852] text-[26px] mb-3.5">Bienvenue à Gusteau's</h2>
        <p className="text-[17px] leading-[1.8] text-[#103852]">
          Located at 15 Quai de la Tournelle, Gusteau's has been a sanctuary of
          authentic French cuisine since the 1950s. Whether you come for our
          legendary Ratatouille or drink a glass of wine, every visit is a
          culinary journey.
        </p>
        <div className="mt-6">
          <div className="text-4xl text-[#B07C4C] tracking-[6px]">⭐⭐⭐⭐⭐</div>
          <blockquote className="mt-4 text-[#103852] italic text-[17px] leading-[1.8] border-l-4 border-[#B07C4C] pl-4 text-left inline-block">
            "Last night, I experienced something new: an extraordinary meal from a
            singularly unexpected source. To say that both the meal and its maker
            have challenged my preconceptions about fine cooking is a gross
            understatement. They have rocked me to my core."
          </blockquote>
          <p className="mt-2.5 text-[#B07C4C] text-[15px]">— Anton Ego, Food Critic</p>
        </div>
      </div>
    </div>
  )
}

export default Home
