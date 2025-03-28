import type { AppProps } from "next/app";
import Header from "components/Header";
import GlobalStyle from "styles/GlobalStyle";
import Theme from "styles/Theme";
import styled from "styled-components";
import { rem } from "polished";
import Footer from "components/Footer/Footer";
import Subscribe from "components/Subscribe";
import React from "react";

import "styles/swiper.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <App>
        <Header />
        <Main>
          <Component {...pageProps} />
          <GlobalStyle />
        </Main>
        <Subscribe />
        <Footer />
      </App>
    </Theme>
  );
}

const App = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-width: max-content;
`;

const Main = styled.main`
  padding-bottom: ${rem(100)};
`;

export default MyApp;
