import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const IBMPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"]
});

export const metadata = {
  title: "jenil thumar",
  description: "Portfolio site of Jenil Thumar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={IBMPlexSans.className}>{children}</body>
    </html>
  );
}
