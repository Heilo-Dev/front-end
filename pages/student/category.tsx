import { BtnSecondary, LocalImage, Navbar } from "../../components";
import wave from "../../assets/img/category-wave.png";
import Head from "next/head";

type Props = {};

const Category = (props: Props) => {
  return (
    <>
      <Head>
        <title>Category</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="flex justify-center h-screen relative">
        <div className="categoryWave absolute top-0 flex flex-wrap justify-center items-start">
          <LocalImage
            src={wave}
            alt="Hero Section Image"
            layout="fill"
            position="top"
          />
          <div className="z-20 pt-36 w-1/2 flex flex-col items-center">
            <div className="flex justify-between w-full">
              <BtnSecondary label="SSC" link="/register" />
              <BtnSecondary label="HSC" link="/register" />
            </div>
            <div className="flex justify-between w-full my-16 px-10">
              <BtnSecondary label="A Level" link="/register" />
              <BtnSecondary label="O Level" link="/register" />
            </div>
            <BtnSecondary label="Admission" link="/register" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
