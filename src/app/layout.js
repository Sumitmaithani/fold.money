import localFont from "next/font/local";
import Favicon from "@/app/favicon.ico";
import "./globals.css";

const myFont = localFont({
  src: [
    {
      path: "../assets/fonts/GTWalsheimProBold-Oblique.woff2",
      style: "italic",
      weight: "700",
    },
    {
      path: "../assets/fonts/GTWalsheimProBlack-Oblique.woff2",
      style: "italic",
      weight: "900",
    },
    {
      path: "../assets/fonts/GTWalsheimProBlack.woff2",
      style: "normal",
      weight: "900",
    },
    {
      path: "../assets/fonts/GTWalsheimProLight.woff2",
      style: "normal",
      weight: "300",
    },
    {
      path: "../assets/fonts/GTWalsheimProBold.woff2",
      style: "normal",
      weight: "700",
    },
    {
      path: "../assets/fonts/GTWalsheimProLight-Oblique.woff2",
      style: "italic",
      weight: "300",
    },
    {
      path: "../assets/fonts/GTWalsheimProMedium-Oblique.woff2",
      style: "italic",
      weight: "600",
    },
    {
      path: "../assets/fonts/GTWalsheimProMedium.woff2",
      style: "normal",
      weight: "600",
    },
    {
      path: "../assets/fonts/GTWalsheimProRegular.woff2",
      style: "normal",
      weight: "400",
    },
    {
      path: "../assets/fonts/GTWalsheimProRegular-Oblique.woff2",
      style: "italic",
      weight: "400",
    },
    {
      path: "../assets/fonts/GTWalsheimProThin-Oblique.woff2",
      style: "italic",
      weight: "100",
    },
    {
      path: "../assets/fonts/GTWalsheimProUltraBold-Oblique.woff2",
      style: "italic",
      weight: "800",
    },
    {
      path: "../assets/fonts/GTWalsheimProThin.woff2",
      style: "normal",
      weight: "100",
    },
    {
      path: "../assets/fonts/GTWalsheimProUltraBold.woff2",
      style: "normal",
      weight: "800",
    },
    {
      path: "../assets/fonts/GTWalsheimProUltraLight-Oblique.woff2",
      style: "italic",
      weight: "200",
    },
    {
      path: "../assets/fonts/GTWalsheimProUltraLight.woff2",
      style: "normal",
      weight: "200",
    },
    {
      path: "../assets/fonts/gt-america/GTAmerica-Medium.woff2",
      style: "normal",
      weight: "500",
    },
    {
      path: "../assets/fonts/gt-america/GTAmerica-Light.woff2",
      style: "normal",
      weight: "300",
    },
    {
      path: "../assets/fonts/gt-america/GTAmerica-Regular.woff2",
      style: "normal",
      weight: "400",
    },
    {
      path: "../assets/fonts/gt-america/GTAmerica-Bold.woff2",
      style: "normal",
      weight: "700",
    },
    {
      path: "../assets/fonts/stratos/Stratos-Bold.woff2",
      style: "normal",
      weight: "700",
    },
  ],
});

export const metadata = {
  title: "Manage your money with Fold",
  description: "Manage your money with Fold",
  icons: [{ rel: "icon", url: Favicon }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
