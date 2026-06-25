// All menu items from Homework 1, grouped into sections.
// Keeping them here as arrays lets the Menu page loop over them with .map().

export const menuSections = [
  {
    title: "Starters",
    items: [
      { name: "Remy's Herb Soup", description: "Pot of soup with a handful of saffron and herbs", price: 12.00 },
      { name: "Leek Velouté", description: "Silky leek and potato soup", price: 11.00 },
      { name: "Mushrooms on Brioche", description: "Wild mushrooms sautéed in butter and thyme, served on toasted brioche", price: 13.00 },
      { name: "Camembert Crostini", description: "Warm Camembert on baguette with fig jam", price: 14.00 },
    ],
  },
  {
    title: "Main Courses",
    items: [
      { name: "Ratatouille (Confit Byaldi)", description: "Thinly sliced courgette, tomato, and pepper slow-roasted in olive oil", price: 24.00 },
      { name: "Sweetbreads Provençale", description: "Pan-seared veal sweetbreads with herbed jus and roasted garlic", price: 28.00 },
      { name: "Cheese Soufflé", description: "A golden, cloud-light Gruyère soufflé", price: 22.00 },
      { name: "Roasted Chicken with Herbs", description: "Free-range chicken, roasted over thyme and rosemary", price: 26.00 },
      { name: "Linguini's Pasta", description: "Butter-tossed linguine with shallots, white wine, and fresh parsley", price: 20.00 },
    ],
  },
  {
    title: "Desserts",
    items: [
      { name: "Crème Brûlée", description: "Vanilla custard with a perfectly torched caramel crust", price: 10.00 },
      { name: "Strawberry Tart", description: "Buttery pastry shell, vanilla crème pâtissière, glazed fresh strawberries", price: 11.00 },
      { name: "Chocolate Cake", description: "Rich, dense Parisian-style chocolate gâteau", price: 9.00 },
    ],
  },
  {
    title: "Drinks",
    items: [
      { name: "Burgundy Red Wine", description: "A glass of Burgundy", price: 13.00 },
      { name: "Baguette & Butter", description: "A fresh-baked Parisian baguette with cultured butter", price: 5.00 },
      { name: "Café au Lait", description: "Strong French press coffee with steamed whole milk", price: 6.00 },
    ],
  },
];
