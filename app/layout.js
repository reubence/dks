import NavigationMenu from "@/components/navigation-menu";
import "./../public/globals.css";
import { Inter, Montserrat, Raleway } from "next/font/google";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

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
      path: "./../public/fonts/gilroy/Gilroy-UltraLightItalic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "./../public/fonts/gilroy/Gilroy-ThinItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./../public/fonts/gilroy/Gilroy-SemiBoldItalic.ttf",
    },
  ],
});

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          montserrat.className,
          raleway.variable,
          wavesCPC.variable,
          wavesTinyCPC.variable,
          `h-full`
        )}
      >
        <NavigationMenu />
        {children}
        <div className="hidden h-3 w-full md:block absolute bg-accent bottom-0" />
      </body>
    </html>
  );
}
