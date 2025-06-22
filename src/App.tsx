import darkWallpaper from "./assets/dark-wallpaper.jpg";
import TaskBar from "./components/layout/TaskBar";
import { useState, useEffect, useRef } from "react";
import AppIcon from "./components/common/AppIcon";
import StandardAppFace from "./components/common/StandardAppFace";
import { appRepositionByName } from "./lib/AppReposition";
import { useAppContext } from "./contexts/appContext";
import { FileExplorerIcon, MyPcIcon, RecycleBinIcon } from "./lib/IconLibrary";

export interface appState {
    x: number;
    y: number;
    width: number;
    height: number;
}

export interface DesktopItemsType {
    name: string;
    icon: React.ReactNode;
    rowStart: number;
    colStart: number;
    isFileExplorer: boolean;
}

export interface OpenedAppsType {
    name: string;
    icon: React.ReactNode;
    isFileExplorer: boolean;
    isMinimized: boolean;
    positionUpdated: appState | null;
    appNavigationControl: ((name: string) => void) | null;
}

interface SelectionRect {
    startX: number;
    startY: number;
    endX: number;
    endY: number;
}

const Desktop = () => {
    const [isFullScreen, setIsFullScreen] = useState(true);
    const { openedApps, setOpenedApps, fileStructure, setFileStructure } = useAppContext();
    const [clicked, setClicked] = useState("");
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const [isSelecting, setIsSelecting] = useState(false);
    const [selectionRect, setSelectionRect] = useState<SelectionRect>({
        startX: 0,
        startY: 0,
        endX: 0,
        endY: 0,
    });
    const [lastClickTime, setLastClickTime] = useState(0);
    const desktopRef = useRef<HTMLDivElement>(null);
    const selectionStartRef = useRef({ x: 0, y: 0 });

    console.log(fileStructure)

    const DesktopItems: DesktopItemsType[] = [
        {
            name: "My Pc",
            icon: <MyPcIcon isFullScreen={isFullScreen} />,
            rowStart: 1,
            colStart: 1,
            isFileExplorer: true,
        },
        {
            name: "Recycle Bin",
            icon: <RecycleBinIcon isFullScreen={isFullScreen} />,
            rowStart: 2,
            colStart: 1,
            isFileExplorer: true,
        },
        {
            name: "Gitdocs_ai",
            icon: <FileExplorerIcon isFullScreen={isFullScreen} />,
            rowStart: 3,
            colStart: 1,
            isFileExplorer: true,
        },
        {
            name: "windows_11",
            icon: <FileExplorerIcon isFullScreen={isFullScreen} />,
            rowStart: 4,
            colStart: 1,
            isFileExplorer: true,
        },
        {
            name: "semester_management_web",
            icon: <FileExplorerIcon isFullScreen={isFullScreen} />,
            rowStart: 5,
            colStart: 1,
            isFileExplorer: true,
        },
    ];

    function handleSingleClick(name: string) {
        // Clear selection if clicking on an item
        setSelectedItems([]);
        setClicked(name);
    }

    function handleDoubleClick(app: DesktopItemsType) {
        setClicked("");
        setSelectedItems([]);
        if (
            openedApps.find(
                (openedApp) =>
                    openedApp.name === app.name &&
                    (app.name === "My Pc" || app.name === "Recycle Bin"),
            )
        ) {
            appRepositionByName(app.name, setOpenedApps, openedApps);
            return;
        }
        setOpenedApps([
            ...openedApps,
            {
                name: app.name,
                icon: app.icon,
                isFileExplorer: app.isFileExplorer,
                isMinimized: false,
                positionUpdated: null,
                appNavigationControl: null,
            },
        ]);
    }

    const handleDesktopMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        // Prevent selection if clicking on an app icon or opened app
        if (
            (e.target as HTMLElement).closest("[data-app-icon]") ||
            (e.target as HTMLElement).closest("[data-opened-app]") ||
            (e.target as HTMLElement).closest("[data-item-name]")
        ) {
            return;
        }

        const currentTime = Date.now();
        const rect = desktopRef.current?.getBoundingClientRect();

        if (!rect) return;

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Check for double click on empty area
        if (currentTime - lastClickTime < 300) {
            // Double click - start selection
            setIsSelecting(true);
            selectionStartRef.current = { x, y };
            setSelectionRect({
                startX: x,
                startY: y,
                endX: x,
                endY: y,
            });
        } else {
            // Single click - clear selection
            setSelectedItems([]);
            setClicked("");
        }

        setLastClickTime(currentTime);
    };

    const handleDesktopMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isSelecting || !desktopRef.current) return;

        const rect = desktopRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        setSelectionRect({
            startX: selectionStartRef.current.x,
            startY: selectionStartRef.current.y,
            endX: x,
            endY: y,
        });

        const selectedItemNames: string[] = [];

        const minX = Math.min(selectionStartRef.current.x, x);
        const maxX = Math.max(selectionStartRef.current.x, x);
        const minY = Math.min(selectionStartRef.current.y, y);
        const maxY = Math.max(selectionStartRef.current.y, y);

        DesktopItems.forEach((item) => {
            const itemElement = document.querySelector(
                `[data-item-name="${item.name}"]`,
            );
            if (itemElement) {
                const itemRect = itemElement.getBoundingClientRect();
                const itemLeft = itemRect.left - rect.left;
                const itemTop = itemRect.top - rect.top;
                const itemRight = itemLeft + itemRect.width;
                const itemBottom = itemTop + itemRect.height;

                if (
                    itemRight >= minX &&
                    itemLeft <= maxX &&
                    itemBottom >= minY &&
                    itemTop <= maxY
                ) {
                    selectedItemNames.push(item.name);
                }
            }
        });

        setSelectedItems(selectedItemNames);
    };

    const handleDesktopMouseUp = () => {
        setIsSelecting(false);
    };

    const getSelectionStyle = () => {
        const minX = Math.min(selectionRect.startX, selectionRect.endX);
        const minY = Math.min(selectionRect.startY, selectionRect.endY);
        const width = Math.abs(selectionRect.endX - selectionRect.startX);
        const height = Math.abs(selectionRect.endY - selectionRect.startY);

        return {
            left: minX,
            top: minY,
            width,
            height,
        };
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Enter" && selectedItems.length > 0) {
                const itemsToOpen = DesktopItems.filter((item) =>
                    selectedItems.includes(item.name),
                );
                itemsToOpen.forEach((item) => handleDoubleClick(item));
                setSelectedItems([]);
            } else if (e.key === "Escape") {
                setSelectedItems([]);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedItems]);

    useEffect(() => {
        const checkFullScreen = () => {
            setIsFullScreen(window.innerHeight === screen.height);
        };

        checkFullScreen();
        window.addEventListener("resize", checkFullScreen);

        return () => {
            window.removeEventListener("resize", checkFullScreen);
        };
    }, []);

    return (
        <>
            <div
                className={`fixed h-full w-full inset-0 -z-10 transform user-select-none ${
                    !isFullScreen ? "-translate-y-14" : ""
                }`}
            >
                <img src={darkWallpaper} alt="darkWallpaper" />
            </div>
            <div
                ref={desktopRef}
                className={`fixed pt-1.5 inset-0 z-0 h-[calc(100vh-48px)] grid grid-cols-17 grid-rows-7 ${
                    isFullScreen
                        ? "gap-y-3 h-[calc(100vh-108px)]"
                        : "gap-y-5 h-[calc(100vh-50px)]"
                }`}
                onMouseDown={handleDesktopMouseDown}
                onPointerDown={handleDesktopMouseDown}
                onMouseMove={handleDesktopMouseMove}
                onMouseUp={handleDesktopMouseUp}
                onMouseLeave={handleDesktopMouseUp}
            >
                {DesktopItems.map((item, index) => (
                    <AppIcon
                        key={index}
                        item={item}
                        handleSingleClick={handleSingleClick}
                        handleDoubleClick={handleDoubleClick}
                        clicked={clicked}
                        isSelected={selectedItems.includes(item.name)}
                        isSelecting={isSelecting}
                    />
                ))}

                {/* Selection Rectangle */}
                {isSelecting && (
                    <div
                        className="absolute border border-[#005A9E] bg-[#0078D7]/30 pointer-events-none z-20"
                        style={getSelectionStyle()}
                    />
                )}

                {openedApps.length > 0 && (
                    <div
                        className="absolute z-10 transitionOne fade-in"
                        data-opened-app
                    >
                        {openedApps.map(
                            (app, index) =>
                                app.name !== "" && (
                                    <StandardAppFace
                                        key={index}
                                        appIndex={index}
                                        positionUpdated={app.positionUpdated}
                                        setOpenedApps={setOpenedApps}
                                        openedApp={app}
                                        openedApps={openedApps}
                                    />
                                ),
                        )}
                    </div>
                )}
            </div>

            <TaskBar
                openedApps={openedApps}
                handleDoubleClick={handleDoubleClick}
                setOpenedApps={setOpenedApps}
            />
        </>
    );
};

export default Desktop;
