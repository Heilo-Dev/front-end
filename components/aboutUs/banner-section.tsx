import React from "react";
import book from "../../assets/img/book.png";
import { QuoteLeft, QuoteLeftIcon } from "../icons/quote-left-icon";
import { QuoteRight } from "../icons/quote-right-icon";
type Props = {};

const BannerSection = (props: Props) => {
  return (
    <div
      className="max-w-full h-[400px] flex justify-center items-center "
      style={{
        backgroundImage: `url(${book.src})`,
        width: "100%",
        height: "400px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative px-16">
        <QuoteLeft width={50} className="text-white absolute top-[-30px] left-0" />
        <p className="text-xl w-[700px] text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
          aliquam nunc amet luctus purus. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Lectus aliquam nunc amet luctus purus.
        </p>
        <QuoteRight width={50} className="text-white absolute bottom-[-30px] right-0" />
      </div>
    </div>
  );
};

export default BannerSection;
