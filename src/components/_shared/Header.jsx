import { useCallback, useState } from "react";
import NextLink from "next/link";
import { Drawer, Menu, Navbar } from "react-daisyui";
import { AiOutlineMenu } from "react-icons/ai";

export const Header = ({ callback }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = useCallback(() => setIsOpen((isOpen) => !isOpen), []);

  return (
    <header className="px-3">
      <Navbar className="w-full">
        <Navbar.Start>
          <Branding />
        </Navbar.Start>
        <Navbar.End>
          <AiOutlineMenu onClick={callback} className="sm:hidden cursor-pointer" />
          <MainNav />
        </Navbar.End>
      </Navbar>
    </header>
  );
};

const Branding = () => {
  return (
    <NextLink href="/">
      <a className="text-xl text-center font-display uppercase">
        Tornado <span className="italic">Warned</span>
      </a>
    </NextLink>
  );
};
const MainNav = () => {
  return (
    <Menu className="hidden sm:flex" horizontal>
      <Menu.Item className="text-sm">
        <NextLink href="/">active</NextLink>
      </Menu.Item>
      <Menu.Item className="text-sm">
        <NextLink href="/convective-outlooks">outlooks</NextLink>
      </Menu.Item>
      <Menu.Item className="text-sm">
        <NextLink href="/local-storm-reports">LSRs</NextLink>
      </Menu.Item>
      <Menu.Item className="text-sm">
        <NextLink href="/damage-assessment-paths">damage paths</NextLink>
      </Menu.Item>
    </Menu>
  );
};
