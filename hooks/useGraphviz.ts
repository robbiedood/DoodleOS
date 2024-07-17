import { useState, useCallback } from "react";

interface UseGraphvizReturn {
  dot: string;
  updateDot: (newDot: string) => void;
}

export const useGraphviz = (initialDot: string): UseGraphvizReturn => {
  const [dot, setDot] = useState(initialDot);

  const updateDot = useCallback((newDot: string) => {
    setDot(newDot);
  }, []);

  return { dot, updateDot };
};
