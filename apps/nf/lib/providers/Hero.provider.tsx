"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

import { HeroSkeleton } from "@repo/ui/components/HeroSkeleton";

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

const Hero = dynamic(() =>
  import("@repo/ui/components/Hero").then(({ Hero }) => Hero),
);

export type HeroProviderProps = {
  route: string;
};

export const HeroProvider = ({ route }: HeroProviderProps) => {
  const [content, setContent] = useState<any>(null);

  useEffect(() => {
    getContent(route).then((content) => {
      setContent(content);
    });
  }, [route]);

  if (!content) return <HeroSkeleton />;

  return (
    <Hero
      imageHandleDesktop={content.poc.hero.imageDesktop.handle}
      imageHandleMobile={content.poc.hero.imageMobile.handle}
      subTitle={content.poc.hero.subTitle}
      title={content.poc.hero.title}
    />
  );
};
