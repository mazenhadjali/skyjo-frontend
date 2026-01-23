import React from "react";

const SuperLayout = ({ children }) => {
  return (
    <div
      className="min-h-dvh w-full grid place-items-center max-w-105 mx-auto"
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
