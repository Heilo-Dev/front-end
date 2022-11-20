import { BtnPrimary } from "../buttons";
import { LogoImage } from "../image-snippents";
import Navlink from "../navbar/navlink";

type Props = {};

const Footer = (props: Props) => {
  return (
    <>
      <div className="px-5 sm:px-0 fixed w-full bottom-0 bg-slate-700">
        <div className="container mx-auto flex max-w-[1172px] items-center justify-between py-7">
          <LogoImage width={132} height={88} />
          <ul className="flex items-center">
            <Navlink label="Home" link="/" />
            <Navlink label="About Us" link="/about" />
            <Navlink label="Contact Us" link="/contact" />
            <Navlink label="TEARMS AND CONDITION" link="/condition" mr0 />
          </ul>
          <div className="flex items-center">
            <BtnPrimary className="mr-6" label="Login" link="/login" />
            <BtnPrimary label="Register" link="/register" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
