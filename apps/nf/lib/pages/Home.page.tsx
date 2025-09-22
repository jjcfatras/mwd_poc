import { HomeProvider } from "../providers/Home.provider";
import { PageTemplate } from "../templates/PageTemplate";

export const HomePage = async () => (
  <PageTemplate>
    <HomeProvider />
  </PageTemplate>
);
