import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const PlusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["variable"]
});

export const metadata = {
  title: "Jenil Thummar - Product Designer based in India",
  description: "Portfolio of Jenil Thummar",
  openGraph: {
    title: "Jenil Thummar - Product Designer based in India",
    description: "Portfolio of Jenil Thummar",
    url: "https://jenilll.vercel.app",
    siteName: "Jenil Thummar",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Jenil Thummar - Product Designer based in India"
      }
    ]
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={PlusJakartaSans.className}>{children}</body>
    </html>
  );
}
