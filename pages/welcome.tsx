import logo from "../assets/img/logo.png";
import wave from "../assets/img/opening-wave1.png";
import { BtnSecondary, LocalImage, Navbar } from "../components";

type Props = {};

const OpeningInterface = (props: Props) => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center h-screen relative">
        <div className="openingLogo relative z-10">
          <LocalImage src={logo} alt="Hero Section Image" layout="fill" />
        </div>
        <div className="openingWave absolute bottom-0 flex justify-center items-center">
          <LocalImage
            src={wave}
            alt="Hero Section Image"
            layout="fill"
            position="bottom"
          />
          <div className="z-20 pt-20">
            <BtnSecondary
              className="z-20 mr-60"
              label="Student"
              link="/student/category"
            />
            <BtnSecondary className="z-20" label="Teacher" link="/teacher" />
          </div>
        </div>
      </div>
    </>
  );
};

export default OpeningInterface;
