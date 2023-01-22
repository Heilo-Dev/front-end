// @@ internal imports @@ //
import { LocalImage } from "..";
import heroImage from "@assets/img/heroImage.png";

type Props = {};

const BannerSection = (props: Props) => {
  return (
    <section className="section-container h-screen flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-textSecondary">
          Search and learn
        </h1>
        <h1 className="text-3xl font-bold text-textSecondary mt-2 mb-6">
          <span className="text-primaryLight">Only</span> topics that you{" "}
          <span className="text-primaryLight">desire</span>
        </h1>
        <p>Learn Anytime Anywhere</p>
      </div>
      <div className="h-4/6 w-2/5 relative">
        <LocalImage src={heroImage} alt="Hero Section Image" layout="fill" />
      </div>
    </section>
  );
};

export default BannerSection;
