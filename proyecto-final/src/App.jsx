import React from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { About, Banner, Community, Faq, Footer, Header, Join, Pricing, Workouts } from "./components"
import './App.css';

const App = () => {
    Aos.init({
    duration:500,
    delay:400
  })

  return (
    <div className="app">
      <Header />
      <Banner />
      <About />
      <Workouts />
      <Pricing />
      <Faq />
      <Join />
      <Footer />
    </div>
  );
};

export default App;

