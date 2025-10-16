"use client";

import { useEffect, useState } from "react";

import { Section1Component } from "../components/Section1.component";

const getContent = async (slug: string) => {
  const response = await fetch(
    "https://us-west-2.cdn.hygraph.com/content/ck7yw5sgz00ov01zdgyuj8a6p/assetmigration",
    {
      body: JSON.stringify({
        query: `query Query($slug: String!) {
  poc(where: {slug: $slug}) {
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
          image {
            handle
            url
            height
            width
          }
        }
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

export const Section1Skeleton = () => (
  <>
    <div className="mx-auto h-10 w-full rounded bg-outline/60 md:mx-0" />
    <div className="mx-auto grid w-full gap-3">
      <span className="h-6 w-full rounded bg-outline/40" />
      <span className="h-6 w-full rounded bg-outline/30" />
      <span className="h-6 w-4/6 rounded bg-outline/20" />
    </div>

    <div className="grid justify-items-center gap-4 md:grid-cols-2">
      {Array.from({ length: 2 }).map((_, index) => (
        <div
          className="grid w-4/5 animate-pulse justify-items-center gap-4 bg-surface p-9"
          key={index}
        >
          <span className="h-24 w-24 rounded bg-outline/30" />
          <span className="h-10 w-3/4 rounded bg-outline/40" />
          <span className="h-20 w-full rounded bg-outline/20" />
          <span className="h-6 w-1/2 rounded bg-outline/30" />
          <span className="h-12 w-full rounded bg-primary/40" />
        </div>
      ))}
    </div>
  </>
);

export type Section1ProviderProps = {
  route: string;
};

export const Section1Provider = ({ route }: Section1ProviderProps) => {
  const [content, setContent] = useState<any>(null);

  useEffect(() => {
    getContent(route).then((content) => {
      setContent(content);
    });
  }, [route]);

  if (!content) return <Section1Skeleton />;

  return (
    <Section1Component
      cards={content.poc.section1.cards}
      heading={content.poc.section1.heading}
      summary={content.poc.section1.summary.html}
    />
  );
};
