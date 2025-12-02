import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Framework from "./components/Framework";
import Programs from "./components/Programs";
import Founder from "./components/Founder";
import Testimonials from "./components/Testimonials";
import FreeTools from "./components/FreeTools";
import Blog from "./components/Blog";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <div id="about">
          <About />
        </div>
        <div id="framework">
          <Framework />
        </div>
        <div id="programs">
          <Programs />
        </div>
        <Founder />
        <Testimonials />
        <div id="tools">
          <FreeTools />
        </div>
        <div id="blog">
          <Blog />
        </div>
        <ContactCTA />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
