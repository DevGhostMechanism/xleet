import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "xLeet — Buy Cpanels, SMTP, Leads, Webmail & Accounts",
    template: "%s | xLeet",
  },
  description:
    "xLeet is the #1 marketplace for bulk cpanels, shells, SMTP mailers, email leads, webmail access, and premium accounts. Instant delivery. Bitcoin accepted.",
  metadataBase: new URL("https://xleet.to"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.1/css/all.min.css"
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#f0f0f0]">{children}</body>
    </html>
  );
}
