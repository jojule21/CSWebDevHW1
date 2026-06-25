import { menuSections } from '../data/menuData.js'

function Menu({ addToCart }) {
  return (
    <div className="w-fit max-w-[95%] mx-auto my-10 px-3 sm:px-12 py-6 sm:py-[30px] bg-[#fffdd0] border-4 border-[#B07C4C] text-center text-[#103852]">
      <h1 className="mb-5 text-[#B07C4C] text-[32px]">Our Menu</h1>

      {/* loop over each section (Starters, Mains, etc.) */}
      {menuSections.map((section) => (
        <div key={section.title} className="mb-[30px]">
          <h2 className="text-[#B07C4C] mb-3.5 text-[22px]">{section.title}</h2>

          <table className="w-full border-collapse mt-2.5">
            <tbody>
              <tr>
                <th className="bg-[#103852] text-[#B07C4C] px-2.5 sm:px-4 py-2.5 text-left text-sm sm:text-base">Item</th>
                <th className="bg-[#103852] text-[#B07C4C] px-2.5 sm:px-4 py-2.5 text-left text-sm sm:text-base">Description</th>
                <th className="bg-[#103852] text-[#B07C4C] px-2.5 sm:px-4 py-2.5 text-left text-sm sm:text-base">Price</th>
                <th className="bg-[#103852] text-[#B07C4C] px-2.5 sm:px-4 py-2.5 text-left"></th>
              </tr>

              {/* loop over each item in the section */}
              {section.items.map((item) => (
                <tr key={item.name} className="even:bg-[#f5f0c0]">
                  <td className="px-2.5 sm:px-4 py-2.5 border-b border-[#B07C4C] text-left text-sm sm:text-base">{item.name}</td>
                  <td className="px-2.5 sm:px-4 py-2.5 border-b border-[#B07C4C] text-left text-sm sm:text-base">{item.description}</td>
                  <td className="px-2.5 sm:px-4 py-2.5 border-b border-[#B07C4C] text-left text-sm sm:text-base">${item.price.toFixed(2)}</td>
                  <td className="px-2.5 sm:px-4 py-2.5 border-b border-[#B07C4C] text-left">
                    <button
                      className="bg-[#103852] text-[#B07C4C] border-2 border-[#B07C4C] px-3.5 py-1.5 cursor-pointer text-sm whitespace-nowrap hover:bg-[#B07C4C] hover:text-white"
                      onClick={() => addToCart(item.name, item.price)}
                    >
                      + Add
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  )
}

export default Menu
