import INTERLACE_LOGO from "@/public/images/interlace-logo.svg";
import Image from "next/image";
import LOGO_MAIN from "@/public/images/LOGO_MAIN.png";
import { Button } from "@/components/ui/button";

export default function Example() {
  return (
    <div className="tallXL:-mt-20 my-10 sm:mx-auto sm:h-full sm:w-full lg:max-w-[828px] min-h-[70vh] lg:min-h-[60vh] tallXS:h-96 bg-primary p-5 shadow rounded-lg sm:px-12 justify-between flex flex-col relative border">
      <div className="absolute right-4 top-4 md:right-5 md:top-5 font-raleway text-xl md:text-[32px] font-bold">
        <span className="text-accent">01</span>/02
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          src={LOGO_MAIN}
          alt="DKS Logo"
          className="w-[50px] h-[50px] md:w-20 md:h-20 text-center mx-auto mt-2.5 md:mt-8"
          unoptimized
        />
        <h2 className="mt-6 md:mt-8 text-center text-[28px] md:text-5xl font-waves">
          Welcome
        </h2>
      </div>

      <div className="flex justify-center">
        <Button className="gap-2 w-fit px-8 sm:px-16">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18 0V18H0V0H18ZM16.2 1.79956H1.8V16.1996H16.2V1.79956ZM12.0003 5.99985H6.00029V11.9999H12.0003V5.99985Z"
              fill="white"
            />
          </svg>
          login with Matrica
        </Button>
      </div>

      <div className="relative flex items-center gap-2 justify-center text-muted-foreground">
        Powered by:{" "}
        <Image src={INTERLACE_LOGO} alt="DKS Logo" className="" unoptimized />
      </div>
    </div>
  );
}
