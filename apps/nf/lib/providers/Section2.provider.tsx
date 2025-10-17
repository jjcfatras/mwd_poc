"use client";

import { useEffect, useState } from "react";

import { Section2Component } from "../components/Section2.component";

const getContent = async (slug: string) => {
  const response = await fetch(
    "https://us-west-2.cdn.hygraph.com/content/ck7yw5sgz00ov01zdgyuj8a6p/assetmigration",
    {
      body: JSON.stringify({
        query: `query Query($slug: String!) {
    poc(where: {slug: $slug}) {
      section2 {
        heading
        summary {
          html
        }
        columns {
          ... on Column {
            id
            heading
            image {
              handle
              url
              height
              width
            }
            body {
              html
            }
          }
        }
        button {
          ... on Button {
            id
            link
            text
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

export const Section2Skeleton = () => (
  <>
    <div className="bg-outline/60 mx-auto h-10 w-full rounded md:mx-0" />
    <div className="mx-auto grid w-full gap-3">
      <span className="bg-outline/40 h-6 w-full rounded" />
      <span className="bg-outline/30 h-6 w-full rounded" />
      <span className="bg-outline/20 h-6 w-4/6 rounded" />
    </div>

    <div className="grid w-full gap-4 md:grid-cols-3">
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          className="bg-surface grid animate-pulse items-center justify-items-center gap-5 rounded p-4 text-center"
          key={index}
        >
          <span className="bg-outline/30 flex h-20 w-20 items-center justify-center rounded-full" />
          <span className="bg-outline/40 h-6 w-3/4 rounded" />
          <span className="bg-outline/20 h-20 w-full rounded" />
        </div>
      ))}
    </div>

    <span className="bg-primary/40 mt-6 h-14 w-48 rounded" />
  </>
);

type Section2ProviderProps = {
  route: string;
};

export const Section2Provider = ({ route }: Section2ProviderProps) => {
  const [content, setContent] = useState<any>(null);

  useEffect(() => {
    getContent(route).then((content) => {
      setContent(content);
    });
  }, [route]);

  if (!content) return <Section2Skeleton />;

  return (
    <Section2Component
      button={content.poc.section2.button}
      columns={content.poc.section2.columns}
      heading={content.poc.section2.heading}
      summary={content.poc.section2.summary.html}
    />
  );
};
