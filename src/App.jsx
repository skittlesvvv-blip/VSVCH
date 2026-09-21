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
  const organizationName = 'SCÁLA';
  const pageTitle = 'STAY WILD';

  const products = [
    { id: 1, image: '/images/main/bag-blue-orange.jpg' },
    { id: 2, image: '/images/main/bag-leopard-set.jpg' },
    { id: 3, image: '/images/main/bag-snake.jpg' },
    { id: 4, image: '/images/main/bag-leopard.jpg' },
    { id: 5, image: '/images/main/bag-blue-featured.jpg' },
    { id: 6, image: '/images/main/bag-black.jpg' },
  ];

  const instagramPhotos = [
    { id: 1, image: '/images/main/instagram-1.jpg', type: '' },
    { id: 2, image: '/images/main/instagram-2.jpg', type: 'vertical-text' },
    { id: 3, image: '/images/main/instagram-3.jpg', type: 'video' },
    { id: 4, image: '/images/main/instagram-4.jpg', type: '' },
    { id: 5, image: '/images/main/instagram-5.jpg', type: '' },
    { id: 6, image: '/images/main/instagram-6.jpg', type: '' },
    { id: 7, image: '/images/main/instagram-7.jpg', type: '' },
    { id: 8, image: '/images/main/instagram-8.jpg', type: '' },
    { id: 9, image: '/images/main/instagram-9.jpg', type: 'live-text' },
    { id: 10, image: '/images/main/instagram-10.jpg', type: 'video presents' },
    { id: 11, image: '/images/main/instagram-11.jpg', type: '' },
    { id: 12, image: '/images/main/instagram-12.jpg', type: 'video' },
  ];

  return (
    <div className="page-wrapper">
      <Header organizationName={organizationName} />
      <Hero pageTitle={pageTitle} />
      <Handmade />
      <QuizPromo />
      <ProductGrid products={products} />
      <Instagram photos={instagramPhotos} />
      <StoreMap />
      <Footer organizationName={organizationName} />
    </div>
  );
}

export default App;