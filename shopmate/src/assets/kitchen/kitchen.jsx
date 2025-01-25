import bakingUtensils from './baking utensils.jpeg';
import blender from './blender.jpeg';
import bowl from './bowl.jpeg';
import choppingBoardSet from './chopping board set.jpeg';
import clayPots from './clay pots.jpeg';
import cooker from './cooker.jpeg';
import forks from './forks.jpeg';
import framePan from './frame pan.jpeg';
import garlicCrusher from './garlic crusher.jpeg';
import glass from './glass.jpeg';
import knife from './knife.jpeg';
import mixie from './mixie.jpeg';
import oven from './oven.jpeg';
import plates from './plates.jpeg';
import rollingPin from './rolling pin.jpeg';
import saucePan from './sauce pan.jpeg';
import spoonAndLadles from './spoon and laddles.jpeg'; // Original spelling retained
import stainlessSteel from './stainless steel.jpeg'; // Original spelling retained
import stove from './stove.jpeg';
import teaPot from './tea pot.webp';


const kitchenProducts = [
    {
        id: 1,
        title: "Baking Utensils",
        img: bakingUtensils,
        price: 350, // Updated price in ₹
        discount: "10%",
        info: "Essential baking utensils for all your baking needs!",
        inCart: false,
        rating: 4.5,
        new_price: 315,
    },
    {
        id: 2,
        title: "Blender",
        img: blender,
        price: 2200, // Updated price in ₹
        discount: "15%",
        info: "Powerful blender for smoothies, soups, and sauces!",
        inCart: false,
        rating: 4.8,
        new_price: 1870,
    },
    {
        id: 3,
        title: "Bowl",
        img: bowl,
        price: 150, // Updated price in ₹
        discount: "5%",
        info: "Versatile bowls for mixing and serving!",
        inCart: false,
        rating: 4.6,
        new_price: 142.50,
    },
    {
        id: 4,
        title: "Chopping Board Set",
        img: choppingBoardSet,
        price: 250, // Updated price in ₹
        discount: "10%",
        info: "Durable chopping boards for all your food prep needs.",
        inCart: false,
        rating: 4.7,
        new_price: 225,
    },
    {
        id: 5,
        title: "Clay Pots",
        img: clayPots,
        price: 400, // Updated price in ₹
        discount: "0%",
        info: "Traditional clay pots for authentic cooking!",
        inCart: false,
        rating: 4.5,
        new_price: 400,
    },
    {
        id: 6,
        title: "Cooker",
        img: cooker,
        price: 3000, // Updated price in ₹
        discount: "10%",
        info: "Efficient cooker for quick and healthy meals!",
        inCart: false,
        rating: 4.9,
        new_price: 2700,
    },
    {
        id: 7,
        title: "Forks",
        img: forks,
        price: 100, // Updated price in ₹
        discount: "5%",
        info: "Sturdy forks for everyday dining!",
        inCart: false,
        rating: 4.4,
        new_price: 95,
    },
    {
        id: 8,
        title: "Frame Pan",
        img: framePan,
        price: 800, // Updated price in ₹
        discount: "10%",
        info: "Perfect frame pan for baking cakes and pastries!",
        inCart: false,
        rating: 4.6,
        new_price: 720,
    },
    {
        id: 9,
        title: "Garlic Crusher",
        img: garlicCrusher,
        price: 200, // Updated price in ₹
        discount: "5%",
        info: "Make garlic prep a breeze with our garlic crusher!",
        inCart: false,
        rating: 4.5,
        new_price: 190,
    },
    {
        id: 10,
        title: "Glass",
        img: glass,
        price: 80, // Updated price in ₹
        discount: "0%",
        info: "Elegant glasses for all your beverages!",
        inCart: false,
        rating: 4.7,
        new_price: 80,
    },
    {
        id: 11,
        title: "Knife",
        img: knife,
        price: 350, // Updated price in ₹
        discount: "10%",
        info: "High-quality knife for precision cutting!",
        inCart: false,
        rating: 4.6,
        new_price: 315,
    },
    {
        id: 12,
        title: "Mixie",
        img: mixie,
        price: 1800, // Updated price in ₹
        discount: "15%",
        info: "Multi-purpose mixie for blending and grinding!",
        inCart: false,
        rating: 4.8,
        new_price: 1530,
    },
    {
        id: 13,
        title: "Oven",
        img: oven,
        price: 7000, // Updated price in ₹
        discount: "10%",
        info: "Versatile oven for baking and roasting!",
        inCart: false,
        rating: 4.9,
        new_price: 6300,
    },
    {
        id: 14,
        title: "Plates",
        img: plates,
        price: 120, // Updated price in ₹
        discount: "0%",
        info: "Stylish plates for your dining table!",
        inCart: false,
        rating: 4.6,
        new_price: 120,
    },
    {
        id: 15,
        title: "Rolling Pin",
        img: rollingPin,
        price: 150, // Updated price in ₹
        discount: "5%",
        info: "Essential rolling pin for baking dough!",
        inCart: false,
        rating: 4.4,
        new_price: 142.50,
    },
    {
        id: 16,
        title: "Sauce Pan",
        img: saucePan,
        price: 500, // Updated price in ₹
        discount: "10%",
        info: "Perfect sauce pan for cooking sauces and soups!",
        inCart: false,
        rating: 4.7,
        new_price: 450,
    },
    {
        id: 17,
        title: "Spoon and Ladles",
        img: spoonAndLadles,
        price: 300, // Updated price in ₹
        discount: "5%",
        info: "Sturdy spoons and ladles for serving soups and stews!",
        inCart: false,
        rating: 4.5,
        new_price: 285,
    },
    {
        id: 18,
        title: "Stainless Steel Utensils",
        img: stainlessSteel,
        price: 700, // Updated price in ₹
        discount: "5%",
        info: "High-quality stainless steel kitchenware!",
        inCart: false,
        rating: 4.5,
        new_price: 665,
    },
    {
        id: 19,
        title: "Stove",
        img: stove,
        price: 5000, // Updated price in ₹
        discount: "10%",
        info: "Efficient stove for all your cooking needs!",
        inCart: false,
        rating: 4.8,
        new_price: 4500,
    },
    {
        id: 20,
        title: "Tea Pot",
        img: teaPot,
        price: 600, // Updated price in ₹
        discount: "0%",
        info: "Elegant tea pot for brewing your favorite teas!",
        inCart: false,
        rating: 4.6,
        new_price: 600,
    },
]
export default kitchenProducts;