import NavigationMenu from "@/components/navigation-menu";
import React from "react";

const LoginLayout = ({ children }) => {
  return (
    <>
      <NavigationMenu isLoggedIn={false} />
      <div className="relative flex min-h-full flex-1 flex-col justify-center px-4 md:px-8">
        <div className="lg:-mt-20 my-10 sm:mx-auto sm:h-full sm:w-full lg:max-w-[828px] min-h-[70vh] lg:min-h-[60vh] tallXS:h-96 bg-primary p-5 shadow rounded-lg sm:px-12 justify-between flex flex-col relative border">
          {children}
        </div>
      </div>
    </>
  );
};

export default LoginLayout;
