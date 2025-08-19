import { MenuItem } from '../types/menu';

export const menuItems: MenuItem[] = [
  // Main Course
  {
    id: 'prime-truffle-ribeye',
    name: 'Prime Truffle Ribeye',
    description: 'Succulent ribeye steak infused with aromatic truffle essence, served with seasonal vegetables',
    price: 65,
    image: 'https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'Main Course',
    dietary: ['Gluten-Free Available'],
    ingredients: ['Prime Ribeye', 'Truffle Oil', 'Seasonal Vegetables', 'Herb Butter'],
    preparationMethod: 'Grilled to perfection with truffle infusion'
  },
  {
    id: 'crispy-pork-tenderloin',
    name: 'Crispy Pork Tenderloin',
    description: 'Perfectly seared pork tenderloin with golden crackling and herb-infused jus',
    price: 42,
    image: 'https://images.pexels.com/photos/323682/pexels-photo-323682.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'Main Course',
    dietary: [],
    ingredients: ['Pork Tenderloin', 'Herb Crust', 'Natural Jus', 'Root Vegetables'],
    preparationMethod: 'Slow-roasted with crispy skin technique'
  },
  {
    id: 'steak-grilled-cauliflower',
    name: 'Steak & Grilled Cauliflower',
    description: 'Tender, perfectly seasoned steak paired with smoky grilled cauliflower florets',
    price: 58,
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'Main Course',
    dietary: ['Gluten-Free'],
    ingredients: ['Premium Steak', 'Cauliflower', 'Garlic', 'Fresh Herbs', 'Olive Oil'],
    preparationMethod: 'Grilled over open flame with herb seasoning'
  },
  {
    id: 'butter-chicken',
    name: 'Butter Chicken',
    description: 'Traditional butter chicken with rich, creamy tomato sauce and aromatic spices',
    price: 24,
    image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'Main Course',
    dietary: ['Gluten-Free Available'],
    ingredients: ['Chicken Breast', 'Tomato Sauce', 'Heavy Cream', 'Garam Masala', 'Fresh Herbs'],
    preparationMethod: 'Slow-simmered with traditional Indian spices'
  },
  {
    id: 'hamburger',
    name: 'Gourmet Hamburger',
    description: 'Hand-formed beef patty with aged cheddar, crisp lettuce, and signature sauce',
    price: 18,
    image: 'https://images.pexels.com/photos/1556909/pexels-photo-1556909.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'Main Course',
    dietary: [],
    ingredients: ['Ground Beef', 'Aged Cheddar', 'Brioche Bun', 'Fresh Vegetables', 'House Sauce'],
    preparationMethod: 'Grilled to order with premium ingredients'
  },
  {
    id: 'chicken-alfredo',
    name: 'Chicken Alfredo',
    description: 'Grilled chicken breast over fresh fettuccine in rich, creamy Alfredo sauce',
    price: 22,
    image: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'Main Course',
    dietary: [],
    ingredients: ['Chicken Breast', 'Fettuccine Pasta', 'Parmesan Cheese', 'Heavy Cream', 'Fresh Herbs'],
    preparationMethod: 'Fresh pasta with house-made Alfredo sauce'
  },
  {
    id: 'burrito-bowls',
    name: 'Burrito Bowls',
    description: 'Customizable bowl with cilantro-lime rice, black beans, and fresh toppings',
    price: 16,
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'Main Course',
    dietary: ['Vegetarian Available', 'Gluten-Free'],
    ingredients: ['Cilantro-Lime Rice', 'Black Beans', 'Fresh Vegetables', 'Guacamole', 'Salsa'],
    preparationMethod: 'Fresh ingredients assembled to order'
  },
  
  // Desserts
  {
    id: 'snickerdoodle-cookies',
    name: 'Snickerdoodle Cookies',
    description: 'Soft, chewy cookies rolled in cinnamon sugar with tender centers',
    price: 8,
    image: 'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'Dessert',
    dietary: ['Vegetarian'],
    ingredients: ['Butter', 'Cinnamon', 'Sugar', 'Vanilla', 'Fresh Eggs'],
    preparationMethod: 'Baked fresh daily with traditional techniques'
  },
  {
    id: 'oatmeal-cookie',
    name: 'Oatmeal Cookie',
    description: 'Hearty oatmeal cookies with perfect chewy texture and brown sugar',
    price: 7,
    image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'Dessert',
    dietary: ['Vegetarian'],
    ingredients: ['Rolled Oats', 'Brown Sugar', 'Butter', 'Vanilla', 'Cinnamon'],
    preparationMethod: 'Traditional recipe with premium oats'
  },
  {
    id: 'chocolate-chip-cookie',
    name: 'Chocolate Chip Cookie',
    description: 'Classic chocolate chip cookies with premium dark chocolate chips',
    price: 7,
    image: 'https://images.pexels.com/photos/890577/pexels-photo-890577.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'Dessert',
    dietary: ['Vegetarian'],
    ingredients: ['Dark Chocolate Chips', 'Butter', 'Brown Sugar', 'Madagascar Vanilla', 'Sea Salt'],
    preparationMethod: 'Baked to golden perfection with premium chocolate'
  },
  {
    id: 'brownies',
    name: 'Fudge Brownies',
    description: 'Rich, dense chocolate brownies with intense chocolate flavor',
    price: 9,
    image: 'https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'Dessert',
    dietary: ['Vegetarian'],
    ingredients: ['Belgian Cocoa', 'Dark Chocolate', 'Butter', 'Fresh Eggs', 'Vanilla'],
    preparationMethod: 'Slow-baked for ultimate fudgy texture'
  },
  
  // Beverages
  {
    id: 'iced-tea',
    name: 'Fresh Iced Tea',
    description: 'Refreshing iced tea brewed from premium tea leaves with fresh lemon',
    price: 4,
    image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'Beverage',
    dietary: ['Vegan', 'Gluten-Free'],
    ingredients: ['Premium Tea Leaves', 'Fresh Lemon', 'Ice', 'Optional Sweetener'],
    preparationMethod: 'Brewed fresh daily and chilled to perfection'
  },
  {
    id: 'frappuccino',
    name: 'Signature Frappuccino',
    description: 'Blended coffee drink with espresso, milk, and whipped cream',
    price: 6,
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'Beverage',
    dietary: ['Vegetarian'],
    ingredients: ['Espresso', 'Milk', 'Ice', 'Whipped Cream', 'Flavor Syrups'],
    preparationMethod: 'Blended fresh with premium espresso'
  },
  {
    id: 'sparkling-water',
    name: 'Sparkling Water',
    description: 'Crisp, refreshing sparkling water with fresh fruit garnish',
    price: 3,
    image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'Beverage',
    dietary: ['Vegan', 'Gluten-Free'],
    ingredients: ['Sparkling Water', 'Fresh Fruit Garnish', 'Ice'],
    preparationMethod: 'Served ice-cold with fresh garnishes'
  },
  {
    id: 'lemonade',
    name: 'Fresh Lemonade',
    description: 'House-made lemonade with fresh-squeezed lemons and pure cane sugar',
    price: 5,
    image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'Beverage',
    dietary: ['Vegan', 'Gluten-Free'],
    ingredients: ['Fresh Lemons', 'Pure Cane Sugar', 'Filtered Water', 'Fresh Mint'],
    preparationMethod: 'Made fresh daily with hand-squeezed lemons'
  },
  {
    id: 'dark-coffee',
    name: 'Dark Roast Coffee',
    description: 'Rich, full-bodied dark roast coffee with notes of chocolate and caramel',
    price: 4,
    image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'Beverage',
    dietary: ['Vegan', 'Gluten-Free'],
    ingredients: ['Premium Coffee Beans', 'Filtered Water'],
    preparationMethod: 'Freshly brewed with precision timing and temperature'
  }
];