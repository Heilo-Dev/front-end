import React from "react";
import { Footer, Navbar } from "../components";
import BannerSection from "../components/aboutUs/banner-section";
import HeroSection from "../components/aboutUs/hero-section";
import Team from "../components/aboutUs/team";
import { HomepageLayout } from "../layouts";

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <>
      <Navbar />
      <section>
        <HeroSection />
        <BannerSection />
        <Team />
      </section>
      <Footer/>
    </>
  );
};

export default AboutUs;
