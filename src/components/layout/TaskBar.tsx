import SearchBar from "../common/SearchBar";
import type { OpenedAppsType, DesktopItemsType } from "../../App";
import { useState } from "react";
import {
    ChromeIcon,
    VSCodeIcon,
    CopilotIcon,
    AdobeIcon,
    VLCIcon,
    FileExplorerAltIcon,
} from "../../lib/IconLibrary";

const TaskBar = ({
    openedApps,
    handleDoubleClick,
    setOpenedApps,
}: {
    openedApps: OpenedAppsType[];
    handleDoubleClick: (app: DesktopItemsType) => void;
    setOpenedApps: React.Dispatch<React.SetStateAction<OpenedAppsType[]>>;
}) => {
    const [clicked, setClicked] = useState("");
    const [bounceClass, setBounceClass] = useState("");

    const findOpenedApp = (name: string) => {
        return openedApps.find((app) => app.name === name);
    };

    const findActiveApp = () => {
        for (let i = openedApps.length - 1; i >= 0; i--) {
            if (!openedApps[i].isMinimized) {
                return openedApps[i].name;
            }
        }
    };

    const TaskBarItems = [
        {
            name: "Chrome",
            icon: <ChromeIcon />,
            isOpened: findOpenedApp("Chrome") ? true : false,
            isMinimized: findOpenedApp("Chrome")
                ? findOpenedApp("Chrome")?.isMinimized
                : false,
            isActive: findActiveApp() === "Chrome" ? true : false,
        },
        {
            name: "VSCode",
            icon: <VSCodeIcon />,
            isOpened: findOpenedApp("VSCode") ? true : false,
            isMinimized: findOpenedApp("VSCode")
                ? findOpenedApp("VSCode")?.isMinimized
                : false,
            isActive: findActiveApp() === "VSCode" ? true : false,
        },
        {
            name: "Copilot",
            icon: <CopilotIcon />,
            isOpened: findOpenedApp("Copilot") ? true : false,
            isMinimized: findOpenedApp("Copilot")
                ? findOpenedApp("Copilot")?.isMinimized
                : false,
            isActive: findActiveApp() === "Copilot" ? true : false,
        },
        {
            name: "Adobe PDF reader",
            icon: <AdobeIcon />,
            isOpened: findOpenedApp("Adobe PDF reader") ? true : false,
            isMinimized: findOpenedApp("Adobe PDF reader")
                ? findOpenedApp("Adobe PDF reader")?.isMinimized
                : false,
            isActive: findActiveApp() === "Adobe PDF reader" ? true : false,
        },
        {
            name: "VLC media player",
            icon: <VLCIcon />,
            isOpened: findOpenedApp("VLC media player") ? true : false,
            isMinimized: findOpenedApp("VLC media player")
                ? findOpenedApp("VLC media player")?.isMinimized
                : false,
            isActive: findActiveApp() === "VLC media player" ? true : false,
        },
        {
            name: "File Explorer",
            icon: <FileExplorerAltIcon />,
            // <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 48 48">
            // <linearGradient id="Om5yvFr6YrdlC0q2Vet0Ha_WWogVNJDSfZ5_gr1" x1="-7.018" x2="39.387" y1="9.308" y2="33.533" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#fac017"></stop><stop offset=".909" stopColor="#e1ab2d"></stop></linearGradient><path fill="url(#Om5yvFr6YrdlC0q2Vet0Ha_WWogVNJDSfZ5_gr1)" d="M44.5,41h-41C2.119,41,1,39.881,1,38.5v-31C1,6.119,2.119,5,3.5,5h11.597	c1.519,0,2.955,0.69,3.904,1.877L21.5,10h23c1.381,0,2.5,1.119,2.5,2.5v26C47,39.881,45.881,41,44.5,41z"></path><linearGradient id="Om5yvFr6YrdlC0q2Vet0Hb_WWogVNJDSfZ5_gr2" x1="5.851" x2="18.601" y1="9.254" y2="27.39" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#fbfef3"></stop><stop offset=".909" stopColor="#e2e4e3"></stop></linearGradient><path fill="url(#Om5yvFr6YrdlC0q2Vet0Hb_WWogVNJDSfZ5_gr2)" d="M2,25h20V11H4c-1.105,0-2,0.895-2,2V25z"></path><linearGradient id="Om5yvFr6YrdlC0q2Vet0Hc_WWogVNJDSfZ5_gr3" x1="2" x2="22" y1="19" y2="19" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#fbfef3"></stop><stop offset=".909" stopColor="#e2e4e3"></stop></linearGradient><path fill="url(#Om5yvFr6YrdlC0q2Vet0Hc_WWogVNJDSfZ5_gr3)" d="M2,26h20V12H4c-1.105,0-2,0.895-2,2V26z"></path><linearGradient id="Om5yvFr6YrdlC0q2Vet0Hd_WWogVNJDSfZ5_gr4" x1="16.865" x2="44.965" y1="39.287" y2="39.792" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#e3a917"></stop><stop offset=".464" stopColor="#d79c1e"></stop></linearGradient><path fill="url(#Om5yvFr6YrdlC0q2Vet0Hd_WWogVNJDSfZ5_gr4)" d="M1,37.875V38.5C1,39.881,2.119,41,3.5,41h41c1.381,0,2.5-1.119,2.5-2.5v-0.625H1z"></path><linearGradient id="Om5yvFr6YrdlC0q2Vet0He_WWogVNJDSfZ5_gr5" x1="-4.879" x2="35.968" y1="12.764" y2="30.778" gradientUnits="userSpaceOnUse"><stop offset=".34" stopColor="#ffefb2"></stop><stop offset=".485" stopColor="#ffedad"></stop><stop offset=".652" stopColor="#ffe99f"></stop><stop offset=".828" stopColor="#fee289"></stop><stop offset="1" stopColor="#fed86b"></stop></linearGradient><path fill="url(#Om5yvFr6YrdlC0q2Vet0He_WWogVNJDSfZ5_gr5)" d="M44.5,11h-23l-1.237,0.824C19.114,12.591,17.763,13,16.381,13H3.5C2.119,13,1,14.119,1,15.5	v22C1,38.881,2.119,40,3.5,40h41c1.381,0,2.5-1.119,2.5-2.5v-24C47,12.119,45.881,11,44.5,11z"></path><radialGradient id="Om5yvFr6YrdlC0q2Vet0Hf_WWogVNJDSfZ5_gr6" cx="37.836" cy="49.317" r="53.875" gradientUnits="userSpaceOnUse"><stop offset=".199" stopColor="#fec832"></stop><stop offset=".601" stopColor="#fcd667"></stop><stop offset=".68" stopColor="#fdda75"></stop><stop offset=".886" stopColor="#fee496"></stop><stop offset="1" stopColor="#ffe8a2"></stop></radialGradient><path fill="url(#Om5yvFr6YrdlC0q2Vet0Hf_WWogVNJDSfZ5_gr6)" d="M44.5,40h-41C2.119,40,1,38.881,1,37.5v-21C1,15.119,2.119,14,3.5,14h13.256	c1.382,0,2.733-0.409,3.883-1.176L21.875,12H44.5c1.381,0,2.5,1.119,2.5,2.5v23C47,38.881,45.881,40,44.5,40z"></path>
            // </svg>
            isOpened: openedApps.find((app) => app.isFileExplorer === true)
                ? true
                : false,
            isMinimized: openedApps.find((app) => app.isFileExplorer === true)
                ? openedApps
                      .filter((app) => app.isFileExplorer)
                      .every((app) => app.isMinimized)
                : false,
            isActive: openedApps.find(
                (app) =>
                    app.name === findActiveApp() && app.isFileExplorer === true,
            )
                ? true
                : false,
        },
    ];

    const startIcon = (
        <svg
            className={`w-6 rounded-[1.5px] ${clicked === "Start" ? bounceClass : ""}`}
            xmlns="http://www.w3.org/2000/svg"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            imageRendering="optimizeQuality"
            fillRule="evenodd"
            clipRule="evenodd"
            viewBox="0 0 512 512.02"
        >
            <path
                fill="#0094d4"
                d="M0 512.02h242.686V269.335H0V512.02zm0-269.334h242.686V0H0v242.686zm269.314 0H512V0H269.314v242.686zm0 269.334H512V269.335H269.314V512.02z"
            />
        </svg>
    );

    openedApps.forEach((app) => {
        if (app.isFileExplorer || app.name === "") {
            return;
        }

        if (TaskBarItems.find((item) => item.name === app.name)) {
            return;
        }

        TaskBarItems.push({
            name: app.name,
            icon: app.icon,
            isOpened: true,
            isMinimized: app.isMinimized,
            isActive: findActiveApp() === app.name ? true : false,
        });
    });

    const handleClick = (app: Partial<DesktopItemsType>) => {
        setClicked(app.name || "");
        setBounceClass(""); // Remove animation class

        for (const openedApp of openedApps) {
            if (openedApp.name === app.name) {
                if (openedApp.isMinimized) {
                    openedApp.appNavigationControl?.("Restore");
                } else {
                    openedApp.appNavigationControl?.("Minimize");
                }
                return;
            }
        }

        // Execute this only if the loop didn't handle the app
        if (!(app.name === "Start")) {
            handleDoubleClick({
                ...app,
                name: app.name || "",
                icon: app.icon || null,
                rowStart: app.rowStart || 0,
                colStart: app.colStart || 0,
                isFileExplorer: app.isFileExplorer || false,
            });
        }

        // Trigger reflow and then re-add the animation class
        setTimeout(() => {
            setBounceClass("bounce-animation");
        }, 10);
    };

    return (
        <div className="Taskbar flex items-center justify-center gap-2">
            <div
                onClick={() =>
                    handleClick({
                        name: "Start",
                        icon: startIcon,
                        isFileExplorer: false,
                    })
                }
                className={`flex items-center p-2 transitionOne rounded-sm hover:bg-gray-800`}
            >
                {startIcon}
            </div>
            <SearchBar />
            {TaskBarItems.map((item, index) => (
                <div
                    onClick={() => handleClick(item)}
                    key={index}
                    className={`flex relative items-center p-1 transitionOne rounded-sm hover:bg-gray-800 ${item.isOpened && !item.isMinimized && item.isActive ? "bg-gray-700" : ""}`}
                >
                    <div
                        className={`${clicked === item.name ? (item.isOpened ? (item.isMinimized ? "bounce-bottom-animation" : "bounce-top-animation") : bounceClass) : ""}`}
                    >
                        {item.icon}
                    </div>
                    <div
                        className={`absolute bottom-[1px] left-1/2 transform -translate-x-1/2 h-[3px] rounded-full transitionOne ${item.isMinimized ? "bg-gray-400 w-1.5" : item.isOpened ? (item.isActive ? "bg-blue-400 w-4" : "bg-gray-400 w-1.5") : "w-0"}`}
                    ></div>
                </div>
            ))}
        </div>
    );
};

export default TaskBar;
