import Image from "next/image";

import efIcon from "@repo/assets/images/icon_ef.svg";
import sblIcon from "@repo/assets/images/icon_sbl.svg";
import adobeIcon from "@repo/assets/images/row-trust-icons_adobesign-blue.webp";
import bbbIcon from "@repo/assets/images/row-trust-icons_bbb-blue.webp";
import inc5000Icon from "@repo/assets/images/row-trust-icons_inc5000-blue.webp";
import trustpilotIcon from "@repo/assets/images/row-trust-icons_trustpilot-blue.webp";
import { BorderedIcon } from "@repo/ui/components/BorderedIcon";
import { Button } from "@repo/ui/components/Button";
import { Container } from "@repo/ui/components/Container";
import { Hero } from "@repo/ui/components/Hero";
import { HygraphImage } from "@repo/ui/components/HygraphImage";

const getContent = async (slug: string) => {
  const response = await fetch(
    "https://us-west-2.cdn.hygraph.com/content/ck7yw5sgz00ov01zdgyuj8a6p/assetmigration",
    {
      body: JSON.stringify({
        query: `query Query($slug: String!) {
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
    section1 {
      heading
      summary {
        html
      }
      cards {
        ... on Card {
          id
          body {
            html
          }
          subHeading
          button {
            link
            text
          }
        }
      }
    }
    section2 {
      heading
      summary {
        html
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
            {content.poc.section1.heading}
          </h2>
          <div
            className="text-xl text-onSecondary [&_a]:cursor-pointer [&_a]:text-primary [&_a]:underline [&_a]:hover:text-primary-interact [&_a]:hover:no-underline"
            dangerouslySetInnerHTML={{
              __html: content.poc.section1.summary.html,
            }}
          />

          <div className="grid justify-items-center gap-4 md:grid-cols-2">
            <div className="grid w-4/5 justify-items-center gap-4 bg-surface p-9">
              <Image alt="" src={sblIcon} />
              <h2 className="text-4xl font-medium text-onSurface">
                {content.poc.section1.cards[0].heading}
              </h2>
              <div
                className="text-xl text-onSurface"
                dangerouslySetInnerHTML={{
                  __html: content.poc.section1.cards[0].body.html,
                }}
              />

              <h3 className="text-lg font-semibold text-onSurface">
                {content.poc.section1.cards[0].subHeading}
              </h3>
              <a
                className="size-max w-full"
                href={content.poc.section1.cards[0].button.link}
              >
                <Button className="self-end" size="md-full">
                  {content.poc.section1.cards[0].button.text}
                </Button>
              </a>
            </div>

            <div className="grid w-4/5 justify-items-center gap-4 bg-surface p-9">
              <Image alt="" src={efIcon} />
              <h2 className="text-4xl font-medium text-onSurface">
                {content.poc.section1.cards[1].heading}
              </h2>
              <div
                className="text-xl text-onSurface"
                dangerouslySetInnerHTML={{
                  __html: content.poc.section1.cards[1].body.html,
                }}
              />
              <h3 className="text-lg font-semibold text-onSurface">
                {content.poc.section1.cards[1].subHeading}
              </h3>
              <a
                className="size-max w-full"
                href={content.poc.section1.cards[1].button.link}
              >
                <Button className="self-end" size="md-full">
                  {content.poc.section1.cards[1].button.text}
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </div>

      <div className="w-full bg-surfaceDark py-16">
        <Container className="flex-col items-center justify-items-center gap-8 text-center">
          <h2 className="text-4xl font-medium text-onSurfaceDark">
            {content.poc.section2.heading}
          </h2>
          <div
            className="text-xl font-normal text-onSurfaceDark"
            dangerouslySetInnerHTML={{
              __html: content.poc.section2.summary.html,
            }}
          />

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
