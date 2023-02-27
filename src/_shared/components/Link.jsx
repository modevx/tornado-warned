import NextLink from "next/link";

export const Link = ({ children, ...props }) => {
  return (
    <NextLink className="link link-hover" {...props}>
      {children}
    </NextLink>
  );
};
