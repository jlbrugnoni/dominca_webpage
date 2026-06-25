import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import Products from '@/components/Products';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { company, products, seoKeywords } from '@/config/companyConfig';

export default function Home() {
  const pageTitle = 'Dominca | Carbonato de calcio, morteros secos y adhesivos cerámicos';
  const pageDescription =
    'Dominca produce carbonato de calcio fino y grueso, morteros secos, pañete, estuco y adhesivos cerámicos en Santiago de los Caballeros, República Dominicana.';
  const canonicalUrl = company.siteUrl;
  const logoUrl = `${company.siteUrl}${company.logoPath}`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${company.siteUrl}/#organization`,
    name: company.name,
    legalName: company.legalName,
    url: company.siteUrl,
    logo: logoUrl,
    image: logoUrl,
    description: pageDescription,
    telephone: company.phone,
    email: company.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. Circunvalación Norte, km. 25',
      addressLocality: 'Santiago de los Caballeros',
      addressCountry: 'DO',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 19.51349692980099,
      longitude: -70.76826913196727,
    },
    sameAs: [company.instagramUrl],
    areaServed: ['República Dominicana', 'Santiago de los Caballeros'],
    makesOffer: products.flatMap((product) =>
      product.families.map((family) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: family.name,
          category: product.name,
          description: family.description,
          brand: {
            '@type': 'Brand',
            name: company.name,
          },
        },
      }))
    ),
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={seoKeywords.join(', ')} />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_DO" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content={company.name} />
        <meta property="og:image" content={logoUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={logoUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <Header />
      <main className="bg-brand-white text-brand-ink">
        <Hero />
        <AboutUs />
        <Products />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
