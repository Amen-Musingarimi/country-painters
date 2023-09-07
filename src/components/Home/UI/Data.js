import interiorPainting from '../../../assets/interior-painting.jpg';
import exteriorPainting from '../../../assets/exterior.jpg';
import commercialPainting from '../../../assets/commercial-painting.jpg';
import floorTiling from '../../../assets/floorTilling.jpg';
import wallTiling from '../../../assets/wallTiling.jpg';
import bathroomTiling from '../../../assets/bathroomTiling.jpg';
import windowGlazing from '../../../assets/windowGlazzing.webp';
import glassdoorGlazzing from '../../../assets/glassdoorGlazzing.jpg';
import bathroomMirror from '../../../assets/bathroomGlass.jpg';
import agree1 from '../../../assets/agreement.jpg';
import agree2 from '../../../assets/agreement2.jpg';
import { LiaToolsSolid, LiaPhoneVolumeSolid } from 'react-icons/lia';
import { FiUserCheck } from 'react-icons/fi';
import { GiPriceTag } from 'react-icons/gi';
import user1 from '../../../assets/user1.jpg';
import user2 from '../../../assets/user2.jpg';
import user3 from '../../../assets/user3.jpg';
import user4 from '../../../assets/user4.jpg';

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

export const AboutUsDataArr = [
  {
    id: 1,
    name: 'About Us',
    image: agree2,
    description:
      'At Country Painters and Glazers, our journey is painted with a commitment to excellence and an eye for detail. With a palette of experience spanning painting, tiling, and glazing, we transform spaces into vibrant canvases of beauty and functionality. Our artisans blend creativity and craftsmanship, bringing your visions to life with precision and care. We take pride in being your trusted partner in enhancing the spaces you call home. Welcome to our world, where every stroke, tile, and glass pane tells a story of quality, dependability, and artistry.',
  },
  {
    id: 2,
    name: 'Our Mission',
    image: agree1,
    description:
      "Our mission is to elevate your living spaces with a touch of artistry and a commitment to quality. We strive to provide top-notch painting, tiling, and glazing services that breathe life into your surroundings, creating spaces you'll love to call home. With creativity as our brush and craftsmanship as our foundation, we aim to exceed your expectations, one project at a time.",
  },
  {
    id: 3,
    name: 'Our Vision',
    image: agree2,
    description:
      'Our vision is to be the foremost name in the world of painting, tiling, and glazing, synonymous with innovation, excellence, and reliability. We aspire to continually expand our horizons, pushing boundaries in design and technique to create breathtaking living environments. Our goal is to be your trusted partner, turning your dreams into reality and enriching every space with beauty and functionality.',
  },
  {
    id: 4,
    name: 'Our Goal',
    image: agree1,
    description:
      'Our goal is to consistently deliver unmatched quality and service, exceeding your expectations in every project we undertake. We aim to be your go-to choice for painting, tiling, and glazing needs, fostering lasting relationships built on trust and satisfaction. Our commitment is to transform your spaces into works of art, making your vision our mission',
  },
];

export const WhyUsDataArr = [
  {
    id: 1,
    name: 'Expert Craftsmanship',
    icon: <LiaToolsSolid />,
    description:
      'We have dedicated years to perfecting our skills and expanding our horizons. Our commitment to excellence drives us to stay at the forefront of our industry, utilizing cutting-edge technology and enhancing the expertise of our artisans. With every project, we aim to deliver superior results that showcase our passion for the craft.',
  },
  {
    id: 2,
    name: 'Always at Your Service',
    icon: <LiaPhoneVolumeSolid />,
    description:
      "We understand that home projects and emergencies can arise at any time. That's why we're always available, 24/7, ready to address your needs. Our dedicated emergency response team is just a phone call away, ensuring that your concerns are resolved promptly and efficiently.",
  },
  {
    id: 3,
    name: 'Highly Skilled Team',
    icon: <FiUserCheck />,
    description:
      'Our team comprises highly qualified, educated, and skilled experts who are continuously trained in line with the latest technologies. With a commitment to staying up-to-date and maintaining the highest standards, our agents bring their expertise to every project, ensuring exceptional results.',
  },
  {
    id: 4,
    name: 'Affordable Excellence',
    icon: <GiPriceTag />,
    description:
      'We believe that quality should be affordable for all. Our pricing is not only fair but also designed to accommodate various budgets. Additionally, we offer a flexible discount system, making our services accessible to everyone. Experience top-notch craftsmanship without breaking the bank.',
  },
];

export const testimonialData = [
  {
    name: 'John Smith',
    image: user1,
    quote:
      "I had the pleasure of working with Country Painters on a complete home renovation project. Their attention to detail, dedication, and craftsmanship exceeded my expectations. They transformed my space into a true masterpiece, and I couldn't be happier.",
    profession: 'Architect',
  },
  {
    name: 'Emily Davis',
    image: user3,
    quote:
      'Country Painters took on the challenging task of tiling my entire home. Their expertise and precision shone through every step of the process. My kitchen, bathroom, and living areas now showcase their impeccable work, and I highly recommend them to anyone seeking top-tier craftsmanship.',
    profession: 'Homeowner',
  },
  {
    name: 'David Wilson',
    image: user2,
    quote:
      "I entrusted Country Painters with glazing my office windows, and the results are simply outstanding. The natural light that now fills the workspace has had a positive impact on my employees' productivity and well-being. I'm grateful for their exceptional service.",
    profession: 'Business Owner',
  },
  {
    name: 'Sarah Johnson',
    image: user4,
    quote:
      "Country Painters brought life and personality to my living room with their masterful paintwork. The color selection and application were executed with precision, and the end result is nothing short of stunning. I'm proud to showcase their work in my home.",
    profession: 'Homeowner',
  },
];
