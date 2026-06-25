import chefImg from '../assets/chef.jpg'

function About() {
  return (
    <div className="max-w-[800px] mx-2.5 md:mx-auto my-5 md:my-10 p-6 md:p-10 bg-[#fffdd0] border-4 border-[#B07C4C] text-center text-[#103852]">
      <h1 className="text-[#B07C4C] mb-5 text-[32px]">Our Story</h1>

      <img
        src={chefImg}
        alt="Head Chef"
        className="w-[220px] h-[220px] object-cover rounded-full border-[5px] border-[#B07C4C] mx-auto mt-5 mb-7 block"
      />

      <p className="mb-4 text-[17px] leading-[1.7]">
        Gusteau's had a radiacal belief: <strong>Anyone can cook.</strong> Located
        at 15 Quai de la Tournelle, our restaurant opened its doors during the
        1950s to authentic French cuisine to everyone.
      </p>

      <p className="mb-4 text-[17px] leading-[1.7]">
        Our founder, Gusteau, assembled a team of passionate, like-minded chefs
        with broad talents, from chefs who were trained in the finest culinary
        traditions of France to chefs of unknown origins. From the very first
        night, the aroma of a new French cuisine filled the cobblestone street
        outside.
      </p>

      <p className="mb-4 text-[17px] leading-[1.7]">
        Over the years, Gusteau's earned a reputation not only for its{' '}
        <em>Ratatouille</em>, but for the nostalgia of mother's home cooking in
        every plate. We believe the kitchen is a place of creativity, courage,
        and connection.
      </p>

      <p className="mb-4 text-[17px] leading-[1.7]">
        Today, our menu celebrates the diversity of French cuisine and culture:
        from the rustic comfort food of traditional France to the delicate
        artistry of new-age cuisine. Every ingredient is sourced from local
        markets and trusted French producers who share our commitment to quality.
      </p>

      <p className="mb-4 text-[17px] leading-[1.7]">
        Join us for a quiet dinner for two, a family celebration, or to
        experience French cuisine made homely for you from chefs from all walks
        of life.
      </p>

      <p className="text-[22px] text-[#B07C4C] italic mt-6">
        "Anyone can cook!"
      </p>
    </div>
  )
}

export default About
