import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ToasterContext from "./context/ToasterContext";
<<<<<<< HEAD
import AuthContext from "./context/AuthContext";
=======
>>>>>>> f9d21b4badcc4e3dc20e8b81867f402f3f45bee1

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Will",
  description: "hello messenger!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
<<<<<<< HEAD
        <AuthContext>
          <ToasterContext />
          {children}
        </AuthContext>
      </body>
=======
        <ToasterContext/>
        {children}
        </body>
>>>>>>> f9d21b4badcc4e3dc20e8b81867f402f3f45bee1
    </html>
  );
}
