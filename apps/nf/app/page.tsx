import { TWButton } from "@repo/ui/components/TWButton";

type MenuItem = {
  label: string;
  path: string;
  subItems?: {
    label: string;
    path: string;
  }[];
};

const MENU_ITEMS: MenuItem[] = [
  {
    label: "Loans & Financing",
    path: "/loans-and-financing/",
    subItems: [
      {
        label: "Small Business Loans",
        path: "/small-business-loans/",
      },
      {
        label: "Working Capital Loans",
        path: "/solutions/working-capital-loans/",
      },
      {
        label: "Short Term Business Loans",
        path: "/small-business-loans/short-term-business-loans/",
      },
      {
        label: "Equipment Financing and Leasing",
        path: "/equipment-leasing/",
      },
      {
        label: "Types of Funding Solutions",
        path: "/solutions/",
      },
    ],
  },
  {
    label: "Who We Serve",
    path: "/who-we-serve/",
    subItems: [
      {
        label: "Industries",
        path: "/who-we-serve/",
      },
      {
        label: "Customer Reviews",
        path: "/customer-reviews/",
      },
      {
        label: "Meet Our Customers",
        path: "/customer-stories/",
      },
    ],
  },
  {
    label: "Resources",
    path: "https://www.nationalfunding.com/blog/",
  },
  {
    label: "About Us",
    path: "/about-us/",
    subItems: [
      {
        label: "Sponsorships",
        path: "/about-us/sponsorships/",
      },
      {
        label: "Newsroom",
        path: "/newsroom/",
      },
      {
        label: "Careers",
        path: "/about-us/career-opportunities/",
      },
      {
        label: "How We Work",
        path: "/our-difference/",
      },
    ],
  },
] as const;

const HeaderMenu = () => {
  return (
    <nav className="grid grid-cols-4 justify-center gap-0">
      {MENU_ITEMS.map((item) => (
        <div
          className="group relative grid grid-cols-1 p-4 text-center hover:bg-surfaceVariant"
          key={item.label}
        >
          <div className="grid grid-cols-1 text-center">
            <a
              className="text-lg font-semibold text-onSurface hover:underline"
              href={item.path}
            >
              {item.label}
            </a>
          </div>
          {!!item.subItems?.length && (
            <div className="absolute top-full right-0 left-0 hidden w-max min-w-full border-1 border-primary px-2 text-left group-hover:block">
              {item.subItems.map((subItem) => (
                <a
                  className="block hover:underline"
                  href={subItem.path}
                  key={subItem.label}
                >
                  {subItem.label}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default function Home() {
  return (
    <div className="m-0 flex size-full flex-col bg-background p-0">
      <header className="m-0 flex w-full flex-col py-0">
        <div className="flex h-4 w-full flex-row items-center bg-secondary" />
        <div className="flex w-full items-center border-b-1 border-primary bg-surface">
          <HeaderMenu />
          <TWButton className="my-auto">Click Me</TWButton>
        </div>
      </header>
    </div>
  );
}
