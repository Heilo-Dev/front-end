import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";

type LocalImageProps = {
  src: StaticImageData;
  width?: number | string;
  height?: number | string;
  alt?: string;
  link?: string;
  layout?: string;
  position?: string;
  fit?: string;
};

export const LocalImage = ({
  src,
  width,
  height,
  alt,
  link,
  layout,
  position,
  fit,
}: LocalImageProps) => {
  const router = useRouter();
  return (
    <Image
      onClick={() => router.push(link ? link : "")}
      src={src}
      width={width}
      height={height}
      alt={alt ? alt : "Image not found"}
      objectPosition={position ? position : ""}
      objectFit={fit ? fit : "contain"}
      layout={layout ? layout : ""}
      className={link ? "cursor-pointer" : " "}
    />
  );
};
