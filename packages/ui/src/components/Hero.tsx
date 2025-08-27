import { BackgroundImage, type BackgroundImageProps } from "./BackgroundImage";
import { Container } from "./Container";

export type HeroProps = BackgroundImageProps;

export const Hero = ({
  children,
  imageHandleDesktop,
  imageHandleMobile,
  ...rest
}: HeroProps) => (
  <BackgroundImage
    imageHandleDesktop={imageHandleDesktop}
    imageHandleMobile={imageHandleMobile}
    {...rest}
  >
    <Container>{children}</Container>
  </BackgroundImage>
);
