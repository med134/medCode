import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import AuthProvider from "./components/authProvider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  metadataBase: new URL("https://www.medcode.dev"),
  title: "medCode Web Developer Freelance",
  description: `Learning programming is accessible for beginners through free software programming
  courses These courses introduce essential best programming languages`,
  generator: "Next.js",
  applicationName: "MedCode",
  referrer: "origin-when-cross-origin",
  keywords: [
    "programming",
    "freelance",
    "frontend developer",
    "online jobs",
    "work online",
    "make money online",
    "Beginner programming",
    "programming courses",
    "programming advices",
    "Programming languages list",
    "STEM education",
    "programming vs coding",
    "software",
    "programming for beginners",
    "tutorial course programming for beginners",
    "freelance",
    "Algorithm tutorials",
    "programming code source",
    "free code source",
    "free",
    "software developments",
  ],
  authors: [
    { name: "med dakir" },
    { name: "medCode", url: "https://www.medcode.dev/" },
  ],
  colorScheme: "light",
  creator: "Med Dakir",
  publisher: "Med Dakir",
  formatDetection: {
    email: "med@vivacode.dev",
    address: "312 Lovely Street, NY",
    telephone: false,
  },
  openGraph: {
    title: "medCode web developer & freelance",
    description: `Learning programming is accessible for beginners through free software programming
    courses These courses introduce essential best programming languages`,
    images: [
      {
        url: "https://i.ibb.co/7C7bbTZ/Frame-1.png",
        width: "400",
        height: "300",
      },
    ],
  },
  verification: {
    google: "cFXi6ELWEfl4UY9OE5i_S5QFU3LbUvdxGgW6RQgHWw",
  },
  alternates: {
    canonical: `https://www.medcode.dev`,
    languages: {
      "en-us": `https://www.medcode.dev/en-us`,
    },
    types: {
      "application/rss+xml": "https://www.medcode.dev/rss",
    },
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <AuthProvider>
          <NavBar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
