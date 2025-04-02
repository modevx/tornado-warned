import { Footer as DaisyFooter } from "react-daisyui";
import NextImage from "next/image";
import NextLink from "next/link";

import { HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
  return (
    <div>
      <DaisyFooter className="p-10">
        <Copyright />
      </DaisyFooter>
    </div>
  );
};

const PoweredBySection = ({ logos }) => {
  return (
    <div>
      <p className="mb-4 text-sm">Powered By:</p>
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
                  objectPosition="center"
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
    &copy; 2020-{new Date().getFullYear()} Tornado Warned&trade;. &nbsp; All
    Rights Reserved.
  </p>
);

const LinkSection = ({ title, links }) => {
  return (
    <div>
      <DaisyFooter.Title>{title}</DaisyFooter.Title>
      {links.map(({ title, href, icon, handle }) => {
        const Icon = icon;

        return (
          <NextLink key={title} href={`${href}`}>
            <a
              target="_blank"
              rel="noreferrer noopener"
              referrerPolicy="no-referrer"
              className="text-primary-content hover:text-primary-focus"
            >
              {icon ? (
                <div className="flex">
                  <Icon size={20} />
                  <span className="ml-2.5">{handle}</span>
                </div>
              ) : (
                title
              )}
            </a>
          </NextLink>
        );
      })}
    </div>
  );
};
