import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs';
import { Toaster } from "@/components/ui/sonner";
import Footer from "./dashboard/_components/Footer";
import Header from "./dashboard/_components/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
  fallback: ['system-ui', 'arial', 'sans-serif']
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
  fallback: ['Courier New', 'monospace']
});

// 📌 Minimal metadata for local server only
export const metadata = {
  title: "Train&Gain AI (Local)",
  description: "Local development build of Train&Gain AI."
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <body
          className="
            antialiased
            min-h-screen
            flex
            flex-col
            bg-white
            text-gray-900
            font-sans
          "
        >
          {/* Skip to content for accessibility */}
          <a
            href="#main-content"
            className="
              absolute
              top-[-999px]
              left-[-999px]
              z-[-1]
              focus:top-0
              focus:left-0
              focus:z-50
              p-4
              bg-indigo-600
              text-white
            "
          >
            Skip to main content
          </a>

          <Header />
          <Toaster />

          <main
            id="main-content"
            className="
              flex-grow
              pt-16
              sm:pt-20
              max-w-7xl
              mx-auto
              w-full
              px-4
              sm:px-6
              lg:px-8
            "
          >
            {children}
          </main>

          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
