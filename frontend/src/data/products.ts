export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  image: string;
  rating: number;
  reviewCount: number;
  discount: number;
  benefit: string;
  isBestSeller?: boolean;
  isFeatured?: boolean;
  description: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Smart LED Desk Lamp',
    category: 'Lighting',
    price: 39.99,
    originalPrice: 59.99,
    image: '/assets/generated/product-lamp.dim_600x600.png',
    rating: 4.8,
    reviewCount: 234,
    discount: 33,
    benefit: 'Reduces eye strain with adaptive brightness',
    isBestSeller: true,
    isFeatured: true,
    description: 'A smart LED desk lamp with adjustable color temperature and brightness. Perfect for work, study, or relaxation.',
    features: ['Adjustable color temperature', 'Touch controls', 'USB charging port', 'Memory function'],
  },
  {
    id: '2',
    name: 'Premium Travel Mug',
    category: 'Kitchen',
    price: 29.99,
    originalPrice: 44.99,
    image: '/assets/generated/product-travel-mug.dim_600x600.png',
    rating: 4.9,
    reviewCount: 412,
    discount: 33,
    benefit: 'Keeps drinks hot for 12 hours',
    isBestSeller: true,
    isFeatured: true,
    description: 'Double-wall vacuum insulated travel mug that keeps your beverages at the perfect temperature all day.',
    features: ['12-hour heat retention', 'Leak-proof lid', 'BPA-free', 'Dishwasher safe'],
  },
  {
    id: '3',
    name: 'Wireless Earbuds Pro',
    category: 'Audio',
    price: 79.99,
    originalPrice: 119.99,
    image: '/assets/generated/product-earbuds.dim_600x600.png',
    rating: 4.7,
    reviewCount: 567,
    discount: 33,
    benefit: 'Crystal clear sound with noise cancellation',
    isBestSeller: true,
    isFeatured: true,
    description: 'Premium wireless earbuds with active noise cancellation and 30-hour battery life.',
    features: ['Active noise cancellation', '30-hour battery', 'IPX5 waterproof', 'Touch controls'],
  },
  {
    id: '4',
    name: 'Fast Wireless Charger',
    category: 'Electronics',
    price: 24.99,
    originalPrice: 39.99,
    image: '/assets/generated/product-charger.dim_600x600.png',
    rating: 4.6,
    reviewCount: 189,
    discount: 38,
    benefit: 'Charges 3x faster than standard chargers',
    isBestSeller: true,
    isFeatured: true,
    description: 'Ultra-fast 15W wireless charger compatible with all Qi-enabled devices.',
    features: ['15W fast charging', 'Universal Qi compatibility', 'LED indicator', 'Anti-slip base'],
  },
  {
    id: '5',
    name: 'LED Strip Lights',
    category: 'Lighting',
    price: 19.99,
    originalPrice: 34.99,
    image: '/assets/generated/product-led-strip.dim_600x600.png',
    rating: 4.5,
    reviewCount: 321,
    discount: 43,
    benefit: 'Transform any room with 16M colors',
    isFeatured: false,
    description: 'Smart LED strip lights with app control and music sync for the perfect ambiance.',
    features: ['16 million colors', 'App controlled', 'Music sync', 'Easy installation'],
  },
  {
    id: '6',
    name: 'Cable Organizer Kit',
    category: 'Organization',
    price: 14.99,
    originalPrice: 24.99,
    image: '/assets/generated/product-cable-organizer.dim_600x600.png',
    rating: 4.4,
    reviewCount: 156,
    discount: 40,
    benefit: 'Keep your desk clutter-free instantly',
    isFeatured: false,
    description: 'Complete cable management solution for a clean and organized workspace.',
    features: ['20-piece set', 'Reusable velcro ties', 'Cable clips', 'Adhesive backing'],
  },
  {
    id: '7',
    name: 'Minimalist Wallet',
    category: 'Accessories',
    price: 34.99,
    originalPrice: 54.99,
    image: '/assets/generated/product-wallet.dim_600x600.png',
    rating: 4.8,
    reviewCount: 278,
    discount: 36,
    benefit: 'Slim design holds 12 cards securely',
    isFeatured: false,
    description: 'Ultra-slim RFID-blocking wallet crafted from premium vegan leather.',
    features: ['RFID blocking', 'Holds 12 cards', 'Vegan leather', 'Slim 6mm profile'],
  },
  {
    id: '8',
    name: 'Hydration Bottle',
    category: 'Fitness',
    price: 22.99,
    originalPrice: 34.99,
    image: '/assets/generated/product-bottle.dim_600x600.png',
    rating: 4.7,
    reviewCount: 445,
    discount: 34,
    benefit: 'Stay hydrated with time markers',
    isFeatured: false,
    description: 'BPA-free motivational water bottle with time markers to track daily hydration.',
    features: ['Time markers', 'BPA-free Tritan', '32oz capacity', 'Leak-proof lid'],
  },
];

export const featuredProducts = products.filter(p => p.isFeatured);
export const bestSellers = products.filter(p => p.isBestSeller);
