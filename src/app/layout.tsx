"use client";

import { ReactNode } from "react";
import "@/styles/index.scss";
import Header from "@/components/Header";

// function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     // <Theme>
//     //   <App>
//     //     <Header />
//     //     <Main>
//     //       {/* <Component {...pageProps} /> */}
//     //       <GlobalStyle />
//     //     </Main>
//     //     <Subscribe />
//     //     <Footer />
//     //   </App>
//     // </Theme>

//   );
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
