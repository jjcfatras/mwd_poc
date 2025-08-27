import Image from "next/image";

import adobeIcon from "@repo/assets/images/row-trust-icons_adobesign-blue.webp";
import bbbIcon from "@repo/assets/images/row-trust-icons_bbb-blue.webp";
import inc5000Icon from "@repo/assets/images/row-trust-icons_inc5000-blue.webp";
import trustpilotIcon from "@repo/assets/images/row-trust-icons_trustpilot-blue.webp";
import { Button } from "@repo/ui/components/Button";
import { Container } from "@repo/ui/components/Container";
import { Header } from "@repo/ui/components/Header";
import { Hero } from "@repo/ui/components/Hero";

const Home = () => (
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
      <div className="w-full bg-surfaceDarker">
        <Container>
          <div className="grid w-full grid-cols-2 justify-items-center gap-0 md:grid-cols-4">
            {Array.from([trustpilotIcon, bbbIcon, inc5000Icon, adobeIcon]).map(
              (icon, index) => (
                <Image alt="" key={index} src={icon} />
              ),
            )}
          </div>
        </Container>
      </div>
    </main>
  </div>
);

export default Home;
