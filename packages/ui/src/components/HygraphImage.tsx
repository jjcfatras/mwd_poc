import Image, { type ImageProps } from "next/image";

type HygraphImageProps = Omit<ImageProps, "src"> & { imageHandle: string };

export const HygraphImage = ({ imageHandle, ...rest }: HygraphImageProps) => (
  <Image
    src={`https://us-west-2.graphassets.com/A86UXp1QGQ8lYK9darjQ5z/${imageHandle}`}
    {...rest}
  />
);
