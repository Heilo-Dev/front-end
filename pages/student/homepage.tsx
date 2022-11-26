import React from "react";
import AvailableTutors from "../../components/student/homepage/tutor-section";
import BannerSection from "../../components/student/homepage/banner-section";

import { HomepageLayout } from "../../layouts";

type Props = {};

const Homepage = (props: Props) => {
  return (
    <div>
      <HomepageLayout>
        <BannerSection />
        <AvailableTutors />
      </HomepageLayout>
    </div>
  );
};

export default Homepage;
