export const company = {
  name: 'Dominca',
  legalName: 'Dominca SRL',
  siteUrl: 'https://www.industriasdominca.com',
  logoPath: '/images/logo_horizontal.png',
  tagline: 'Carbonato de calcio y morteros secos para la industria dominicana.',
  description:
    'Somos una empresa familiar fundada en marzo de 2021, dedicada a la producción de carbonato de calcio y soluciones para las industrias de la construcción, pinturas, plásticos y alimentación animal.',
  phone: '+1 (809) 679-7555',
  whatsapp: '18096797555',
  email: 'info@industriasdominca.com',
  location: 'República Dominicana',
  address: 'Av. Circunvalación Norte, km. 25, Santiago de los Caballeros, República Dominicana',
  instagram: 'indominca',
  instagramUrl: 'https://www.instagram.com/indominca/',
  catalogPath: '/catalog/Dominca_Catalogo_2026.pdf',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2212.698871518089!2d-70.76826913196727!3d19.51349692980099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eb1c7cb90486c61%3A0x9a9d43082c5e390b!2sDominca%20SRL!5e0!3m2!1sen!2sdo!4v1782406900404!5m2!1sen!2sdo',
};

export const seoKeywords = [
  'carbonato de calcio República Dominicana',
  'carbonato de calcio Santiago',
  'carbonato de calcio fino',
  'carbonato de calcio grueso',
  'carbonato de calcio para pinturas',
  'carbonato de calcio para plásticos',
  'carbonato de calcio para agricultura',
  'carbonato de calcio para alimentación animal',
  'morteros secos República Dominicana',
  'pañete premezclado',
  'estuco cementicio',
  'adhesivo cerámico',
  'materiales de construcción Santiago',
];

export const heroSlides = [
  {
    image: '/images/carousel_1.jpg',
    eyebrow: 'Industria mineral',
    title: 'Materiales con calidad constante para fabricar y construir mejor.',
    body:
      'Una base local para suplir carbonato de calcio, morteros secos y productos a la medida de tus procesos.',
  },
  {
    image: '/images/carousel_2.jpg',
    eyebrow: 'Carbonato de calcio',
    title: 'Granulometrías y blancura pensadas para aplicaciones técnicas.',
    body:
      'Soluciones para pinturas, plásticos, adhesivos, construcción y otros usos industriales.',
  },
  {
    image: '/images/carousel_3.jpg',
    eyebrow: 'Morteros secos',
    title: 'Mezclas listas para obra con rendimiento y control.',
    body:
      'Morteros formulados para facilitar aplicación, reducir variabilidad y mejorar la productividad.',
  },
  {
    image: '/images/carousel_4.jpeg',
    eyebrow: 'Producción local',
    title: 'Capacidad para suplir proyectos, ferreterías e industria.',
    body:
      'Integramos producto, empaque y despacho para responder con agilidad en República Dominicana.',
  },
  {
    image: '/images/carousel_5.jpg',
    eyebrow: 'Soluciones técnicas',
    title: 'Productos preparados para aplicaciones exigentes.',
    body:
      'Acompañamos cada línea con información comercial, soporte técnico y posibilidades de desarrollo a la medida.',
  },
];

