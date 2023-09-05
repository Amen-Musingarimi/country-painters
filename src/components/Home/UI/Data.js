import interiorPainting from '../../../assets/interior-painting.jpg';
import exteriorPainting from '../../../assets/exterior.jpg';
import commercialPainting from '../../../assets/commercial-painting.jpg';
import floorTiling from '../../../assets/floorTilling.jpg';
import wallTiling from '../../../assets/wallTiling.jpg';
import bathroomTiling from '../../../assets/bathroomTiling.jpg';
import windowGlazing from '../../../assets/windowGlazzing.webp';
import glassdoorGlazzing from '../../../assets/glassdoorGlazzing.jpg';
import bathroomMirror from '../../../assets/bathroomGlass.jpg';

export const HomeCardsDataArr = [
  {
    id: 1,
    description: 'PROVING INTERIOR AND EXTERIOR',
    service: 'Painting Services',
    route_path: '/about',
    button: 'MORE ABOUT US',
  },
  {
    id: 2,
    description: 'ELEVATE YOUR SPACES WITH',
    service: 'Precision Tilling',
    route_path: '/services',
    button: 'VIEW MORE SERVICES',
  },
  {
    id: 3,
    description: 'ENHANCE YOUR SPACE WITH',
    service: 'Stunning Glazing',
    route_path: '/contact-us',
    button: 'GET IN TOUCH',
  },
];

export const servicesData = {
  painting: [
    {
      name: 'Interior Painting',
      description: 'Transform your indoor spaces with a fresh coat of paint.',
      image: interiorPainting,
      overview:
        'Our interior painting service adds color and vibrancy to your home. We work with you to select the perfect shades and create the atmosphere you desire.',
    },
    {
      name: 'Exterior Painting',
      description:
        "Protect and beautify your home's exterior with our painting expertise.",
      image: exteriorPainting,
      overview:
        "Enhance your home's curb appeal and protect it from the elements with our high-quality exterior painting services.",
    },
    {
      name: 'Commercial Painting',
      description:
        'Make a lasting impression with our professional painting solutions for commercial spaces.',
      image: commercialPainting,
      overview:
        'We specialize in creating inviting and impactful commercial environments through our tailored painting services.',
    },
  ],

  tiling: [
    {
      name: 'Floor Tiling',
      description: 'Upgrade your floors with our precision tiling solutions.',
      image: floorTiling,
      overview:
        'Our floor tiling services offer a wide range of styles and patterns to suit your taste, ensuring durability and elegance in every step.',
    },
    {
      name: 'Wall Tiling',
      description: 'Elevate your walls with beautifully tiled surfaces.',
      image: wallTiling,
      overview:
        'Create eye-catching accent walls or entire tiled rooms with our wall tiling services, adding a touch of sophistication to your space.',
    },
    {
      name: 'Bathroom Tiling',
      description:
        'Revamp your bathroom with our specialized tiling solutions.',
      image: bathroomTiling,
      overview:
        "Upgrade your bathroom's aesthetics and functionality with our expert tiling services, from showers to countertops.",
    },
  ],

  glazing: [
    {
      name: 'Window Glazing',
      description: 'Enhance your windows with our elegant glazing solutions.',
      image: windowGlazing,
      overview:
        'Our window glazing services improve energy efficiency, security, and aesthetics, making your home brighter and more inviting.',
    },
    {
      name: 'Glass Door Glazing',
      description:
        'Add style and functionality to your glass doors with our glazing options.',
      image: glassdoorGlazzing,
      overview:
        'Upgrade your glass doors with our glazing solutions, combining security features with contemporary designs.',
    },
    {
      name: 'Mirror Glazing',
      description:
        'Create stunning mirror installations with our glazing expertise.',
      image: bathroomMirror,
      overview:
        'Our mirror glazing services add elegance and depth to your spaces, from full-wall mirrors to custom designs.',
    },
  ],
};

export const ReasonsDataArr = [
  {
    id: 1,
    name: 'Exceptional Craftsmanship',
    description:
      "Our team of skilled artisans brings years of experience and meticulous attention to detail to every project. Whether it's painting, tiling, or glazing, we ensure that the final result reflects the highest standards of quality and aesthetics.",
  },
  {
    id: 2,
    name: 'Reliable Timelines',
    description:
      'We understand the importance of reliable timelines. When you choose our services, you can trust that your project will be completed on schedule. Our commitment to punctuality and efficient project management means you can enjoy your newly transformed spaces without unnecessary delays',
  },
  {
    id: 3,
    name: 'Personalized Solutions',
    description:
      'Your unique vision is at the heart of everything we do. We offer personalized solutions tailored to your specific needs and preferences. From selecting the perfect paint colors to choosing the right tiles or glazing options, we collaborate closely with you to turn your ideas into reality',
  },
];
