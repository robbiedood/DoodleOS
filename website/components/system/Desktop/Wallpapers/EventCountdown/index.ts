import { loadFiles } from "utils/functions";

declare global {
  interface Window {
    initializeEventCountdown: (
      canvas: HTMLCanvasElement,
      targetDate: Date
    ) => void;
  }
}
export const ROOT_PATH = "/System/EventCountdown";

const libs = [
  `${ROOT_PATH}/effect.js`,
  `${ROOT_PATH}/piLibs.js`,
  `${ROOT_PATH}/init.js`,
];

const EventCountdown = async (el?: HTMLElement | null): Promise<void> => {
  if (!el) {
    console.error("No element found");
    return;
  }

  await loadFiles(libs);

  const canvas = document.createElement("canvas");
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  const targetDate = new Date("2024-07-27T00:00:00");

  window.initializeEventCountdown(canvas, targetDate);
  el.append(canvas);
};

export default EventCountdown;
