import { Footer as DaisyFooter } from "react-daisyui";

import { FOOTER_NAV_ITEMS } from "constants/footer-nav-items";
import { getCurrentYear } from "utils";
import { Link } from "./Link";

export const Footer = () => {
  const currentYear = getCurrentYear();

  return (
    <FooterComponent>
      {FOOTER_NAV_ITEMS.map(({ title, links }) => (
        <div key={title}>
          <FooterSectionTitle title={title} />
          <FooterSectionLinks links={links} />
        </div>
      ))}
      <FooterCopyright year={currentYear} />
    </FooterComponent>
  );
};

const FooterComponent = ({ children }) => (
  <DaisyFooter className="p-10 bg-neutral text-neutral-content">
    {children}
  </DaisyFooter>
);

const FooterCopyright = ({ year }) => (
  <p className="text-center text-xs mb-3">
    &copy; {year} MODEVX, LLC. &nbsp; All Rights Reserved.
  </p>
);

const FooterSectionLinks = ({ links }) => {
  return links.map(({ label, href }) => (
    <Link key={label} href={`${href}`}>
      {label}
    </Link>
  ));
};

const FooterSectionTitle = ({ title }) => (
  <DaisyFooter.Title>{title}</DaisyFooter.Title>
);
