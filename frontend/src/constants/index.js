import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { perfume1, perfume2, perfume3, perfume4, perfume5, perfume6, perfume7, perfume8,perfume9, perfume10, perfume11, style1, style2, style3, exhibition, exhibition1, customer1, customer2 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const perfumes = [
    {
        thumbnail: perfume1,
        bigPerfume: perfume1,
    },
    {
        thumbnail: perfume2,
        bigPerfume: perfume2,
    },
    {
        thumbnail: perfume3,
        bigPerfume: perfume3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: perfume1,
        name: "Nike Air Jordan-01",
        price: "$200.20",
    },
    {
        imgURL: perfume2,
        name: "Nike Air Jordan-02",
        price: "$200.20",
    },
    {
        imgURL: perfume3,
        name: "Nike Air Jordan-03",
        price: "$200.20",
    },
    {
        imgURL: perfume4,
        name: "Nike Air Jordan-04",
        price: "$200.20",
    },
    {
        imgURL: perfume5,
        name: "Nike Air Jordan-10",
        price: "$210.20",
    },
    {
        imgURL: perfume6,
        name: "Nike Air Jordan-100",
        price: "$220.20",
    },
    {
        imgURL: perfume7,
        name: "Nike Air Jordan-001",
        price: "$230.20",
    },
    {
        imgURL: perfume8,
        name: "Nike Air Jordan-011",
        price: "$230.20",
    },
    {
        imgURL: perfume9,
        name: "Nike Air Jordan-21",
        price: "$200.20",
    },
    {
        imgURL: perfume10,
        name: "Nike Air Jordan-22",
        price: "$200.20",
    },
    {
        imgURL: perfume11,
        name: "Nike Air Jordan-23",
        price: "$200.20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        // imgURL: customer1,
        customerName: 'Ayesha Desai',
        // rating: 4.5,
        feedback: "Kakshie White Oude perfume is a symphony of floral notes, wrapping me in an ethereal embrace. It's like carrying a garden with me, and the longevity is impressive"
    },
    {
        // imgURL: customer2,
        customerName: 'Aditya Joshi',
        // rating: 4.5,
        feedback: "I've found my signature scent! The blend of fruity and woody undertones of Kakshie Chandan is captivating. Lasts all day without being overpowering. Pure perfection in a bottle!"
    },
    {
        // imgURL: customer2,
        customerName: 'Kavya Reddy',
        // rating: 4.5,
        feedback: "Unexpectedly fell in love with this fragrance. It's subtle yet unforgettable. Each note unfolds like a story, and the dry-down is warm and comforting. Highly recommend!"
    },
    {
        // imgURL: customer2,
        customerName: 'Arjun Singhania',
        // rating: 4.5,
        feedback: "A fragrance that's as mysterious as it is alluring. The complexity of notes keeps me intrigued, and the bottle design is a work of art. Worth every penny."
    },
    {
        // imgURL: customer2,
        customerName: 'Nandita Patel',
        // rating: 4.5,
        feedback: "This perfume is my secret weapon for confidence. The citrusy top notes are invigorating, and the base notes are sensual. It's a mood in a bottle—absolutely divine!"
    },
    {
        // imgURL: customer2,
        customerName: 'Diya',
        // rating: 4.5,
        feedback: "I've never received so many compliments! The scent evolves beautifully, and it's versatile for any occasion. A little goes a long way, making it a great investment"
    },
    {
        // imgURL: customer2,
        customerName: 'Aarav',
        // rating: 4.5,
        feedback: "The fragrance is like a breath of fresh air. It's light, airy, and effortlessly elegant. I feel rejuvenated every time I wear it. A daily essential in my beauty routine!"
    },
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "White oude", link: "/" },
            { name: "JB", link: "/" },
            { name: "Vibes", link: "/" },
            { name: "Blue Water", link: "/" },
            { name: "Brute Musk", link: "/" },
            { name: "Chandan", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "kakshie.perfume@gmail.com", link: "mailto:kakshie.perfume@gmail.com" },
            { name: "+918482977257", link: "tel:+918482977257" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];