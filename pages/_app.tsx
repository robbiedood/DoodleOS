/**
_app.tsx 是 Next.js 應用程序的自定義 App 組件。它主要負責定義應用程序的根組件，並應用全局的提供者和配置。具體功能包括：

全局提供者：

ViewportProvider：提供視口上下文。
ProcessProvider：提供進程上下文。
FileSystemProvider：提供文件系統上下文。
SessionProvider：提供會話上下文。
MenuProvider：提供菜單上下文。

全局錯誤處理：
使用 ErrorBoundary 捕獲錯誤並顯示替代 UI。
元數據管理：

使用 Metadata 組件管理應用程序的元數據。
全局樣式：

使用 StyledApp 應用全局樣式。
渲染當前頁面：

使用 Next.js 提供的 Component 和 pageProps 渲染當前頁面的組件。

*在 _app.tsx 中，Component 屬性代表當前加載的頁面組件，pageProps 是該頁面所需的屬性。
*當您運行應用並訪問根路徑 / 時，Next.js 會加載 index.tsx，並將其作為 Component 屬性傳遞給 _app.tsx。
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
*/
import { type AppProps } from "next/app"; // 從 next/app 導入 AppProps 類型，用於描述應用程序屬性
import { ErrorBoundary } from "components/pages/ErrorBoundary"; // 導入自定義的錯誤邊界組件
import Metadata from "components/pages/Metadata"; // 導入自定義的元數據組件
import StyledApp from "components/pages/StyledApp"; // 導入自定義的樣式應用程序組件
import { FileSystemProvider } from "contexts/fileSystem"; // 導入文件系統上下文提供者
import { MenuProvider } from "contexts/menu"; // 導入菜單上下文提供者
import { ProcessProvider } from "contexts/process"; // 導入進程上下文提供者
import { SessionProvider } from "contexts/session"; // 導入會話上下文提供者
import { ViewportProvider } from "contexts/viewport"; // 導入視口上下文提供者

// 定義應用程序的主組件
const App = ({ Component, pageProps }: AppProps): React.ReactElement => (
  <ViewportProvider>
    {" "}
    {/* 提供視口上下文 */}
    <ProcessProvider>
      {" "}
      {/* 提供進程上下文 */}
      <FileSystemProvider>
        {" "}
        {/* 提供文件系統上下文 */}
        <SessionProvider>
          {" "}
          {/* 提供會話上下文 */}
          <ErrorBoundary>
            {" "}
            {/* 捕獲錯誤並顯示替代UI */}
            <Metadata /> {/* 管理應用程序的元數據 */}
            <StyledApp>
              {" "}
              {/* 應用全局樣式 */}
              <MenuProvider>
                {" "}
                {/* 提供菜單上下文 */}
                <Component {...pageProps} /> {/* 渲染當前頁面的組件 */}
              </MenuProvider>
            </StyledApp>
          </ErrorBoundary>
        </SessionProvider>
      </FileSystemProvider>
    </ProcessProvider>
  </ViewportProvider>
);

export default App; // 將主組件導出為默認導出
