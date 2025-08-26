import type { HTMLAttributes } from "react";

import { Button } from "@repo/ui/components/Button";
import { Container } from "@repo/ui/components/Container";
import { Header } from "@repo/ui/components/Header";
import { cn } from "@repo/ui/utils";

type BackgroundImageProps = HTMLAttributes<HTMLDivElement> & {
  imageHandleDesktop: string;
  imageHandleMobile: string;
};

const BackgroundImage = ({
  children,
  className,
  imageHandleDesktop,
  imageHandleMobile,
  ...rest
}: BackgroundImageProps) => (
  <div
    className={cn(
      "flex min-h-[584px] w-full bg-center bg-no-repeat md:min-h-[568px]",
      imageHandleDesktop &&
        `bg-[url('https://us-west-2.graphassets.com/A86UXp1QGQ8lYK9darjQ5z/${imageHandleDesktop}')]`,
      imageHandleMobile &&
        `md:bg-[url('https://us-west-2.graphassets.com/A86UXp1QGQ8lYK9darjQ5z/${imageHandleMobile}')]`,
      className,
    )}
    {...rest}
  >
    {children}
  </div>
);

type HeroProps = BackgroundImageProps;

const Hero = ({
  children,
  className,
  imageHandleDesktop,
  imageHandleMobile,
  ...rest
}: HeroProps) => (
  <BackgroundImage
    className={className}
    imageHandleDesktop={imageHandleDesktop}
    imageHandleMobile={imageHandleMobile}
    {...rest}
  >
    <Container>{children}</Container>
  </BackgroundImage>
);

export default function Home() {
  return (
    <div className="m-0 flex size-full flex-col p-0">
      <Header />
      <main>
        <Hero
          imageHandleDesktop="ltAPjSgBShiw0wdOFOvs"
          imageHandleMobile="5Y6eYRHpQCuVnPtYLtN2"
        >
          <div className="grid grid-cols-2">
            <div className="grid place-content-around">
              <h1 className="text-5xl text-onImage lg:text-6xl">
                Funding For Your Business When You Need It Most
              </h1>
              <div className="grid gap-y-4">
                <p className="text-3xl text-onImage">
                  Get Started &gt; Get Approved &gt; Get Funding
                </p>
                <Button size="lg">Apply Now</Button>
              </div>
            </div>
            <div className="grid"></div>
          </div>
        </Hero>
      </main>
    </div>
  );
}
