import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ResumeProvider } from "@/context/ResumeContext";
import { Toaster } from "@/components/ui/toaster";
import { ErrorBoundary } from "@/components/ErrorBoundary";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ResuCraft - Build Professional Resumes in Minutes",
  description: "Create beautiful, professional resumes without design skills. Choose from stunning templates, fill in your details, and download as PDF or PNG. No signup required.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <ErrorBoundary>
          <ResumeProvider>{children}</ResumeProvider>
        </ErrorBoundary>
        <Toaster />
      </body>
    </html>
  );
}
