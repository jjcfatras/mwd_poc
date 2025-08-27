import { BackgroundImage, type BackgroundImageProps } from "./BackgroundImage";
import { Button } from "./Button";
import { Container } from "./Container";

export type HeroProps = Omit<BackgroundImageProps, "children">;

export const Hero = ({
  imageHandleDesktop,
  imageHandleMobile,
  ...rest
}: HeroProps) => (
  <BackgroundImage
    imageHandleDesktop={imageHandleDesktop}
    imageHandleMobile={imageHandleMobile}
    {...rest}
  >
    <Container>
      <div className="grid grid-cols-2">
        <div className="grid place-content-around">
          <h1 className="text-5xl font-medium text-onImage lg:text-6xl">
            Funding For Your Business When You Need It Most
          </h1>
          <div className="grid gap-y-4">
            <p className="text-3xl text-onImage">
              Get Started <span className="text-nowrap">&gt; Get Approved</span>{" "}
              <span className="text-nowrap">&gt; Get Funding</span>
            </p>
            <Button size="lg">Apply Now</Button>
          </div>
        </div>
      </div>
    </Container>
  </BackgroundImage>
);
