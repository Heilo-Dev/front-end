// @@ internal imports @@ //
import HeroSection from "@components/aboutUs/hero-section";
import Team from "@components/aboutUs/team";
import { BannerSection, Footer, Navbar } from "@components/index";

// @@ about us @@ //
const AboutUs = () => {
  return (
    <>
      <Navbar />
      <section>
        <HeroSection />
        <BannerSection />
        <Team />
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;
