import LogRocket from "logrocket";
import { useEffect } from "react";

const LOGROCKET_PROJECT_ID = "4rxkij/grove";

export const useLogRocket = (): void => {
  useEffect(() => {
    if (typeof LogRocket.init === "function") {
      LogRocket.init(LOGROCKET_PROJECT_ID);
    }
  }, []);
};
