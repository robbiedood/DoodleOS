import libs from "components/system/Desktop/Wallpapers/EventCountdown";

const libsArray: string[] = [...(libs as unknown as string[])];

globalThis.importScripts(...libsArray);
