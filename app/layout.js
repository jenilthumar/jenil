import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const PlusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["variable"]
});

export const metadata = {
  title: "jenil thumar",
  description: "Portfolio site of Jenil Thumar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={PlusJakartaSans.className}>{children}</body>
    </html>
  );
}
