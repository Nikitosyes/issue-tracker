import "@radix-ui/themes/styles.css";
import "./theme-config.css";
import "./globals.css";
import type { Metadata } from "next";
import NavBar from "./NavBar";
import { Container, Theme } from "@radix-ui/themes";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Issues tracker App",
  description:
    "An app for  creating and working on CRUD operations regarding issues",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Theme accentColor="lime" grayColor="mauve" panelBackground="solid">
          <NavBar />
          <main className="p-5">
            <Container>
              <Toaster position="bottom-center" />
              {children}
            </Container>
          </main>
        </Theme>
      </body>
    </html>
  );
}
