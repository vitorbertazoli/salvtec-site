import About from "./about";
import Card from "./cards";
import Credenciada from "./credenciada";
import Footer from "./footer";
import Header from "./header";
import Hero from "./hero";
import Reviews from "./reviews";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Card />
      <About />
      <Credenciada />
      <Reviews />
      <Footer />
    </>
  );
}