export const products = [
  {
    id: 'calcium-carbonate',
    eyebrow: 'Línea mineral',
    name: 'Carbonato de calcio',
    image: '/images/calcium-carbonate.png',
    accent: '#84BF41',
    description:
      'Materia prima mineral para aplicaciones industriales y construcción, disponible en granulometrías gruesas y finas.',
    groups: [
      {
        title: 'Materiales gruesos',
        items: ['3/4"', '3/8"', '4 mm', '1 mm'],
      },
      {
        title: 'Materiales finos',
        items: ['Pro (#200)', 'Fino (#325)', 'Plus (#400)', 'Premium (#500)', 'Ultra (#800)'],
      },
    ],
    families: [
      {
        name: 'Carbonato de Calcio Grueso',
        color: '#123144',
        image: '/images/producto_carbonato_grueso.jpeg',
        description: 'Línea diseñada para construcción, agricultura y alimentación animal. Su versatilidad y pureza aportan resistencia, durabilidad y valor nutricional en múltiples aplicaciones.',
        items: ['3/4"', '3/8"', '4 mm', '1 mm'],
      },
      {
        name: 'Carbonato de Calcio Fino',
        color: '#84BF41',
        image: '/images/producto_carbonato_fino.jpeg',
        description: 'Nuestra especialidad desde el inicio: carbonatos finos de alta pureza y distintas finuras para pinturas, plásticos, industria química, pigmentos y revestimientos.',
        items: ['Pro (#200)', 'Fino (#325)', 'Plus (#400)', 'Premium (#500)', 'Ultra (#800)'],
      },
    ],
  },
  {
    id: 'dry-mortar',
    eyebrow: 'Línea construcción',
    name: 'Morteros secos',
    image: '/images/dry-mortar.png',
    accent: '#123144',
    description:
      'Mezclas cementicias pre dosificadas organizadas por familias de producto, cada una con empaque y color propio.',
    groups: [
      {
        title: 'Grupos principales',
        items: ['Revestimientos', 'Estucos', 'Adhesivos cerámicos'],
      },
    ],
    families: [
      {
        name: 'Pañete',
        color: '#DF5B2E',
        image: '/images/producto_panete.jpeg',
        description: 'Revestimiento cementicio para muros de ladrillo y bloque, formulado para regularizar superficies, facilitar la aplicación y mantener un desempeño constante en obra.',
        items: ['Muros de bloque', 'Muros de ladrillo', 'Aplicación interior y exterior'],
      },
      {
        name: 'Estuco',
        color: '#F2D748',
        image: '/images/producto_estuco.jpeg',
        description: 'Revestimiento cementicio fino para muros, concreto y paneles. Ofrece adherencia, cohesión, durabilidad y una terminación uniforme de alta calidad.',
        items: ['Estuco blanco', 'Estuco gris', 'Interior y exterior', 'Terminación fina'],
      },
      {
        name: 'Adhesivo Cerámico',
        color: '#EA8A2E',
        image: '/images/producto_adhesivo.png',
        description: 'Adhesivos cerámicos a base de cemento Portland, agregados minerales seleccionados y aditivos especiales para trabajabilidad, adherencia y retención de agua.',
        items: ['Pisos', 'Revestimientos', 'Alta adherencia', 'Desempeño constante'],
      },
    ],
  },
];

export const strengths = [
  'Producción local en República Dominicana',
  'Control de calidad exhaustivo en cada etapa de producción',
  'Desarrollo de productos de altas prestaciones',
  'Logística para suplir obras, ferreterías e industria',
];

export const aboutParagraphs = [
  'Somos una empresa familiar fundada en marzo de 2021, dedicada a la producción de carbonato de calcio y soluciones para las industrias de la construcción, pinturas, plásticos y alimentación animal.',
  'Desde nuestros inicios, hemos trabajado con el compromiso de ofrecer productos de alta calidad, impulsados por la innovación y la sostenibilidad en cada etapa de nuestro crecimiento.',
  'Nuestra misión es acompañar a nuestros clientes con materiales confiables que fortalezcan sus proyectos y aporten valor a sus procesos.',
];

export const timeline = [
  {
    year: '2021',
    title: 'Inicio de operaciones',
    body: 'Primera línea de molienda con gama de productos blancos y extra blancos.',
  },
  {
    year: '2022',
    title: 'Segunda línea de molienda',
    body: 'Incorporación de línea de alta eficiencia, agregando productos extra finos al catálogo.',
  },
  {
    year: '2023',
    title: 'Carbonatos gruesos y morteros',
    body: 'Nuevas líneas de carbonatos gruesos y morteros con estuco blanco y gris. Modernización de sistemas de empaque.',
  },
  {
    year: '2024',
    title: 'Morteros gruesos',
    body: 'Incorporación de segunda línea de producción de morteros gruesos e introducción de familia de revestimientos gruesos.',
  },
  {
    year: '2025',
    title: 'Adhesivos cerámicos',
    body: 'Lanzamiento de línea de adhesivos cerámicos y ampliación en la sección de morteros.',
  },
];
