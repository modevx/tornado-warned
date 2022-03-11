import React from "react";

type CARD = { children: any; bgColorClass: string };

export const Card = ({ children, bgColorClass }: CARD) => {
  return (
    <div className={`w-1/4 from-${bgColorClass} to-white`}>{children}</div>
  );
};
