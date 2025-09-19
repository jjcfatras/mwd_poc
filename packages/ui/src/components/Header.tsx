import { Accordion } from "@ark-ui/react/accordion";
import { Collapsible } from "@ark-ui/react/collapsible";
import Image from "next/image";
import { forwardRef, type HTMLAttributes } from "react";
import { ChevronDown } from "react-feather";

import image from "@repo/assets/images/nf-logo-vertical.webp";

import { cn } from "../utils";

import { Button } from "./Button";
import { Container } from "./Container";

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

type HeaderMenuProps = HTMLAttributes<HTMLDivElement> & {
  menuItems: MenuItem[];
};

const HeaderMenu = ({ className, menuItems, ...rest }: HeaderMenuProps) => (
  <nav
    className={cn(
      "grid auto-cols-max grid-flow-col justify-center gap-0",
      className,
    )}
    {...rest}
  >
    {menuItems.map((item) => (
      <div
        className="group relative grid grid-cols-1 p-4 hover:bg-surfaceDark"
        key={item.label}
      >
        <div className="grid grid-cols-1 place-items-center">
          <a
            className="text-lg font-semibold text-onSurfaceDark"
            href={item.path}
          >
            {item.label}
          </a>
        </div>
        {!!item.subItems?.length && (
          <div className="absolute top-full right-0 left-0 hidden w-max min-w-full divide-y rounded-t-none rounded-b-sm border-0 border-t-4 border-t-primary bg-surface text-left shadow-md group-hover:block">
            {item.subItems.map((subItem) => (
              <a
                className="block border-outline px-4 py-3 text-base/4 text-onSurface hover:underline"
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

const Hamburger = () => (
  <div className="grid h-[40px] w-[40px] cursor-pointer grid-cols-1 place-items-center">
    <span className="h-1 w-full bg-primary" />
    <span className="h-1 w-full bg-primary" />
    <span className="h-1 w-full bg-primary" />
  </div>
);

type DropdownMenuProps = HTMLAttributes<HTMLDivElement> & {
  menuItems: MenuItem[];
};

const DropdownMenu = ({ menuItems, ...rest }: DropdownMenuProps) => (
  <Collapsible.Root lazyMount unmountOnExit {...rest}>
    <Collapsible.Trigger className="grid place-content-center">
      <Hamburger />
    </Collapsible.Trigger>
    <Collapsible.Content className="absolute top-full right-0 left-0 z-100 border-b-4 border-primary bg-surface">
      <div className="flex grow flex-col place-items-center p-0">
        <Accordion.Root
          className="flex w-full flex-col divide-y border-b-1 border-outline"
          collapsible
        >
          {menuItems.map((item) => (
            <Accordion.Item
              className="w-full border-outline"
              key={item.label}
              value={item.label}
            >
              <Accordion.ItemTrigger className="flex w-full flex-row justify-between bg-surface p-4 text-left align-middle hover:bg-surfaceDark">
                <a
                  className="text-lg font-semibold text-onSurface hover:bg-onSurfaceDark"
                  href={item.path}
                >
                  {item.label}
                </a>
                <Accordion.ItemIndicator asChild>
                  {(item.subItems?.length || 0) >= 1 && (
                    <ChevronDown className="my-auto data-[state=open]:rotate-180" />
                  )}
                </Accordion.ItemIndicator>
              </Accordion.ItemTrigger>
              <Accordion.ItemContent className="w-full">
                <div className="flex flex-col">
                  {item.subItems?.map((subItem) => (
                    <a
                      className="block px-4 py-2 text-base/4 text-onSurface hover:underline"
                      href={subItem.path}
                      key={subItem.label}
                    >
                      {subItem.label}
                    </a>
                  ))}
                </div>
              </Accordion.ItemContent>
            </Accordion.Item>
          ))}
        </Accordion.Root>
        <div className="w-full p-4">
          <Button size="md-full">Apply Now</Button>
        </div>
      </div>
    </Collapsible.Content>
  </Collapsible.Root>
);

const NFLogo = () => (
  <Image
    alt="National Funding"
    className="py-1"
    height={52}
    src={image}
    width={174}
  />
);

export type HeaderProps = HTMLAttributes<HTMLElement>;

export const Header = forwardRef<HTMLElement, HeaderProps>(
  ({ className, ...rest }: HeaderProps, ref) => (
    <header
      className={cn(`m-0 flex w-full flex-col py-0`, className)}
      ref={ref}
      {...rest}
    >
      <div className="flex w-full flex-row items-center bg-secondary">
        <Container>
          <div className="ml-auto grid auto-cols-auto grid-flow-col divide-x">
            <a
              className="border-outline px-4 py-2 text-primary"
              href="tel:8887332383"
            >
              888.733.2383
            </a>
            <a
              className="border-outline px-4 py-2 text-base text-onSecondary"
              href="/contact-us"
            >
              Contact Us
            </a>
          </div>
        </Container>
      </div>
      <div className="relative flex w-full items-center border-b-4 border-primary bg-surface">
        {/* desktop */}
        <Container className="hidden h-full items-center lg:flex">
          <NFLogo />
          <HeaderMenu className="ml-auto" menuItems={MENU_ITEMS} />
          <Button className="ml-1">Apply Now</Button>
        </Container>
        {/* mobile */}
        <Container className="h-full items-center justify-between md:px-0 lg:hidden">
          <NFLogo />
          <DropdownMenu menuItems={MENU_ITEMS} />
        </Container>
      </div>
    </header>
  ),
);

Header.displayName = "Header";
