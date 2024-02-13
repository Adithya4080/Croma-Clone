import './App.css';
import Navbar from './components/navbar/Navbar';
import HeroSlider from './components/slider/HeroSlider';
import Ads from './components/ads/Ads';
import Slider from './components/slider/Slider.jsx/Slider';
import BestSellDeals from './data/deals/BestSellDeals';
import Apple from './components/ads/Apple';
import NewatCroma from './components/ads/NewatCroma';
import AudioDeals from './components/slider/categorySlider/AudioDeals';
import BrandSlider from './components/slider/highlightSlider/BrandSlider';
import TopCategories from '././components/slider/categorySlider/TopCategories';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <Ads />
      <Slider />
      <BestSellDeals />
      <Apple />
      <NewatCroma />
      <AudioDeals />
      <BrandSlider />
      <TopCategories />
      <Footer />
    </>
  );
}

export default App;
