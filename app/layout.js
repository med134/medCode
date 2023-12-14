import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import AuthProvider from "./components/authProvider/AuthProvider";
import { ThemeProvider } from "./context/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  metadataBase: new URL("https://www.medcode.dev"),
  title: "Software Mastery-Insider Dev Guides-Blogs | medCode",
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
  category: "technology",
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
    url: "https://medcode.dev",
    images: [
      {
        url: "https://i.ibb.co/7C7bbTZ/Frame-1.png",
        width: "400",
        height: "300",
      },
    ],
    type: "website",
  },
  verification: {
    google: "cFXi6ELWEfl4UY9OE5i_S5QFU3LbUvdxGgW6RQgHWw",
  },
  alternates: {
    canonical: "/",
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
    types: {
      "application/rss+xml": "https://medcode.dev/rss",
    },
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body
        className={`${inter.className} w-screen`}
        suppressHydrationWarning={true}
      >
        <ThemeProvider>
          <AuthProvider>
            <NavBar />
            {children}
            <Footer />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
