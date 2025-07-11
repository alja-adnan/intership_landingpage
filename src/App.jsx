import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import Billing from './components/Billing';
import CardDeal from './components/CardDeal';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-slate-900 text-white">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Billing />
      <CardDeal />
      <Testimonials />
      <Partners />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
