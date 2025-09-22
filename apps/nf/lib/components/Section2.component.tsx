import { BorderedIcon } from "@repo/ui/components/BorderedIcon";
import { Button } from "@repo/ui/components/Button";
import { HTMLDiv } from "@repo/ui/components/HTML";
import { HygraphImage } from "@repo/ui/components/HygraphImage";

export type Section2ComponentProps = {
  button: {
    id: string;
    link: string;
    text: string;
  };
  columns: {
    body: {
      html: string;
    };
    heading: string;
    id: string;
    image: {
      handle: string;
      height: number;
      url: string;
      width: number;
    };
  }[];
  heading: string;
  summary: string;
};

export const Section2Component = async ({
  button,
  columns,
  heading,
  summary,
}: Section2ComponentProps) => (
  <>
    <h2 className="text-4xl font-medium text-onSurfaceDark">{heading}</h2>
    <HTMLDiv
      className="text-xl font-normal text-onSurfaceDark"
      html={summary}
    />
    <div className="grid items-center justify-items-center gap-4 md:grid-cols-3">
      {columns.map((column) => (
        <div
          className="grid items-center justify-items-center gap-5 p-4 text-center"
          key={column.id}
        >
          <BorderedIcon>
            <HygraphImage
              alt=""
              className="contrast brightness-120 hue-rotate-77 invert sepia-2"
              height={65}
              imageHandle={column.image.handle}
              width={65}
            />
          </BorderedIcon>
          <h3 className="text-xl font-bold text-onSurfaceDark">
            {column.heading}
          </h3>
          <HTMLDiv
            className="text-xl text-onSurfaceDark"
            html={column.body.html}
          />
        </div>
      ))}
    </div>
    <a className="size-max w-full" href={button.link}>
      <Button size="lg">{button.text}</Button>
    </a>
  </>
);
