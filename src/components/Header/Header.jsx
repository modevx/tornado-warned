import NextLink from "next/link";
import { GoAlert } from "react-icons/go";
import { Menu, Navbar } from "react-daisyui";

const NAV_ITEMS = [
  {
    label: "alerts",
    href: "/alerts",
  },
  {
    label: "outlooks",
    href: "/convective-outlooks",
  },
];

export const Header = () => {
  const { Item } = Menu;

  return (
    <header
      data-testid="header"
      className="text-center p-4 sm:flex sm:justify-between sm:items-center"
    >
      <Navbar>
        <Navbar.Start>
          <Branding />
        </Navbar.Start>
        <Navbar.End>
          <Menu horizontal>
            {/* TODO: fix react-icons not working */}
            <Item key="alerts">
              <GoAlert />
            </Item>
          </Menu>
        </Navbar.End>
      </Navbar>
    </header>
  );
};

const Branding = () => {
  return (
    <NextLink href="/">
      <a className="text-3xl text-neutral-200 font-display uppercase">
        Tornado{" "}
        <span className="italic bg-clip-text text-transparent bg-gradient-to-br from-red-500 to-neutral-400 pr-2">
          Warned
        </span>
      </a>
    </NextLink>
  );
};

const MainNav = () => {
  return (
    <Menu horizontal>
      {NAV_ITEMS.map(({ icon, label, href }) => {
        return (
          <Menu.Item key={label}>
            <NextLink href={href}>{label}</NextLink>
          </Menu.Item>
        );
      })}
    </Menu>
  );
};
