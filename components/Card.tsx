import React from "react";

type CARD = { children: any; bgColorClass: string };

export const Card = ({ children, bgColorClass }: CARD) => {
  return (
    <div className={`shadow-md shadow-orange-500 w-1/4 ${bgColorClass}`}>
      {children}
    </div>
  );
};
