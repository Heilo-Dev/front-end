import { LocalImage, BtnPrimary, Navlink } from "..";
import logo from "../../assets/img/logo.png";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <>
      <div className="px-5 sm:px-0 fixed w-full top-0 z-20">
        <div className="container mx-auto flex max-w-[1172px] items-center justify-between py-7">
          <LocalImage
            src={logo}
            width={132}
            height={88}
            alt="Heilo Logo"
            link="/"
          />
          <ul className="flex items-center">
            <Navlink label="Home" link="/" />
            <Navlink label="About Us" link="/about" />
            <Navlink label="Contact Us" link="/contact" />
            <Navlink label="TEARMS AND CONDITION" link="/condition" mr0 />
          </ul>
          <div className="flex items-center">
            <BtnPrimary className="mr-6" label="Login" link="/login" />
            <BtnPrimary label="Register" link="/welcome" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
