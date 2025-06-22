import { Rnd } from "react-rnd";
import {
    BsArrowRightShort,
    BsArrowLeftShort,
    BsArrowUpShort,
} from "react-icons/bs";
import { GrRefresh } from "react-icons/gr";
import type { OpenedAppsType } from "../../App";
import { useEffect, useState, useCallback, useRef } from "react";
import type { appState } from "../../App";
import { appRepositionByIndex } from "../../lib/AppReposition";
import { MinimizeIcon, MaximizeIcon, CloseIcon } from "../../lib/IconLibrary";

const explorerNavigation = [
    {
        name: "Back",
        icon: <BsArrowLeftShort size={25} />,
    },
    {
        name: "Forward",
        icon: <BsArrowRightShort size={25} />,
    },
    {
        name: "Up",
        icon: <BsArrowUpShort size={25} />,
    },
    {
        name: "Refresh",
        icon: <GrRefresh />,
    },
];

const StandardAppFace = ({
    appIndex,
    setOpenedApps,
    positionUpdated,
    openedApp,
    openedApps,
}: {
    appIndex: number;
    setOpenedApps: React.Dispatch<React.SetStateAction<OpenedAppsType[]>>;
    positionUpdated: appState | null;
    openedApp: OpenedAppsType;
    openedApps: OpenedAppsType[];
}) => {
    const [isMaximized, setIsMaximized] = useState(false);
    const [isMinimizing, setIsMinimizing] = useState(false);
    const rndRef = useRef<Rnd | null>(null);

    const Navigation = [
        {
            name: openedApp.isMinimized ? "Restore" : "Minimize",
            icon: <MinimizeIcon />,
        },
        {
            name: "Maximize",
            icon: <MaximizeIcon isMaximized={isMaximized} />,
        },
        {
            name: "Close",
            icon: <CloseIcon />,
        },
    ];

    const handleAppReposition = (event: React.MouseEvent<HTMLDivElement>) => {
        const appIndexAttr = event.currentTarget.getAttribute("data-app-name");

        const appIndex = parseInt(appIndexAttr!, 10);

        if (appIndex === openedApps.length - 1) {
            return;
        }

        const currentApp = rndRef.current?.resizableElement.current;
        if (!currentApp) {
            return;
        }

        const { x, y, width, height } = currentApp.getBoundingClientRect();

        appRepositionByIndex(appIndex, setOpenedApps, { x, y, width, height });
    };

    const handleClick = useCallback(
        (name: string) => {
            if (name === "Close") {
                setOpenedApps((prevItems) => {
                    const updatedItems = prevItems.map((item, i) =>
                        i === appIndex
                            ? {
                                  name: "",
                                  icon: "",
                                  isFileExplorer: false,
                                  isMinimized: false,
                                  positionUpdated: null,
                                  appNavigationControl: null,
                              }
                            : item,
                    );
                    return updatedItems.every((item) => !item.name)
                        ? []
                        : updatedItems;
                });
            } else if (name === "Maximize") {
                setIsMaximized((prev) => !prev);
            } else if (name === "Minimize") {
                setIsMinimizing(true);
                setOpenedApps((prev) =>
                    prev.map((item, i) =>
                        i === appIndex ? { ...item, isMinimized: true } : item,
                    ),
                );

                const currentApp = rndRef.current?.resizableElement.current;
                if (!currentApp) {
                    return;
                }

                const { x, y, width, height } =
                    currentApp.getBoundingClientRect();

                appRepositionByIndex(appIndex, setOpenedApps, {
                    x,
                    y,
                    width,
                    height,
                });
            } else if (name === "Restore") {
                setIsMinimizing(true);
                setOpenedApps((prev) =>
                    prev.map((item, i) =>
                        i === appIndex ? { ...item, isMinimized: false } : item,
                    ),
                );
                appRepositionByIndex(appIndex, setOpenedApps, null);
            }
        },
        [appIndex, setOpenedApps],
    );

    useEffect(() => {
        if (isMinimizing) {
            setTimeout(() => {
                setIsMinimizing(false);
            }, 150);
        }
    }, [isMinimizing]);

    useEffect(() => {
        setOpenedApps((prevItems) => {
            const updatedItems = prevItems.map((item, i) =>
                i === appIndex
                    ? {
                          ...item,
                          appNavigationControl: handleClick,
                      }
                    : item,
            );

            return updatedItems;
        });
    }, [appIndex, handleClick, setOpenedApps]);

    const minimizedWidth = 1;
    const minimizedHeight = 1;
    const minimizedX = (window.innerWidth - minimizedWidth) / 2;
    const minimizedY = window.innerHeight - minimizedHeight + 50;

    const handleAppMaximize = () => {
        handleClick("Maximize");
    };

    return (
        <Rnd
            ref={rndRef}
            onClick={handleAppReposition}
            size={
                openedApp.isMinimized
                    ? { width: minimizedWidth, height: minimizedHeight }
                    : isMaximized
                      ? { width: window.innerWidth, height: window.innerHeight }
                      : undefined
            }
            position={
                openedApp.isMinimized
                    ? { x: minimizedX, y: minimizedY }
                    : isMaximized
                      ? { x: 0, y: 0 }
                      : undefined
            }
            default={
                !positionUpdated
                    ? {
                          width: 580,
                          height: 400,
                          x:
                              window.innerWidth / 2 -
                              200 +
                              ((appIndex % 7) - 1) * 25 +
                              Math.floor(appIndex / 7) * 25,
                          y:
                              window.innerHeight / 2 -
                              200 +
                              ((appIndex % 7) - 1) * 25,
                      }
                    : {
                          width: positionUpdated.width,
                          height: positionUpdated.height,
                          x: positionUpdated.x,
                          y: positionUpdated.y,
                      }
            }
            disableDragging={isMaximized}
            disableresizing={
                isMaximized.toString() || openedApp.isMinimized.toString()
            }
            enableResizing={{
                top: !isMaximized,
                right: !isMaximized,
                bottom: !isMaximized,
                left: !isMaximized,
                topRight: !isMaximized,
                bottomRight: !isMaximized,
                bottomLeft: !isMaximized,
                topLeft: !isMaximized,
            }}
            resizeHandleStyles={{
                top: { cursor: "ns-resize" },
                right: { cursor: "ew-resize" },
                bottom: { cursor: "ns-resize" },
                left: { cursor: "ew-resize" },
                topRight: { cursor: "nesw-resize" },
                bottomRight: { cursor: "nwse-resize" },
                bottomLeft: { cursor: "nesw-resize" },
                topLeft: { cursor: "nwse-resize" },
            }}
            data-app-name={appIndex}
            style={{ cursor: "default" }}
            className={`bg-[#222222] relative border-[1.5px] border-[#3b3a3a] overflow-hidden min-w-60 min-h-60 origin-bottom ${isMaximized || isMinimizing ? "transitionOne" : "rounded-lg"}`}
        >
            <div
                onDoubleClick={handleAppMaximize}
                className={`absolute top-0 left-0 flex items-center justify-between w-full h-9.5 bg-[#222222] text-[#ededed] cursor-auto ${isMaximized || isMinimizing ? "" : "rounded-t-lg"}`}
            >
                <div className="flex items-center ms-2">
                    <div className="w-5.5 h-5.5 flex items-center justify-center">
                        {openedApp.icon}
                    </div>
                    <p className="text-white text-xs ml-2">{openedApp.name}</p>
                </div>
                <div
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center ms-auto h-full"
                >
                    {Navigation.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                handleClick(item.name);
                            }}
                            className={`px-[17px] py-2 transitionOne h-full ${item.name === "Close" ? `hover:bg-red-500/90 ${isMaximized || openedApp.isMinimized ? "" : "rounded-tr-lg"}` : "hover:bg-white/5"}`}
                        >
                            {item.icon}
                        </button>
                    ))}
                </div>
            </div>

            {!openedApp.isMinimized && (
                <div
                    className="relative mt-9.5 w-full h-[calc(100%-38px)] bg-[#171717] text-[#ededed] cursor-auto rounded-b-lg"
                    onMouseDown={(e) => e.stopPropagation()}
                >
                    {openedApp.isFileExplorer && (
                        <div className="w-full h-12.5 bg-[#2d2d2d] border-b-[1.5px] border-[#3b3a3a] flex items-center px-3">
                            <div className="flex items-center justify-between flex-shrink-0 w-44 gap-2">
                                {explorerNavigation.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`transitionOne rounded hover:bg-white/5 ${item.name === "Refresh" ? "p-2" : "p-1"}`}
                                    >
                                        {item.icon}
                                    </div>
                                ))}
                            </div>
                            <div className="flex items-center justify-between flex-1 gap-2 w-10 h-8 ms-4 bg-[#3b3b3b] rounded"></div>
                        </div>
                    )}
                    <div className="absolute bottom-0 left-0 w-full h-6.5 bg-[#222222] text-[#ededed] cursor-auto rounded-b-lg"></div>
                </div>
            )}
        </Rnd>
    );
};

export default StandardAppFace;
