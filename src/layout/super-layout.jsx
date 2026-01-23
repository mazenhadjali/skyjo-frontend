import React from "react";

const SuperLayout = ({ children }) => {
  return (
    <div
      className="h-dvh w-full flex flex-col mx-auto overflow-hidden"
      style={{
        paddingLeft: "env(safe-area-inset-left)",
        paddingRight: "env(safe-area-inset-right)",
        paddingTop: "env(safe-area-inset-top)",
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      {children}
    </div>
  );
};

export default SuperLayout;
