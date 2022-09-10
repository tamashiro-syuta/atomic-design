import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme";

// カスタムアップ => 全ページに共通する処理をページ初期化時に追加するもの(グローバルCSSやページレイアウトのレイアウトの維持など)
// カスタムドキュメント ===> ページ全体の構成(hmtl要素やhead要素)を担う
// カスタムアップ ===> ページ初期化時の処理を担う
function MyApp({ Component, pageProps }: AppProps) {
  // styled-componentsでテーマを使用するためにThemeProviderを置く
  return (
    // themeを設定することで、それぞれの値をContext経由で参照可能になる
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
