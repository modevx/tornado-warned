import { Card } from "react-daisyui";

export const AlertCardTitle = ({ children }) => {
  const { Title } = Card;

  return (
    <Title className="bg-black rounded-md p-2 mb-2 flex justify-between">
      {children}
    </Title>
  );
};
