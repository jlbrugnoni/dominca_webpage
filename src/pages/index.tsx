import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import Products from '@/components/Products';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Dominca | Carbonato de calcio y morteros</title>
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
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
