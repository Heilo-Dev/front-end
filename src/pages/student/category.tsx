import Head from "next/head";

// @@ imports css @@ //
import { BtnSecondary, LocalImage, Navbar } from "@components";
import wave from "@assets/img/category-wave.png";

// @@======================= Category ========================@@ //
const Category = () => {
  return (
    <>
      <Head>
        <title>Category</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="relative flex justify-center h-screen">
        <div className="absolute top-0 flex flex-wrap items-start justify-center categoryWave">
          <LocalImage
            src={wave}
            alt="Hero Section Image"
            layout="fill"
            position="top"
          />
          <div className="z-20 flex flex-col items-center w-1/2 pt-36">
            <div className="flex justify-between w-full">
              <BtnSecondary label="SSC" link="/register" />
              <BtnSecondary label="HSC" link="/register" />
            </div>
            <div className="flex justify-between w-full px-10 my-16">
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