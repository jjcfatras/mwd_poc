import Image, { type ImageProps } from "next/image";

type HygraphImageProps = Omit<ImageProps, "src"> & { imageHandle: string };

export const HygraphImage = ({ imageHandle, ...rest }: HygraphImageProps) => (
  <Image
    src={`https://us-west-2.graphassets.com/cm83gfgn9036o07lkb6p653v5/${imageHandle}`}
    {...rest}
  />
);
