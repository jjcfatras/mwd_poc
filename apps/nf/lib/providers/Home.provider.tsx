import { HomeComponent } from "../components/Home.component";

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
          image {
            handle
            url
            height
            width
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

export const HomeProvider = async () => {
  const content = await getContent("/");

  console.log(JSON.stringify(content, null, "\t"));

  return (
    <HomeComponent
      heroProps={{
        imageHandleDesktop: content.poc.hero.imageDesktop.handle,
        imageHandleMobile: content.poc.hero.imageMobile.handle,
        subTitle: content.poc.hero.subTitle,
        title: content.poc.hero.title,
      }}
      section1Props={{
        cards: content.poc.section1.cards,
        heading: content.poc.section1.heading,
        summary: content.poc.section1.summary.html,
      }}
      section2Props={{
        heading: content.poc.section2.heading,
        summary: content.poc.section2.summary.html,
      }}
    />
  );
};
