import type { Metadata } from "next";
import "./globals.css";
import GlobalProviders from "./_components/context/GlobalProviders";

export const metadata: Metadata = {
  title: "WorkGen CRM",
  description: "A CRM dashboard prototype",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        <GlobalProviders>
          {children}
        </GlobalProviders>
      </body>
    </html>
  );
}
