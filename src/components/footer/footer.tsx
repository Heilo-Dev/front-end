import mapIcon from "../../assets/img/map-icon.png";
import emailIcon from "../../assets/img/email-icon.png";
import logo from "../../assets/img/logo.png";
import { LocalImage } from "../image-snippents";
import {
  Instagram,
  Twitter,
  Facebook,
  LinkedIn,
  Youtube,
} from "../../components";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bg-primaryDark p-9 pt-0">
      <div className="bg-white px-28 pb-14 pt-16 flex">
        <div className="grid grid-cols-3">
          <div className="pr-12 grid-cols-4 pb-4">
            <h1 className="text-textSecondary mb-8 font-medium text-2xl">
              Contact
            </h1>
            <ul>
              <li className="flex mb-8">
                <div>
                  <LocalImage src={mapIcon} width={30} height={10} />
                </div>
                <p className="ml-4 text-muted">
                  474/C, Taltola, Khilgaon , Dhaka-1219 Bangldesh
                </p>
              </li>
              <li className="flex">
                <div>
                  <LocalImage
                    src={emailIcon}
                    width={26}
                    alt="Mail Icon"
                    link="/"
                  />
                </div>
                <p className="ml-4 text-muted">help.center@heilo.com</p>
              </li>
            </ul>
          </div>

          <div className="grid-cols-4 pb-4 px-12 border border-y-0 border-[#CACACA] border-x-[4px] flex flex-col items-center">
            <LocalImage
              src={logo}
              width={100}
              height={88}
              alt="Heilo Logo"
              link="/"
            />
            <p className="ml-4 text-muted mt-8">
              Lorem ipsum dolor sit amet, elit. Ultrices aenean proin tortor,
              malesuada ut nunc lacus.
            </p>
          </div>

          <div className="pl-14 grid-cols-4 pb-4">
            <h1 className="text-textSecondary mb-8 mt-6 font-medium text-2xl">
              Social Presence
            </h1>
            <ul className="flex space-x-5">
              <li>
                <Facebook className="text-primaryDark w-10 mt-1 cursor-pointer" />
              </li>
              <li>
                <Instagram className="text-primaryDark w-12 cursor-pointer" />
              </li>
              <li>
                <LinkedIn className="text-primaryDark w-9 mt-1 cursor-pointer" />
              </li>
              <li>
                <Youtube className="text-primaryDark w-12 mt-0.5 cursor-pointer" />
              </li>
              <li>
                <Twitter className="text-primaryDark w-12 cursor-pointer" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
