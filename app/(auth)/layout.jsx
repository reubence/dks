import NavigationMenu from "@/components/navigation-menu";
import React from "react";

const LoginLayout = ({ children }) => {
  return (
    <>
      <NavigationMenu isLoggedIn={false} />
      <div className="relative flex min-h-full flex-1 flex-col justify-center px-4 md:px-8">
        {children}
      </div>
    </>
  );
};

export default LoginLayout;
