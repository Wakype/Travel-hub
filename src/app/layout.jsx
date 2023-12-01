import { Inter, Quicksand } from "next/font/google";
import "./globals.css";
import ProgressBarClient from "./components/progressbarClient";
import ScrollToTopButton from "./components/scrollTop";
import { CustomChakra } from "./components";
import LayoutMobile from "./components/MobileNav";

const quickSand = Quicksand({ subsets: ["latin"] });

export const metadata = {
  title: "Travel Hub",
  description: "Travel web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={quickSand.className}>
        <CustomChakra>
          <ProgressBarClient />
          <LayoutMobile />
          {children}
          <ScrollToTopButton />
        </CustomChakra>
      </body>
    </html>
  );
}
