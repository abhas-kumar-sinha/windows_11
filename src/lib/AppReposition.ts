import type { OpenedAppsType } from "../App";

export interface appState {
    x: number;
    y: number;
    width: number;
    height: number;
}

export const appRepositionByIndex = (
    index: number,
    setOpenedApps: React.Dispatch<React.SetStateAction<OpenedAppsType[]>>,
    position: appState | null,
) => {
    // More explicit checking
    if (index !== null && !isNaN(index)) {
        setOpenedApps((prev) => {
            if (index >= 0 && index < prev.length) {
                const appData = {
                    ...prev[index],
                    positionUpdated: position
                        ? {
                              x: position?.x || 0,
                              y: position?.y || 0,
                              width: position?.width || 580,
                              height: position?.height || 400,
                          }
                        : prev[index].positionUpdated,
                };

                const updatedApps = [...prev];
                updatedApps[index] = {
                    name: "",
                    icon: "",
                    isFileExplorer: false,
                    isMinimized: false,
                    positionUpdated: null,
                    appNavigationControl: null,
                };

                return [...updatedApps, appData];
            }

            return prev;
        });
    }
};

export const appRepositionByName = (
    name: string,
    setOpenedApps: React.Dispatch<React.SetStateAction<OpenedAppsType[]>>,
    openedApps: OpenedAppsType[],
) => {
    const index = openedApps.findIndex((app) => app.name === name);

    appRepositionByIndex(index, setOpenedApps, null);
};
