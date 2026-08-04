import iphone from "../assets/iphone15.jpg";
import macbook from "../assets/marair3.webp";

export const products = [
  {
    id: 1,

    name: "iPhone 15 Pro",

    brand: "Apple",

    category: "iphone",

    price: 999,

    oldPrice: 1099,

    discount: 9,

    rating: 5,

    reviews: 328,

    stock: 15,

    colors: ["Natural Titanium", "Blue Titanium", "Black Titanium"],

    storage: ["128GB", "256GB", "512GB"],

    image: iphone,

    images: [iphone, iphone, iphone],

    description:
      "The iPhone 15 Pro features Apple's A17 Pro chip, titanium frame, ProMotion display, Dynamic Island, USB-C, and a professional camera system.",

    specifications: {
      display: "6.1 inch Super Retina XDR OLED",

      processor: "Apple A17 Pro",

      camera: "48MP Main Camera + Ultra Wide + Telephoto",

      battery: "Up to 23 hours video playback",

      material: "Titanium Frame",
    },
  },

  {
    id: 2,

    name: "MacBook Air M3",

    brand: "Apple",

    category: "macbook",

    price: 1299,

    oldPrice: 1499,

    discount: 13,

    rating: 4.5,

    reviews: 214,

    stock: 8,

    colors: ["Midnight", "Starlight", "Space Gray"],

    storage: ["256GB SSD", "512GB SSD", "1TB SSD"],

    image: macbook,

    images: [macbook, macbook, macbook],

    description:
      "MacBook Air powered by Apple's M3 chip delivers incredible performance, long battery life, lightweight design and a stunning Liquid Retina display.",

    specifications: {
      display: "13.6 inch Liquid Retina Display",

      processor: "Apple M3 Chip",

      ram: "8GB / 16GB Unified Memory",

      storage: "256GB - 1TB SSD",

      battery: "Up to 18 hours battery life",
    },
  },

  {
    id: 3,

    name: "Apple Watch Series 9",

    brand: "Apple",

    category: "watch",

    price: 399,

    oldPrice: 449,

    discount: 11,

    rating: 4,

    reviews: 156,

    stock: 25,

    colors: ["Silver", "Midnight", "Pink"],

    storage: ["41mm", "45mm"],

    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800",

    images: [
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800",
    ],

    description:
      "Apple Watch Series 9 keeps you connected, healthy and active with advanced health tracking and fitness features.",

    specifications: {
      display: "Always-On Retina Display",

      processor: "Apple S9 SiP",

      health: "Heart Rate, ECG, Blood Oxygen",

      water: "Water resistant 50 meters",
    },
  },

  {
    id: 4,

    name: "Sony WH-1000XM5",

    brand: "Sony",

    category: "headphone",

    price: 349,

    oldPrice: 399,

    discount: 12,

    rating: 5,

    reviews: 512,

    stock: 18,

    colors: ["Black", "Silver"],

    storage: ["Standard"],

    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",

    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
    ],

    description:
      "Sony WH-1000XM5 wireless headphones provide industry-leading noise cancelling, premium sound quality and all-day comfort.",

    specifications: {
      driver: "30mm Dynamic Driver",

      battery: "Up to 30 hours",

      connection: "Bluetooth 5.2",

      feature: "Active Noise Cancellation",
    },
  },
];
