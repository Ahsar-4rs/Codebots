import bean from "./beans.jpg"
import avocado from './avacado.jpg';
import apple from './apple.jpg';
import onion from './onion.jpg';
import banana from './banana.jpg';
import spinach from './spinach.jpg';
import cabbage from './cabbage.jpg';
import cauliflower from './cauliflower.jpg';
import kiwi from './kiwi.jpg';
import ladyfinger from './ladyfinger.jpg';
import lemon from './lemon.jpg';
import mushroom from './mushroom.jpg';
import carrot from './carrot.jpg';
import capsicum from './capsicum.jpg';
import papaya from './papaya.jpg';
import parsley from './parsley.jpg';
import grapes from './grapes.jpg';
import garlic from './garlic.jpg';
import chilli from './chilli.jpg';
import beetroot from './beetroot.jpg';
import potato from './potato.jpg';
import pumpkin from './pumpkin.jpg';
import strawberry from './strawberries.jpg';
import tomato from './tomato.jpg'

export const groceries=[
  {
  id: 1,
  title: "Beans",
  img: bean,
  price: 80, // Supermarket price in ₹
  discount: "10%",
  info: "Fresh, crunchy beans perfect for salads or stir-fries! Packed with nutrients and flavor.",
  inCart: false,
  rating: 4.5,
  new_price: 72,
  unit: "per Kg",
},
{
  id: 2,
  title: "Tomato",
  img: tomato,
  price: 60, // Supermarket price in ₹
  discount: "15%",
  info: "Fresh, Juicy Tomatoes - Nature's Flavor Bomb!",
  inCart: false,
  rating: 4.8,
  new_price: 51,
  unit: "per Kg",
},
{
  id: 3,
  title: "Avocado",
  img: avocado,
  price: 200, // Supermarket price in ₹
  discount: "5%",
  info: "Creamy and nutritious avocados, perfect for toast, salads, or guacamole!",
  inCart: false,
  rating: 4.7,
  new_price: 190,
  unit: "per Kg",
},
{
  id: 4,
  title: "Apple",
  img: apple,
  price: 150, // Supermarket price in ₹
  discount: "10%",
  info: "Crisp and sweet apples, perfect for snacking or baking. A classic favorite!",
  inCart: false,
  rating: 4.6,
  new_price: 135,
  unit: "per Kg",
},
{
  id: 5,
  title: "Onion",
  img: onion,
  price: 30, // Supermarket price in ₹
  discount: "5%",
  info: "Versatile onions add depth and flavor to any dish. A kitchen staple!",
  inCart: false,
  rating: 4.3,
  new_price: 29,
  unit: "per Kg",
},
{
  id: 6,
  title: "Banana",
  img: banana,
  price: 40, // Supermarket price in ₹
  unit: "per Kg",
  discount: "0%",
  info: "Sweet and soft bananas, perfect for snacking or smoothies!",
  inCart: false,
  rating: 4.9,
  new_price: 40,
},
{
  id: 7,
  title: "Spinach",
  img: spinach,
  price: 50, // Supermarket price in ₹
  discount: "10%",
  info: "Fresh spinach leaves packed with vitamins. Great for salads or cooking!",
  inCart: false,
  unit: "per Kg",
  rating: 4.4,
  new_price: 45,
},
{
  id: 8,
  title: "Cabbage",
  img: cabbage,
  price: 40, // Supermarket price in ₹
  discount: "5%",
  info: "Crisp and crunchy cabbage, perfect for slaws and salads!",
  inCart: false,
  unit: "per Kg",
  rating: 4.2,
  new_price: 38,
},
{
  id: 9,
  title: "Cauliflower",
  img: cauliflower,
  price: 70, // Supermarket price in ₹
  discount: "10%",
  unit: "per Kg",
  info: "Versatile cauliflower, great for roasting, mashing, or as a rice substitute!",
  inCart: false,
  rating: 4.5,
  new_price: 63,
},
{
  id: 10,
  title: "Kiwi",
  unit: "per Kg",
  img: kiwi,
  price: 250, // Supermarket price in ₹
  discount: "10%",
  info: "Sweet and tangy kiwis, a delicious addition to your fruit salads!",
  inCart: false,
  rating: 4.6,
  new_price: 225,
},
{
  id: 11,
  title: "Ladyfinger",
  img: ladyfinger,
  price: 60, // Supermarket price in ₹
  discount: "0%",
  info: "Tender ladyfingers, perfect for frying or adding to curries!",
  inCart: false,
  rating: 4.4,
  new_price: 60,
  unit: "per Kg",
},
{
  id: 12,
  title: "Lemon",
  img: lemon,
  price: 20, // Supermarket price in ₹
  discount: "10%",
  info: "Zesty lemons, perfect for adding flavor to drinks and dishes!",
  inCart: false,
  rating: 4.7,
  new_price: 18,
  unit: "per Kg",
},
{
  id: 13,
  title: "Mushroom",
  img: mushroom,
  price: 150, // Supermarket price in ₹
  discount: "5%",
  info: "Earthy mushrooms, great for stir-fries, soups, and salads!",
  inCart: false,
  rating: 4.6,
  new_price: 143,
  unit: "per Kg",
},
{
  id: 14,
  title: "Carrot",
  img: carrot,
  price: 40, // Supermarket price in ₹
  discount: "0%",
  info: "Crunchy and sweet carrots, perfect for snacking or cooking!",
  inCart: false,
  rating: 4.5,
  new_price: 40,
  unit: "per Kg",
},
{
  id: 15,
  title: "Capsicum",
  img: capsicum,
  price: 90, // Supermarket price in ₹
  discount: "10%",
  info: "Colorful capsicums add flavor and crunch to any dish!",
  inCart: false,
  rating: 4.4,
  new_price: 81,
  unit: "per Kg",
},
{
  id: 16,
  title: "Papaya",
  img: papaya,
  price: 50, // Supermarket price in ₹
  discount: "15%",
  info: "Sweet and juicy papayas, perfect for smoothies or fresh salads!",
  inCart: false,
  rating: 4.8,
  new_price: 43,
  unit: "per Kg",
},
{
  id: 17,
  title: "Parsley",
  img: parsley,
  price: 60, // Supermarket price in ₹
  discount: "5%",
  info: "Fresh parsley adds a burst of flavor and color to your dishes!",
  inCart: false,
  rating: 4.5,
  new_price: 57,
  unit: "per Kg",
},
{
  id: 18,
  title: "Grapes",
  img: grapes,
  price: 150, // Supermarket price in ₹
  discount: "10%",
  info: "Sweet, juicy grapes, perfect for snacking or adding to salads!",
  inCart: false,
  rating: 4.7,
  new_price: 135,
  unit: "per Kg",
},
{
  id: 19,
  title: "Garlic",
  img: garlic,
  price: 120, // Supermarket price in ₹
  discount: "0%",
  unit: "per Kg",
  info: "Flavorful garlic, a must-have for enhancing any dish!",
  inCart: false,
  rating: 4.8,
  new_price: 120,
},
{
  id: 20,
  title: "Chilli",
  img: chilli,
  price: 80, // Supermarket price in ₹
  discount: "5%",
  info: "Spicy chillies to add heat and flavor to your meals!",
  inCart: false,
  rating: 4.4,
  unit: "per Kg",
  new_price: 76,
},
{
  id: 21,
  title: "Beetroot",
  img: beetroot,
  price: 40, // Supermarket price in ₹
  unit: "per Kg",
  discount: "10%",
  info: "Earthy beetroot, great for salads and juices!",
  inCart: false,
  rating: 4.5,
  new_price: 36,
},
{
  id: 22,
  title: "Potato",
  img: potato,
  price: 30, // Supermarket price in ₹
  discount: "5%",
  info: "Versatile potatoes for baking, boiling, or frying!",
  inCart: false,
  rating: 4.6,
  new_price: 29,
  unit: "per Kg",
},
{
  id: 23,
  title: "Pumpkin",
  img: pumpkin,
  price: 40, // Supermarket price in ₹
  discount: "10%",
  info: "Sweet and nutritious pumpkin, perfect for soups and pies!",
  inCart: false,
  rating: 4.7,
  unit: "per Kg",
  new_price: 36,
},
]
export default groceries;