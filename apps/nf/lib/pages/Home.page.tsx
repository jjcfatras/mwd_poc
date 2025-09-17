import Image from "next/image";
import type { HTMLAttributes } from "react";

import efIcon from "@repo/assets/images/icon_ef.svg";
import sblIcon from "@repo/assets/images/icon_sbl.svg";
import adobeIcon from "@repo/assets/images/row-trust-icons_adobesign-blue.webp";
import bbbIcon from "@repo/assets/images/row-trust-icons_bbb-blue.webp";
import inc5000Icon from "@repo/assets/images/row-trust-icons_inc5000-blue.webp";
import trustpilotIcon from "@repo/assets/images/row-trust-icons_trustpilot-blue.webp";
import { Button } from "@repo/ui/components/Button";
import { Container } from "@repo/ui/components/Container";
import { Hero } from "@repo/ui/components/Hero";
import { HygraphImage } from "@repo/ui/components/HygraphImage";

type BorderedIconProps = HTMLAttributes<HTMLDivElement>;

const BorderedIcon = ({ children, ...rest }: BorderedIconProps) => (
  <div
    className="size-fit rounded-full border-8 border-surface bg-secondary p-4 outline-8 outline-secondary"
    {...rest}
  >
    {children}
  </div>
);

const getContent = async (slug: string) => {
  const response = await fetch(
    "https://us-west-2.cdn.hygraph.com/content/ck7yw5sgz00ov01zdgyuj8a6p/assetmigration",
    {
      body: JSON.stringify({
        query: `query MyQuery($slug: String!) {
  poc(where: {slug: $slug}) {
    hero {
      ... on Hero {
        imageDesktop {
          handle
          url
          height
          width
        }
        imageMobile {
          handle
          url
          height
          width
        }
        title
        subTitle
      }
    }
  }
}`,
        variables: {
          slug,
        },
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    },
  );

  const json = await response.json();
  return json.data;
};

export const HomePage = async () => {
  const content = await getContent("/");

  console.log(JSON.stringify(content, null, "\t"));

  return (
    <div>
      <Hero
        imageHandleDesktop={content.poc.hero.imageDesktop.handle}
        imageHandleMobile={content.poc.hero.imageMobile.handle}
        subTitle={content.poc.hero.subTitle}
        title={content.poc.hero.title}
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
              <Button className="self-end" size="md-full">
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
              <Button className="self-end" size="md-full">
                Learn More
              </Button>
            </div>
          </div>
        </Container>
      </div>
      <div className="w-full bg-surfaceDark py-16">
        <Container className="flex-col items-center justify-items-center gap-8 text-center">
          <h2 className="text-4xl font-medium text-onSurfaceDark">
            The National Funding Advantage
          </h2>
          <p className="text-xl font-normal text-onSurfaceDark">
            National Funding is committed to providing scalable and sustainable
            financing to help small businesses succeed. We offer a simple
            business loan application process, tailored lending solutions, and
            quick access to funds. That&apos;s the National Funding Advantage.
          </p>
          <div className="grid items-center justify-items-center gap-4 md:grid-cols-3">
            <div className="grid items-center justify-items-center gap-5 p-4 text-center">
              <BorderedIcon>
                <HygraphImage
                  alt=""
                  className="contrast brightness-120 hue-rotate-77 invert sepia-2"
                  height={65}
                  imageHandle="W6ueJ1xDSu2nz73xZSAp"
                  width={65}
                />
              </BorderedIcon>
              <h3 className="text-xl font-bold text-onSurfaceDark">
                Trusted by Businesses Like Yours
              </h3>
              <p className="text-xl text-onSurfaceDark">
                Over $4.5 billion in funding to more than 75,000 businesses
                nationwide
              </p>
            </div>
            <div className="grid items-center justify-items-center gap-5 p-4 text-center">
              <BorderedIcon>
                <HygraphImage
                  alt=""
                  className="contrast brightness-120 hue-rotate-77 invert sepia-2"
                  height={65}
                  imageHandle="W1wfycvKTVSPVgblEGOL"
                  width={65}
                />
              </BorderedIcon>
              <h3 className="text-xl font-bold text-onSurfaceDark">
                Fast, Easy Process
              </h3>
              <p className="text-xl text-onSurfaceDark">
                Simple application process allows for a funding decision and
                funding in as little as 24 hours.
              </p>
            </div>
            <div className="grid items-center justify-items-center gap-5 p-4 text-center">
              <BorderedIcon>
                <HygraphImage
                  alt=""
                  className="contrast brightness-120 hue-rotate-77 invert sepia-2"
                  height={65}
                  imageHandle="7sptz5f8QufRA7ktPkX9"
                  width={65}
                />
              </BorderedIcon>
              <h3 className="text-xl font-bold text-onSurfaceDark">
                Personalized Service
              </h3>
              <p className="text-xl text-onSurfaceDark">
                Your Funding Specialist will help you secure a small business
                lending solution for your business.
              </p>
            </div>
          </div>
          <Button size="lg">Apply Now</Button>
        </Container>
      </div>
    </div>
  );
};
