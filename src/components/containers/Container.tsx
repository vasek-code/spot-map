import React from "react";

const Container: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return <div className="w-full h-full px-10">{children}</div>;
};

export default Container;
