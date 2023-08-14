import { Footer as DaisyFooter } from "react-daisyui";
import NextImage from "next/image";
import NextLink from "next/link";

const LOGOS = [
  { fileName: "logo-d3.png", alt: "D3 logo", href: "https://d3js.org" },
  {
    fileName: "logo-nws.png",
    alt: "National Weather Serviec logo",
    href: "https://www.weather.gov/",
  },
  {
    fileName: "logo-noaa.png",
    alt: "National Oceanic and Atmospheric Administration logo",
    href: "https://www.noaa.gov/",
  },
  {
    fileName: "logo-spc.png",
    alt: "Storm Prediction Center logo",
    href: "https://www.spc.noaa.gov/",
  },
];

const LINKS = {
  bePrepared: [
    {
      title: "Tornado Safety",
      href: "https://www.weather.gov/safety/tornado",
    },
  ],
  stormChasing: [
    {
      title: "SKYWARN Storm Spotter Program",
      href: "https://www.weather.gov/skywarn",
    },
  ],
};

export const Footer = () => {
  return (
    <div data-testid="Footer">
      <DaisyFooter className="p-10 bg-neutral">
        <div>
          <PoweredBySection logos={LOGOS} />
          <div className="h-10" />

          <Copyright />
        </div>

        <LinkSection title="Be Prepared" links={LINKS.bePrepared} />
        <LinkSection title="Storm Chasing" links={LINKS.stormChasing} />
      </DaisyFooter>
    </div>
  );
};

const PoweredBySection = ({ logos }) => {
  return (
    <div>
      <p className="uppercase font-bold mb-4">Powered By:</p>
      <div className="flex">
        {logos.map(({ fileName, alt, href }) => (
          <div
            key={fileName}
            style={{ position: "relative", height: "30px", width: "60px" }}
          >
            <NextLink href={href} passHref>
              <a
                target="_blank"
                rel="noreferrer noopener"
                referrerPolicy="no-referrer"
              >
                <NextImage
                  src={`/images/${fileName}`}
                  alt={alt}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="left"
                />
              </a>
            </NextLink>
          </div>
        ))}
      </div>
    </div>
  );
  lt;
};

const Copyright = () => (
  <p className="text-center text-xs mb-3">
    &copy; {new Date().getFullYear()} MODEVX, LLC. &nbsp; All Rights Reserved.
  </p>
);

const LinkSection = ({ title, links }) => {
  return (
    <div>
      <DaisyFooter.Title>{title}</DaisyFooter.Title>
      {links.map(({ title, href }) => (
        <NextLink key={title} href={`${href}`}>
          <a
            target="_blank"
            rel="noreferrer noopener"
            referrerPolicy="no-referrer"
            className="hover:text-red-500"
          >
            {title}
          </a>
        </NextLink>
      ))}
    </div>
  );
};
