/**

index.tsx 是應用程序的首頁組件。它主要負責渲染應用程序的桌面界面和應用加載器。具體功能包括：

使用自定義 Hooks：

useIFrameFocuser：管理 iframe 的聚焦。
useUrlLoader：根據 URL 加載資源。
useGlobalKeyboardShortcuts：管理全局鍵盤快捷鍵。
useGlobalErrorHandler：管理全局錯誤處理。
渲染組件：

渲染 Desktop 組件作為桌面界面。
在桌面上渲染 Taskbar 和 AppsLoader 組件。
性能優化：

使用 memo 高階組件來優化性能，防止不必要的重渲染。

*/
import { memo } from "react";
import AppsLoader from "components/system/Apps/AppsLoader";
import Desktop from "components/system/Desktop";
import Taskbar from "components/system/Taskbar";
import useGlobalErrorHandler from "hooks/useGlobalErrorHandler";
import useGlobalKeyboardShortcuts from "hooks/useGlobalKeyboardShortcuts";
import useIFrameFocuser from "hooks/useIFrameFocuser";
import useUrlLoader from "hooks/useUrlLoader";

const Index = (): React.ReactElement => {
  useIFrameFocuser();
  useUrlLoader();
  useGlobalKeyboardShortcuts();
  useGlobalErrorHandler();

  return (
    <Desktop>
      <Taskbar />
      <AppsLoader />
    </Desktop>
  );
};

export default memo(Index);
