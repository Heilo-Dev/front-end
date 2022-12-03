import React from "react";
import book from "../../assets/img/book.png";
type Props = {};

const BannerSection = (props: Props) => {
  return (
    <div
      className="max-w-full h-[400px] flex justify-center items-center"
      style={{
        backgroundImage: `url(${book.src})`,
        width: "100%",
        height: "400px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus aliquam
        nunc amet luctus purus. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Lectus aliquam nunc amet luctus purus.
      </p>
    </div>
  );
};

export default BannerSection;
