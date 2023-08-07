import React from "react";

const LoginLayout = ({ children }) => {
  return (
    <div className="relative flex min-h-screen flex-1 flex-col justify-center py-5 px-4 md:py-12 md:px-8">
      <div className="mt-10 sm:mx-auto sm:h-full sm:w-full lg:max-w-[828px] min-h-[70vh] lg:min-h-[60vh] bg-primary p-5 shadow rounded-lg sm:px-12 justify-between flex flex-col relative border">
        {children}
      </div>
    </div>
  );
};

export default LoginLayout;
