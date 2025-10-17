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
    <div className="bg-outline/60 mx-auto h-10 w-full rounded md:mx-0" />
    <div className="mx-auto grid w-full gap-3">
      <span className="bg-outline/40 h-6 w-full rounded" />
      <span className="bg-outline/30 h-6 w-full rounded" />
      <span className="bg-outline/20 h-6 w-4/6 rounded" />
    </div>

    <div className="grid justify-items-center gap-4 md:grid-cols-2">
      {Array.from({ length: 2 }).map((_, index) => (
        <div
          className="bg-surface grid w-4/5 animate-pulse justify-items-center gap-4 p-9"
          key={index}
        >
          <span className="bg-outline/30 h-24 w-24 rounded" />
          <span className="bg-outline/40 h-10 w-3/4 rounded" />
          <span className="bg-outline/20 h-20 w-full rounded" />
          <span className="bg-outline/30 h-6 w-1/2 rounded" />
          <span className="bg-primary/40 h-12 w-full rounded" />
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
