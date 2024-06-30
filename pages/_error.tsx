/**
 _error.tsx 是Next.js應用程序中的自定義錯誤頁面。當應用程序遇到錯誤（例如404或500錯誤）時，Next.js會渲染這個頁面來顯示錯誤信息。

具體功能
顯示錯誤狀態碼：
顯示錯誤的狀態碼，讓用戶知道發生了什麼錯誤。
 */
import { type ErrorProps } from "next/error";

const PageError = ({ statusCode = 0 }: ErrorProps): React.ReactElement => (
  <>Error status code: {statusCode}</>
);

export default PageError;
