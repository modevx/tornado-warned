import NextLink from "next/link";
import { Menu, Navbar } from "react-daisyui";
import { MAIN_NAV_ITEMS } from "./constants";

export const MainNav = () => {
  return (
    <ResponsiveHeader>
      <Navbar>
        <Navbar.Start>
          <NextLink href="/">
            <a className="text-3xl text-neutral-200 font-display uppercase ">
              Tornado{" "}
              <span className="italic bg-clip-text text-transparent bg-gradient-to-br from-red-500 to-neutral-400 pr-2">
                Warned
              </span>
            </a>
          </NextLink>
        </Navbar.Start>
        <Navbar.End>
          <Menu horizontal>
            {MAIN_NAV_ITEMS.map(({ label, href }, index) => (
              <Menu.Item key={`${label}-${index}`}>
                <NextLink href={href}>{label}</NextLink>
              </Menu.Item>
            ))}
          </Menu>
        </Navbar.End>
      </Navbar>
    </ResponsiveHeader>
  );
};

const ResponsiveHeader = ({ children }) => {
  return (
    <header
      data-testid="header"
      className="text-center p-4 sm:flex sm:justify-between sm:items-center"
    >
      {children}
    </header>
  );
};
