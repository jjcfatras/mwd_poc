import { BorderedIcon } from "@repo/ui/components/BorderedIcon";
import { Button } from "@repo/ui/components/Button";
import { HTMLDiv } from "@repo/ui/components/HTML";
import { HygraphImage } from "@repo/ui/components/HygraphImage";

export type Section2ComponentProps = {
  heading: string;
  summary: string;
};

export const Section2Component = async ({
  heading,
  summary,
}: Section2ComponentProps) => (
  <>
    <h2 className="text-4xl font-medium text-onSurfaceDark">{heading}</h2>
    <HTMLDiv className="text-xl font-normal text-onSurfaceDark" html={summary} />
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
          Over $4.5 billion in funding to more than 75,000 businesses nationwide
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
          Simple application process allows for a funding decision and funding
          in as little as 24 hours.
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
          Your Funding Specialist will help you secure a small business lending
          solution for your business.
        </p>
      </div>
    </div>
    <Button size="lg">Apply Now</Button>
  </>
);
