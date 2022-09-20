import React from "react";

const MainContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <main className="w-full h-screen bg-zinc-100">{children}</main>;
};

export default MainContainer;
