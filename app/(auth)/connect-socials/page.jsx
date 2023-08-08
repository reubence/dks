import INTERLACE_LOGO from "@/public/images/interlace-logo.svg";
import Image from "next/image";
import LOGO_MAIN from "@/public/images/LOGO_MAIN.png";
import { Button } from "@/components/ui/button";
import DISCORD from "@/public/images/icons/discord-icon.svg";

export default function Example() {
  return (
    <div className="tallXL:-mt-20 my-10 sm:mx-auto sm:h-full sm:w-full lg:max-w-[828px] min-h-[80vh] lg:min-h-[60vh] tallXS:h-[500px] bg-primary p-5 shadow rounded-lg sm:px-12 justify-between flex flex-col relative border">
      <div className="absolute right-4 top-4 md:right-5 md:top-5  font-raleway text-xl md:text-[32px] font-bold">
        <span className="text-accent">02</span>/02
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
      <div className="flex flex-col gap-7 md:gap-12 items-center">
        <p className="font-raleway font-light md:text-2xl">
          Connect <span className="font-bold">Discord</span> and{" "}
          <span className="font-bold">Twitter (X)</span>
        </p>
        <div className="mt-6 grid md:grid-cols-2 gap-6 md:gap-4 w-full">
          <Button className="gap-2">
            <Image src={DISCORD} alt="DKS Logo" className="" unoptimized />
            connect
          </Button>
          <Button className="gap-0.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="22"
              viewBox="0 0 30 22"
              fill="none"
            >
              <path
                d="M6.04698 2.47986L12.9941 11.487L6.00311 18.8102H7.57651L13.6971 12.3986L18.6424 18.8102H23.9967L16.6587 9.29641L23.1659 2.47986H21.5925L15.9557 8.38478L11.4013 2.47986H6.04698ZM8.36077 3.60366H10.8206L21.6826 17.6862H19.2228L8.36077 3.60366Z"
                fill="white"
              />
            </svg>{" "}
            connect
          </Button>
        </div>
      </div>

      <div className="relative flex items-center gap-2 justify-center text-muted-foreground">
        Powered by:{" "}
        <Image src={INTERLACE_LOGO} alt="DKS Logo" className="" unoptimized />
      </div>
    </div>
  );
}
