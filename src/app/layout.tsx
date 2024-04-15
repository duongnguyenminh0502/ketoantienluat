import { GoogleAnalytics } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

import Provider from "_@/app/provider";
import Contact from "_@/app/ui/contact";

const metadataConstants = {
  siteName: "Dịch Vụ Thành Lập Công Ty Trọn Gói",
  siteTitle:
    "Dịch Vụ Thành Lập Công Ty Trọn Gói (2024) - Tiết kiệm thời gian và chi phí cho khởi nghiệp",
  siteDescription:
    "Tiến Luật là đơn vị chuyên cung cấp dịch vụ thành lập công ty trọn gói, tiết kiệm thời gian và chi phí cho bước đầu khởi nghiệp. Với hơn 10 năm kinh nghiệm, chúng tôi hỗ trợ và tư vấn thành lập doanh nghiệp tại nhiều tỉnh thành trên cả nước. Chúng tôi sẽ đi cùng doanh nghiệp từ khi bắt đầu thành lập công ty đến khi đi vào hoạt động, cam kết giải quyết mọi vấn đề một cách nhanh chóng và chính xác.",
  siteKeywords:
    "thành lập công ty, dịch vụ trọn gói, tiết kiệm thời gian, tiết kiệm chi phí, khởi nghiệp, tư vấn thành lập công ty, hỗ trợ doanh nghiệp, đơn vị thành lập công ty, chuyên nghiệp, nhanh chóng, chính xác",
};

export const metadata = {
  metadataBase: new URL("https://thanhlapcongtytienluat.com"),
  title: metadataConstants.siteTitle,
  description: metadataConstants.siteDescription,
  keywords: metadataConstants.siteKeywords,
  creator: metadataConstants.siteName,
  authors: [{ name: metadataConstants.siteName, url: "/" }],
  robots: "follow, index",
  alternates: { canonical: "/" },
  openGraph: {
    title: metadataConstants.siteTitle,
    description: metadataConstants.siteDescription,
    url: "/",
    siteName: metadataConstants.siteName,
    locale: "vi",
    type: "website",
  },
  twitter: {
    title: metadataConstants.siteTitle,
    description: metadataConstants.siteDescription,
    creator: metadataConstants.siteName,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={"relative " + inter.className}>
        <Contact />
        <Provider>{children}</Provider>
      </body>
      <GoogleAnalytics gaId="G-QFKL86RNVN" />
    </html>
  );
}
