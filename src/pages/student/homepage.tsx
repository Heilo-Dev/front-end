import React from "react";

// @@ imports css @@ //
import AvailableTutors from "@components/student/homepage/tutor-section";
import BannerSection from "@components/student/homepage/banner-section";
import { HomepageLayout } from "@layouts";

// @@========================= imports css ======================@@ //
const Homepage = () => {
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
