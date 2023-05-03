import NextLink from "next/link";

export const Link = ({ href, children, ...props }) => {
  return (
    <NextLink href={href} className="link link-hover" {...props}>
      {children}
    </NextLink>
  );
};
