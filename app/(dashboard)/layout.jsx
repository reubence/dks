import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <div className="h-full w-72">{children}</div>
    </>
  );
};

export default DashboardLayout;
