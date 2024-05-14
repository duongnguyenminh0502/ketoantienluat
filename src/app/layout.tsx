import Provider from "_@/app/provider";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "_@/app/_ui/footer";

const inter = Inter({
  subsets: ["latin"],
});

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
    <html lang="vi" className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-KN2X2NJL');
            `,
          }}
        ></script>
      </head>
      <body className={"bg-blue-50/50 " + inter.className}>
        <Provider>
          <main className="grid grid-cols-[1fr_calc(min(100vw,_var(--max-bound))_-_(var(--site-pad)*2))_1fr] [&>*]:col-span-1 [&>*]:col-start-2 overflow-auto scroll-smooth">
            {children}
          </main>
        </Provider>
        <Footer />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
          
           <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KN2X2NJL"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>
         
            `,
          }}
        ></noscript>
      </body>
    </html>
  );
}
