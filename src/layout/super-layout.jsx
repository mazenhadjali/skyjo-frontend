import React from "react";

const SuperLayout = ({ children, title = "SKYJO" }) => {
  return (
    <div
      className="min-h-dvh w-full grid place-items-center"
      style={{
        paddingLeft: "env(safe-area-inset-left)",
        paddingRight: "env(safe-area-inset-right)",
        paddingTop: "env(safe-area-inset-top)",
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      {/* SKYJO-inspired vibrant gradient background */}
      <div className="fixed inset-0 -z-10 bg-linear-to-br from-emerald-300 via-sky-300 to-fuchsia-300 dark:from-emerald-900 dark:via-sky-900 dark:to-fuchsia-900" />

      {/* Mobile viewport panel */}
      <div className="w-full max-w-105 mx-auto px-4">
        <div className="bg-card text-card-foreground rounded-3xl border shadow-lg overflow-hidden">
          <div className="px-6 pt-6 pb-4 border-b">
            <h1 className="text-center text-3xl font-extrabold tracking-wider">
              {title}
            </h1>
            <p className="text-muted-foreground text-center text-sm mt-1">
              Playful, modern, and mobile-first
            </p>
          </div>
          <div className="p-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperLayout;
