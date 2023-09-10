import interiorPainting from '../../../assets/interior-painting.jpg';
import painting from '../../../assets/home-background.jpg';
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
    route_path: '/contact',
    button: 'GET IN TOUCH',
  },
];

export const servicesDataArr = {
  painting: {
    image: painting,
    description:
      'Elevate the ambiance of your space with our expert painting service, where every brushstroke reflects craftsmanship and creativity.',
    overview:
      "Transform your living spaces with our professional painting service. Whether you're looking to refresh the interior, enhance the exterior, or create a new ambiance, we've got you covered. Our skilled painters bring a splash of color and creativity to your walls, making your home or office a canvas of endless possibilities. With a commitment to quality and an eye for detail, we turn your vision into reality. Choose our painting service for a vibrant and refreshed environment that suits your style and preferences.",
    subSections: [
      {
        id: 1,
        name: 'Interior Painting',
        description: 'Transform your indoor spaces with a fresh coat of paint.',
        image: interiorPainting,
        overview:
          "Elevate the ambiance of your living spaces with our Interior Painting expertise. Our highly skilled painters bring a wealth of experience to every project, ensuring a flawless finish. We're equipped to handle a wide range of interior painting needs, including wall painting, ceiling painting, trim work, and more. With an extensive palette of colors at your disposal, we cater to your unique preferences. Whether you seek a tranquil retreat with soft pastels or a bold statement with vibrant hues, we have the perfect shades to match your vision.",
      },
      {
        id: 2,
        name: 'Exterior Painting',
        description:
          "Protect and beautify your home's exterior with our painting expertise.",
        image: exteriorPainting,
        overview:
          "Enhance the beauty and durability of your home with our Exterior Painting service. Our skilled team of painters possesses the expertise required for outdoor projects, guaranteeing a lasting and appealing result. We're well-versed in painting exterior walls, trims, doors, and even intricate details like shutters. Our extensive selection of exterior paint colors allows you to choose the perfect palette for your home's curb appeal. From classic neutrals that exude elegance to bold shades that make a statement, we offer a wide spectrum of options.",
      },
      {
        id: 3,
        name: 'Commercial Painting',
        description:
          'Make a lasting impression with our professional painting solutions for commercial spaces.',
        image: commercialPainting,
        overview:
          "Make a bold statement in the business world with our Commercial Painting solutions. Our team of skilled professionals possesses the expertise needed to cater to diverse commercial environments. Whether you're looking to refresh office spaces, restaurants, retail outlets, or industrial facilities, we have the skills and resources to exceed your expectations. Our commercial painting services encompass a comprehensive array of surfaces, from walls and ceilings to intricate details and fixtures. We understand the importance of color psychology in commercial settings, and our extensive color palette ensures that we can meet your branding and ambiance goals.",
      },
    ],
  },

  tiling: {
    image: floorTiling,
    description:
      'Achieve the perfect blend of style and durability with our meticulous tiling service, where high-quality materials meet precise installation for exceptional results.',
    overview:
      "Discover the elegance of beautifully tiled surfaces with our tiling service. Whether it's floors, walls, or bathrooms, we specialize in precision tiling solutions that upgrade your space. Our extensive range of styles and patterns ensures there's something to suit every taste. We don't just create tiled surfaces; we craft works of art that stand the test of time. From durable floor tiles to eye-catching accent walls, our tiling service adds a touch of luxury and functionality to your home or business. Elevate your space with our expert craftsmanship.",
    subSections: [
      {
        id: 4,
        name: 'Floor Tiling',
        description: 'Upgrade your floors with our precision tiling solutions.',
        image: floorTiling,
        overview:
          'Elevate your floors to new heights of elegance with our Floor Tiling service. Our skilled craftsmen are well-versed in the art of precision tiling, ensuring that every square foot of your flooring is a work of perfection. Whether you desire the timeless charm of ceramic, the rustic allure of porcelain, or the luxurious beauty of natural stone, we have the skills and materials to make it happen. We offer a diverse range of patterns and styles to cater to your aesthetic preferences. ',
      },
      {
        id: 5,
        name: 'Wall Tiling',
        description: 'Elevate your walls with beautifully tiled surfaces.',
        image: wallTiling,
        overview:
          "Add a touch of artistic flair to your walls with our Wall Tiling service. Our expert tilers are masters at transforming blank surfaces into captivating focal points. Whether it's accent walls, backsplashes, or entire tiled rooms, we have the expertise to create stunning tiled surfaces that elevate your interiors. Our skillful hands work with a variety of materials, from ceramic and glass to subway tiles and custom designs. We offer a wide spectrum of patterns and colors to suit your vision, from modern minimalism to intricate mosaics. ",
      },
      {
        id: 6,
        name: 'Bathroom Tiling',
        description:
          'Revamp your bathroom with our specialized tiling solutions.',
        image: bathroomTiling,
        overview:
          "Revamp your bathroom with our specialized Bathroom Tiling service. Our seasoned professionals understand the unique demands of bathroom environments, and we're here to transform your space into a haven of beauty and functionality. From showers and tub surrounds to countertops and floors, we bring precision tiling skills to every corner of your bathroom. We offer a wide selection of moisture-resistant materials, ensuring longevity and elegance. Whether you prefer the timeless sophistication of marble or the modern appeal of subway tiles, we have the expertise to deliver. ",
      },
    ],
  },

  glazing: {
    image: glassdoorGlazzing,
    description:
      'Transform your windows and glass surfaces into stunning focal points with our professional glazing service, enhancing both aesthetics and functionality.',
    overview:
      'Elevate your spaces with our premium glazing solutions. From windows to glass doors, we add a touch of sophistication and functionality to your home or office. Our expert glaziers enhance energy efficiency, security, and aesthetics, making your space brighter and more inviting. With a range of contemporary designs and options, we transform your glass features into stunning focal points. Trust our glazing service to combine style, safety, and modernity for a truly exceptional experience.',
    subSections: [
      {
        id: 7,
        name: 'Window Glazing',
        description: 'Enhance your windows with our elegant glazing solutions.',
        image: windowGlazing,
        overview:
          'Elevate your windows with our Window Glazing service. Our expert glaziers specialize in enhancing the energy efficiency, security, and aesthetics of your windows. We bring a wealth of experience to every project, ensuring your home or business becomes brighter, more inviting, and energy-efficient. We offer a comprehensive range of window glazing options, from double glazing for insulation to custom decorative designs that add character to your property.',
      },
      {
        id: 8,
        name: 'Glass Door Glazing',
        description:
          'Add style and functionality to your glass doors with our glazing options.',
        image: glassdoorGlazzing,
        overview:
          "Transform your glass doors into stylish and functional elements with our Glass Door Glazing service. Our skilled glaziers possess the expertise needed to enhance both the aesthetics and practicality of your glass doors. Whether it's for residential or commercial spaces, we have the skills and design sensibility to create elegant and secure glazing solutions. We offer a wide range of glazing options, from frosted privacy glass to contemporary decorative designs. ",
      },
      {
        id: 9,
        name: 'Mirror Glazing',
        description:
          'Create stunning mirror installations with our glazing expertise.',
        image: bathroomMirror,
        overview:
          "Create stunning mirror installations with our Mirror Glazing service. Our skilled glaziers possess the artistry and precision required to add elegance and depth to your spaces with custom mirror designs. Whether you're looking for full-wall mirrors, unique mirror shapes, or custom-designed mirror installations, we have the skills to bring your vision to life. We offer a wide range of mirror options, including framed and frameless mirrors, to suit your style and space requirements.",
      },
    ],
  },
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
