/**
 _document.tsx 是Next.js應用程序中用來自定義HTML文檔結構的文件。它允許您覆蓋默認的文檔結構，並在服務器端渲染過程中插入自定義的設置和樣式。

具體功能
服務器端渲染樣式：

使用 styled-components 的 ServerStyleSheet 來收集和注入服務器端渲染的樣式。
自定義 HTML 結構：

定義自定義的HTML結構，包括 html、head 和 body 標籤。
靜態資源加載：

確保Next.js加載的靜態資源（如腳本和樣式）被正確注入到HTML文檔中。
 */
// 從 next/document 導入所需的模塊和類型
import NextDocument, {
  type DocumentContext,
  type DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components"; // 從 styled-components 導入 ServerStyleSheet 用於服務器端渲染樣式
import { DEFAULT_LOCALE } from "utils/constants"; // 從 utils/constants 導入默認語言設置

// 定義一個函數，用於處理 styled-components 的樣式收集
const withStyledComponents = async (
  ctx: DocumentContext
): Promise<DocumentInitialProps> => {
  // 保存原始的 renderPage 方法
  const { renderPage } = ctx;
  // 創建一個新的 ServerStyleSheet 實例
  const sheet = new ServerStyleSheet();

  try {
    // 自定義 ctx.renderPage 方法，用於收集應用程序的樣式
    ctx.renderPage = () =>
      renderPage({
        // 增強 App 組件，使其在渲染時收集樣式
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      });

    // 獲取初始的文檔屬性，包括樣式
    const { styles, ...initialProps } = await NextDocument.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: [styles, sheet.getStyleElement()], // 返回增強的文檔屬性，包含原始屬性和收集到的樣式
    };
  } finally {
    sheet.seal(); // 確保在渲染完成後釋放資源
  }
};

// 定義自定義 Document 類，繼承自 NextDocument
class Document extends NextDocument {
  // 定義 getInitialProps 靜態方法，用於獲取初始的文檔屬性
  public static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    // 調用 withStyledComponents 函數以獲取初始屬性
    return withStyledComponents(ctx);
  }

  // render 方法定義 HTML 文檔的結構
  public render(): React.JSX.Element {
    return (
      // 設置 HTML 標籤的語言屬性
      <Html lang={DEFAULT_LOCALE}>
        <Head />
        <body>
          {/* Main 組件會渲染應用程序的主要內容 */}
          <Main />
          {/* NextScript 組件會渲染 Next.js 需要的腳本 */}
          <NextScript />
        </body>
      </Html>
    );
  }
}

// 將自定義 Document 類導出
export default Document;
