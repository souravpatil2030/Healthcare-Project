import React from "react";

import Header from "../components/sections/Header/Header";
import MainSection from "../components/sections/MainSection";
import Services from "../components/sections/HomeSection/Services";
import AboutUs from "../components/sections/HomeSection/AboutUs";
import MeetDoctors from "../components/sections/HomeSection/MeetDoctors";
import Contact from "../components/sections/HomeSection/Contact";
import Footer from "../components/sections/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <MainSection title="Simplifying Surgery Experience in Pune" />
      <Services />
      <AboutUs />
      <MeetDoctors />
      <Contact />
      <Footer />
    </div>
  );
}
