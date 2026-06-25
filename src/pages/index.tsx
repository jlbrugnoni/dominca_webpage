import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import Products from '@/components/Products';
import Capabilities from '@/components/Capabilities';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Dominica Minerals | Carbonato de calcio y morteros secos</title>
        <meta
          name="description"
          content="Carbonato de calcio y morteros secos para la industria y construccion en Republica Dominicana."
        />
      </Head>

      <Header />
      <main className="bg-brand-white text-brand-ink">
        <Hero />
        <AboutUs />
        <Products />
        <Capabilities />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
