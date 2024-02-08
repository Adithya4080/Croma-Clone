import './App.css';
import Navbar from './components/navbar/Navbar';
import HeroSlider from './components/slider/HeroSlider';
import Ads from './components/ads/Ads';
import CategorySlider from './components/slider/categorySlider/CategorySlider';
import TopDealsSlider from './components/slider/categorySlider/TopDealsSlider';
import HighlightSlider from './components/slider/highlightSlider/HighlightSlider';
import TrendDeals from './components/slider/categorySlider/TrendDeals';

function App() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <Ads />
      <CategorySlider />
      <TopDealsSlider />
      <HighlightSlider />
      <TrendDeals />
    </>
  );
}

export default App;
