import { Card } from "react-daisyui";

export const AlertCardBody = ({ children }) => {
  const { Body } = Card;

  return <Body className="p-0">{children}</Body>;
};
