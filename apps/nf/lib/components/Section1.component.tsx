import { Button } from "@repo/ui/components/Button";
import { HTMLDiv } from "@repo/ui/components/HTML";
import { HygraphImage } from "@repo/ui/components/HygraphImage";

export type Section1ComponentProps = {
  cards: {
    body: {
      html: string;
    };
    button: {
      link: string;
      text: string;
    };
    heading: string;
    id: string;
    image: {
      handle: string;
      height: number;
      url: string;
      width: number;
    };
    subHeading: string;
  }[];
  heading: string;
  summary: string;
};

export const Section1Component = ({
  cards,
  heading,
  summary,
}: Section1ComponentProps) => (
  <>
    <h2 className="text-4xl font-medium text-onSecondary">{heading}</h2>
    <HTMLDiv
      className="text-xl text-onSecondary [&_a]:cursor-pointer [&_a]:text-primary [&_a]:underline [&_a]:hover:text-primary-interact [&_a]:hover:no-underline"
      html={summary}
    />

    <div className="grid justify-items-center gap-4 md:grid-cols-2">
      {cards.map((card) => (
        <div
          className="grid w-4/5 justify-items-center gap-4 bg-surface p-9"
          key={card.id}
        >
          <HygraphImage
            alt=""
            height={card.image.height}
            imageHandle={card.image.handle}
            width={card.image.width}
          />
          <h2 className="text-4xl font-medium text-onSurface">
            {card.heading}
          </h2>
          <HTMLDiv className="text-xl text-onSurface" html={card.body.html} />
          <h3 className="text-lg font-semibold text-onSurface">
            {card.subHeading}
          </h3>
          <a className="size-max w-full" href={card.button.link}>
            <Button className="self-end" size="md-full">
              {card.button.text}
            </Button>
          </a>
        </div>
      ))}
    </div>
  </>
);
