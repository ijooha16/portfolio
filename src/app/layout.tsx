import type { Metadata } from "next";
import "@/styles/globals.css";
import localFont from "next/font/local";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const pretendard = localFont({
  src: "../styles/font/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "윤주하 | 프론트엔드 개발자 포트폴리오",
  description:
    "사용자 경험을 고민하는 프론트엔드 개발자 윤주하의 포트폴리오. ODY, 타짝, 돌잡이, Smookie.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable}`}>
      <body className="flex flex-col bg-background font-pretendard text-gray-900 hide-scrollbar">
        <Header />
        <main className={`min-h-screen`}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
