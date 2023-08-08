import NavigationMenu from "@/components/navigation-menu";
import "./../public/globals.css";
import { Inter, Montserrat, Raleway, Open_Sans } from "next/font/google";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

// load open sans font
const sans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
});

// Font files can be colocated inside of `app`
const wavesCPC = localFont({
  src: "./../public/fonts/WavesBlackletterCPC-Base.otf",
  display: "swap",
  variable: "--font-waves-cpc",
});

const wavesTinyCPC = localFont({
  src: "./../public/fonts/WavesTinyCPC-Extended.otf",
  display: "swap",
  variable: "--font-waves-tiny-cpc",
});

const gilroy = localFont({
  src: [
    {
      path: "./../public/fonts/gilroy/Gilroy-Regular.ttf",
      weight: "400",
    },
    {
      path: "./../public/fonts/gilroy/Gilroy-ThinItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./../public/fonts/gilroy/Gilroy-SemiBold.ttf",
      weight: "500",
    },
  ],
  variable: "--font-gilroy",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          montserrat.variable,
          sans.variable,
          raleway.variable,
          wavesCPC.variable,
          wavesTinyCPC.variable,
          gilroy.variable,
          `lg:h-screen lg:w-screen lg:overflow-y-hidden relative tallXS:h-full tallXS:overflow-y-scroll`
        )}
      >
        {children}
        <div className="hidden h-3 w-full md:block fixed bg-accent bottom-0" />
        <div className="md:hidden h-3 w-full absolute bg-accent bottom-0" />
      </body>
    </html>
  );
}
