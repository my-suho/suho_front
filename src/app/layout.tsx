import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";

import AppLayout from "@/components/AppLayout";
import { cn } from "@/lib/utils";
import ExternalLinkHandler from "@/providers/ExternalLinkHandler";

import AppRegister from "../AppRegister";
import "./globals.css";

/** Pretendard 폰트 적용 */
const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.onsuho.com/"),
  title: "ONSUHO",
  description: "부족한 기운을 채워 수호해주는 행운 부적 서비스",
  keywords: ["온수호", "onsuho", "부적", "사주", "오늘의 운세", "행운"],
  icons: {
    icon: "/onsuho_favicon.ico",
  },
  openGraph: {
    title: "ONSUHO",
    description: "부족한 기운을 채워 수호해주는 행운 부적 서비스",
    images: [{ url: "/og_image.png", width: 800, height: 400 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    images: [
      {
        url: "/og_image.png",
        width: 800,
        height: 400,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable} font-pretendard font-semibold`}>
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KTDV46N3');
          `}
        </Script>
      </head>
      <body
        className={cn(
          pretendard.className,
          "h-dvh w-full bg-gradient-to-b from-[#030329] to-[#9E83FF] bg-cover bg-no-repeat",
        )}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KTDV46N3"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <AppRegister>
          <ExternalLinkHandler />
          <AppLayout>{children}</AppLayout>
        </AppRegister>
      </body>
    </html>
  );
}
