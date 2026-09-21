import Header from './components/Header';
import Hero from './components/Hero';
import Handmade from './components/Handmade';
import QuizPromo from './components/QuizPromo';
import ProductGrid from './components/ProductGrid';
import Instagram from './components/Instagram';
import StoreMap from './components/StoreMap';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="page-wrapper">
      <Header />
      <Hero />
      <Handmade />
      <QuizPromo />
      <ProductGrid />
      <Instagram />
      <StoreMap />
      <Footer />
    </div>
  );
}

export default App;