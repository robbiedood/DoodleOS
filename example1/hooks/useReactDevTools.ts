import { useEffect } from "react";

declare global {
  interface Window {
    __REACT_DEVTOOLS_GLOBAL_HOOK__?: Record<string, unknown>;
  }
}

export const useReactDevTools = (): void => {
  useEffect(() => {
    if (
      process.env.NODE_ENV === "development" &&
      !window.__REACT_DEVTOOLS_GLOBAL_HOOK__
    ) {
      const hook: Record<string, unknown> = {};
      Object.defineProperty(window, "__REACT_DEVTOOLS_GLOBAL_HOOK__", {
        configurable: true,
        enumerable: true,
        get(): Record<string, unknown> {
          return hook;
        },
        set(value: Record<string, unknown>) {
          Object.assign(hook, value);
        },
      });
    }
  }, []);
};
