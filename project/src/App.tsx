// App.js
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Description from './components/Description';
import Itinerary from './components/Itinerary';
import Gallery from './components/Gallery';
import InteractiveMap from './components/InteractiveMap';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Description />
      <Itinerary />
      <Gallery />
      <InteractiveMap />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;