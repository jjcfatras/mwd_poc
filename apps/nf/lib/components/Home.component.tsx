import Image from "next/image";

import adobeIcon from "@repo/assets/images/row-trust-icons_adobesign-blue.webp";
import bbbIcon from "@repo/assets/images/row-trust-icons_bbb-blue.webp";
import inc5000Icon from "@repo/assets/images/row-trust-icons_inc5000-blue.webp";
import trustpilotIcon from "@repo/assets/images/row-trust-icons_trustpilot-blue.webp";
import { Container } from "@repo/ui/components/Container";
import { Hero, type HeroProps } from "@repo/ui/components/Hero";

import {
  Section1Component,
  type Section1ComponentProps,
} from "../components/Section1.component";
import {
  Section2Component,
  type Section2ComponentProps,
} from "../components/Section2.component";
import { HeroProvider } from "../providers/Hero.provider";
import { Section1Provider } from "../providers/Section1.provider";
import { Section2Provider } from "../providers/Section2.provider";

export type HomeComponentProps = {
  heroProps: HeroProps;
  section1Props: Section1ComponentProps;
  section2Props: Section2ComponentProps;
};

export const HomeComponent = ({
  heroProps,
  section1Props,
  section2Props,
}: HomeComponentProps) => (
  <>
    {/* render everything at once */}
    {/* <Hero {...heroProps} />
    <div className="w-full bg-surfaceDarker">
      <Container>
        <div className="grid w-full justify-items-center gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from([trustpilotIcon, bbbIcon, inc5000Icon, adobeIcon]).map(
            (icon, index) => (
              <Image alt="" key={index} src={icon} />
            ),
          )}
        </div>
      </Container>
    </div>
    <div className="w-full bg-secondary py-16">
      <Container className="flex-col justify-center gap-8 text-center">
        <Section1Component {...section1Props} />
      </Container>
    </div>
    <div className="w-full bg-surfaceDark py-16">
      <Container className="flex-col items-center justify-items-center gap-8 text-center">
        <Section2Component {...section2Props} />
      </Container>
    </div> */}

    {/* render dynamically */}
    <HeroProvider route="/" />
    <div className="bg-surfaceDarker w-full">
      <Container>
        <div className="grid w-full justify-items-center gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from([trustpilotIcon, bbbIcon, inc5000Icon, adobeIcon]).map(
            (icon, index) => (
              <Image alt="" key={index} src={icon} />
            ),
          )}
        </div>
      </Container>
    </div>
    <div className="bg-secondary w-full py-16">
      <Container className="flex-col justify-center gap-8 text-center">
        <Section1Provider route="/" />
      </Container>
    </div>
    <div className="bg-surfaceDark w-full py-16">
      <Container className="flex-col items-center justify-items-center gap-8 text-center">
        <Section2Provider route="/" />
      </Container>
    </div>
  </>
);
