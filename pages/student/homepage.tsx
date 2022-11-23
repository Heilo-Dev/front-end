import React from 'react'
import AvailableTutors from '../../components/student/hopepage/tutor-section';
import BannerSection from '../../components/student/hopepage/banner-section';

import { HomepageLayout } from '../../layouts';

type Props = {}

const Homepage = (props: Props) => {
  return (
    <div>
      <HomepageLayout>
        <BannerSection/>
        <AvailableTutors/>
      </HomepageLayout>
    </div>
  )
}

export default Homepage;
