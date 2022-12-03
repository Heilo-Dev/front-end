import React from 'react'
import BannerSection from '../components/aboutUs/banner-section';
import HeroSection from '../components/aboutUs/hero-section';
import Team from '../components/aboutUs/team';
import { HomepageLayout } from '../layouts';

type Props = {}

const AboutUs = (props: Props) => {
  return (
    <HomepageLayout>
        <section>
            <HeroSection/>
            <BannerSection/>
            <Team/>
        </section>
    </HomepageLayout>
  )
}

export default AboutUs;