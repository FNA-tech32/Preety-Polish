import { Helmet, HelmetProvider } from "react-helmet-async";
import Hero from "../sections/Hero";
import Intro from "../sections/Intro";
import Services from "../sections/Services";
import Footer from "../components/Footer";
import Cta from "../sections/Cta";
import Navbar from "../components/Navbar";
import Counter from "../sections/Benefits";

export default function HomePage() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Preety Polish | Početna</title>
        <meta name="description" content="Dobrodošli u naš kutak lepote i elegancije u srcu Niša. Posvetite se nezi u našem salonu gde je vaša lepota naš prioritet."/>
        <meta property="og:title" content="Preety Polish | Početna"/>
        <meta property="og:description" content="Dobrodošli u naš kutak lepote i elegancije u srcu Niša. Posvetite se nezi u našem salonu gde je vaša lepota naš prioritet." />
      </Helmet>
      <Navbar/>
      <main>
        <Hero />
        <Intro />
        <Counter/>
        <Services />
      </main>
      <Cta/>
      <Footer/>
    </HelmetProvider>
  );
}
