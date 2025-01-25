import blush from './blush.jpeg';
import colourCorrector from './colour corrector.jpeg';
import concealer from './conceiler.jpeg';
import eyelashExtension from './eye lash extension.jpg';
import eyeShadow from './eye shadow.jpeg';
import eyebrowPencil from './eyebrow pencil.jpeg';
import eyeliner from './eyeliner.jpeg';
import faceWash from './face wash.jpeg';
import foundation from './foundation.jpeg';
import highlighter from './highlighter.jpeg';
import lipBalm from './lip balm.jpeg';
import lipGloss from './lip gloss.jpeg';
import lipLiner from './lip liner.jpeg';
import lipstick from './lipstick.jpeg';
import mascara from './mascara.jpeg';
import moisturizer from './moisturizer.jpeg';
import primer from './primer.jpeg';
import serum from './serum.jpeg';
import sunscreen from './sunscree.jpeg';
import toner from './toner.jpeg';

// Array of cosmetic items
const cosmetics = [
    {
        id: 1,
        title: "Blush",
        img: blush,
        price: 500, // Price in ₹
        discount: "10%",
        info: "Add a pop of color to your cheeks with our vibrant blush!",
        inCart: false,
        rating: 4.5,
        new_price: 450,
    },
    {
        id: 2,
        title: "Colour Corrector",
        img: colourCorrector,
        price: 600, // Price in ₹
        discount: "15%",
        info: "Perfect your complexion with our effective colour corrector.",
        inCart: false,
        rating: 4.7,
        new_price: 510,
    },
    {
        id: 3,
        title: "Concealer",
        img: concealer,
        price: 700, // Price in ₹
        discount: "10%",
        info: "Hide blemishes and dark circles with our creamy concealer.",
        inCart: false,
        rating: 4.6,
        new_price: 630,
    },
    {
        id: 4,
        title: "Eyelash Extension",
        img: eyelashExtension,
        price: 1200, // Price in ₹
        discount: "5%",
        info: "Get luscious lashes with our easy-to-apply extensions.",
        inCart: false,
        rating: 4.8,
        new_price: 1140,
    },
    {
        id: 5,
        title: "Eye Shadow",
        img: eyeShadow,
        price: 800, // Price in ₹
        discount: "10%",
        info: "Create stunning eye looks with our vibrant eye shadow palette.",
        inCart: false,
        rating: 4.5,
        new_price: 720,
    },
    {
        id: 6,
        title: "Eyebrow Pencil",
        img: eyebrowPencil,
        price: 400, // Price in ₹
        discount: "5%",
        info: "Define your brows with our easy-to-use eyebrow pencil.",
        inCart: false,
        rating: 4.4,
        new_price: 380,
    },
    {
        id: 7,
        title: "Eyeliner",
        img: eyeliner,
        price: 300, // Price in ₹
        discount: "0%",
        info: "Achieve the perfect wing with our long-lasting eyeliner.",
        inCart: false,
        rating: 4.6,
        new_price: 300,
    },
    {
        id: 8,
        title: "Face Wash",
        img: faceWash,
        price: 250, // Price in ₹
        discount: "10%",
        info: "Cleanse your skin with our refreshing face wash.",
        inCart: false,
        rating: 4.5,
        new_price: 225,
    },
    {
        id: 9,
        title: "Foundation",
        img: foundation,
        price: 1200, // Price in ₹
        discount: "15%",
        info: "Get flawless coverage with our lightweight foundation.",
        inCart: false,
        rating: 4.7,
        new_price: 1020,
    },
    {
        id: 10,
        title: "Highlighter",
        img: highlighter,
        price: 600, // Price in ₹
        discount: "10%",
        info: "Illuminate your features with our radiant highlighter.",
        inCart: false,
        rating: 4.8,
        new_price: 540,
    },
    {
        id: 11,
        title: "Lip Balm",
        img: lipBalm,
        price: 150, // Price in ₹
        discount: "0%",
        info: "Keep your lips moisturized with our nourishing lip balm.",
        inCart: false,
        rating: 4.6,
        new_price: 150,
    },
    {
        id: 12,
        title: "Lip Gloss",
        img: lipGloss,
        price: 500, // Price in ₹
        discount: "5%",
        info: "Add shine to your lips with our glossy lip gloss.",
        inCart: false,
        rating: 4.4,
        new_price: 475,
    },
    {
        id: 13,
        title: "Lip Liner",
        img: lipLiner,
        price: 350, // Price in ₹
        discount: "10%",
        info: "Define your lips with our smooth lip liner.",
        inCart: false,
        rating: 4.5,
        new_price: 315,
    },
    {
        id: 14,
        title: "Lipstick",
        img: lipstick,
        price: 800, // Price in ₹
        discount: "15%",
        info: "Get bold, beautiful lips with our creamy lipstick.",
        inCart: false,
        rating: 4.8,
        new_price: 680,
    },
    {
        id: 15,
        title: "Mascara",
        img: mascara,
        price: 600, // Price in ₹
        discount: "10%",
        info: "Lengthen and volumize your lashes with our mascara.",
        inCart: false,
        rating: 4.7,
        new_price: 540,
    },
    {
        id: 16,
        title: "Moisturizer",
        img: moisturizer,
        price: 900, // Price in ₹
        discount: "5%",
        info: "Keep your skin hydrated with our lightweight moisturizer.",
        inCart: false,
        rating: 4.6,
        new_price: 855,
    },
    {
        id: 17,
        title: "Primer",
        img: primer,
        price: 700, // Price in ₹
        discount: "10%",
        info: "Create a smooth base for makeup with our primer.",
        inCart: false,
        rating: 4.5,
        new_price: 630,
    },
    {
        id: 18,
        title: "Serum",
        img: serum,
        price: 1500, // Price in ₹
        discount: "15%",
        info: "Nourish your skin with our rejuvenating serum.",
        inCart: false,
        rating: 4.8,
        new_price: 1275,
    },
    {
        id: 19,
        title: "Sunscreen",
        img: sunscreen,
        price: 600, // Price in ₹
        discount: "10%",
        info: "Protect your skin from UV rays with our effective sunscreen.",
        inCart: false,
        rating: 4.7,
        new_price: 540,
    },
    {
        id: 20,
        title: "Toner",
        img: toner,
        price: 400, // Price in ₹
        discount: "5%",
        info: "Refresh and balance your skin with our toner.",
        inCart: false,
        rating: 4.5,
        new_price: 380,
    },
];