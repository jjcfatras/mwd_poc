import Image from "next/image";

import efIcon from "@repo/assets/images/icon_ef.svg";
import sblIcon from "@repo/assets/images/icon_sbl.svg";
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
      />
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
          <h2 className="text-4xl font-medium text-onSecondary">
            Small Business Lending Solutions Tailored to Your Specific Needs
          </h2>
          <p className="text-xl text-onSecondary">
            National Funding provides entrepreneurs with{" "}
            <a className="cursor-pointer text-primary underline hover:text-primary-interact hover:no-underline">
              fast approval for small business loans
            </a>{" "}
            and a simple application process. At National Funding, you&apos;ll
            receive personal service and customized options to help you reach
            your business goals. Learn more about our{" "}
            <a className="cursor-pointer text-primary underline hover:text-primary-interact hover:no-underline">
              small business lending solutions
            </a>
            , including small business loans and equipment financing.
          </p>
          <div className="grid justify-items-center gap-4 md:grid-cols-2">
            <div className="grid w-4/5 justify-items-center gap-4 bg-surface p-9">
              <Image alt="" src={sblIcon} />
              <h2 className="text-4xl font-medium text-onSurface">
                Small Business Loans
              </h2>
              <p className="text-xl text-onSurface">
                Secure working capital for inventory, payroll, marketing, taxes
                and more.
              </p>
              <h3 className="text-lg font-semibold text-onSurface">
                $5,000 to $500,000
              </h3>
              <Button className="self-end" size={"md-full"}>
                Learn More
              </Button>
            </div>
            <div className="grid w-4/5 justify-items-center gap-4 bg-surface p-9">
              <Image alt="" src={efIcon} />
              <h2 className="text-4xl font-medium text-onSurface">
                Equipment Financing and Leasing
              </h2>
              <p className="text-xl text-onSurface">
                Business lending options to purchase or lease new or used
                equipment.
              </p>
              <h3 className="text-lg font-semibold text-onSurface">
                Up to $150,000
              </h3>
              <Button className="self-end" size={"md-full"}>
                Learn More
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </main>
  </div>
);

export default Home;
