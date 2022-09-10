import Document, { DocumentContext } from "next/document";
import { ServerStyleSheet } from "styled-components";

// カスタムドキュメント ==> デフォルトで生成されるページの設定のうち、htmlやhead,bodyに関する部分を上書き(ここでは、スタイルを差し込む処理を追加)
// デフォルトのDocumentをMyDocumentで上書き(拡張)
export default class MyDocument extends Document {
  // nextjsのライフサイクル(https://blog.narumium.net/wp-content/uploads/2020/01/next-lifecycle-1.png)
  // getInitialPropsを最初に実行(この中では、_app.js => page.js => _document.js の順で実行されてる)
  // その後にReactのライフサイクルに入る
  static async getInitialProps(ctx: DocumentContext) {
    // styledComponentsから呼び出し
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      // 初期値を流用
      const initialProps = await Document.getInitialProps(ctx);

      // initialPropsに加えて、styleを追加して返す。
      return {
        ...initialProps,
        styles: [
          // もともとのstyle に加えて
          initialProps.styles,
          // styled-componentsのstyle を追加
          sheet.getStyleElement(),
        ],
      };
    } finally {
      sheet.seal();
    }
  }
}
