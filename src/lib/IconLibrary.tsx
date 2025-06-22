import recycleBinEmpty from "../assets/recycle-bin-empty.png";
import recycleBinFull from "../assets/recycle-bin-full.png";
import { useAppContext } from "../contexts/appContext";
import ReduceIcon from "../assets/reduce.png";
import FileExplorer from "../assets/file_explorer.png";

export const FileExplorerIcon = ({
    isFullScreen,
}: {
    isFullScreen: boolean;
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width={isFullScreen ? "46" : "40"}
            height={isFullScreen ? "46" : "40"}
            viewBox="0 0 48 48"
        >
            <linearGradient
                id="Om5yvFr6YrdlC0q2Vet0Ha_WWogVNJDSfZ5_gr1"
                x1="-7.018"
                x2="39.387"
                y1="9.308"
                y2="33.533"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset="0" stopColor="#fac017"></stop>
                <stop offset=".909" stopColor="#e1ab2d"></stop>
            </linearGradient>
            <path
                fill="url(#Om5yvFr6YrdlC0q2Vet0Ha_WWogVNJDSfZ5_gr1)"
                d="M44.5,41h-41C2.119,41,1,39.881,1,38.5v-31C1,6.119,2.119,5,3.5,5h11.597	c1.519,0,2.955,0.69,3.904,1.877L21.5,10h23c1.381,0,2.5,1.119,2.5,2.5v26C47,39.881,45.881,41,44.5,41z"
            ></path>
            <linearGradient
                id="Om5yvFr6YrdlC0q2Vet0Hb_WWogVNJDSfZ5_gr2"
                x1="5.851"
                x2="18.601"
                y1="9.254"
                y2="27.39"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset="0" stopColor="#fbfef3"></stop>
                <stop offset=".909" stopColor="#e2e4e3"></stop>
            </linearGradient>
            <path
                fill="url(#Om5yvFr6YrdlC0q2Vet0Hb_WWogVNJDSfZ5_gr2)"
                d="M2,25h20V11H4c-1.105,0-2,0.895-2,2V25z"
            ></path>
            <linearGradient
                id="Om5yvFr6YrdlC0q2Vet0Hc_WWogVNJDSfZ5_gr3"
                x1="2"
                x2="22"
                y1="19"
                y2="19"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset="0" stopColor="#fbfef3"></stop>
                <stop offset=".909" stopColor="#e2e4e3"></stop>
            </linearGradient>
            <path
                fill="url(#Om5yvFr6YrdlC0q2Vet0Hc_WWogVNJDSfZ5_gr3)"
                d="M2,26h20V12H4c-1.105,0-2,0.895-2,2V26z"
            ></path>
            <linearGradient
                id="Om5yvFr6YrdlC0q2Vet0Hd_WWogVNJDSfZ5_gr4"
                x1="16.865"
                x2="44.965"
                y1="39.287"
                y2="39.792"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset="0" stopColor="#e3a917"></stop>
                <stop offset=".464" stopColor="#d79c1e"></stop>
            </linearGradient>
            <path
                fill="url(#Om5yvFr6YrdlC0q2Vet0Hd_WWogVNJDSfZ5_gr4)"
                d="M1,37.875V38.5C1,39.881,2.119,41,3.5,41h41c1.381,0,2.5-1.119,2.5-2.5v-0.625H1z"
            ></path>
            <linearGradient
                id="Om5yvFr6YrdlC0q2Vet0He_WWogVNJDSfZ5_gr5"
                x1="-4.879"
                x2="35.968"
                y1="12.764"
                y2="30.778"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset=".34" stopColor="#ffefb2"></stop>
                <stop offset=".485" stopColor="#ffedad"></stop>
                <stop offset=".652" stopColor="#ffe99f"></stop>
                <stop offset=".828" stopColor="#fee289"></stop>
                <stop offset="1" stopColor="#fed86b"></stop>
            </linearGradient>
            <path
                fill="url(#Om5yvFr6YrdlC0q2Vet0He_WWogVNJDSfZ5_gr5)"
                d="M44.5,11h-23l-1.237,0.824C19.114,12.591,17.763,13,16.381,13H3.5C2.119,13,1,14.119,1,15.5	v22C1,38.881,2.119,40,3.5,40h41c1.381,0,2.5-1.119,2.5-2.5v-24C47,12.119,45.881,11,44.5,11z"
            ></path>
            <radialGradient
                id="Om5yvFr6YrdlC0q2Vet0Hf_WWogVNJDSfZ5_gr6"
                cx="37.836"
                cy="49.317"
                r="53.875"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset=".199" stopColor="#fec832"></stop>
                <stop offset=".601" stopColor="#fcd667"></stop>
                <stop offset=".68" stopColor="#fdda75"></stop>
                <stop offset=".886" stopColor="#fee496"></stop>
                <stop offset="1" stopColor="#ffe8a2"></stop>
            </radialGradient>
            <path
                fill="url(#Om5yvFr6YrdlC0q2Vet0Hf_WWogVNJDSfZ5_gr6)"
                d="M44.5,40h-41C2.119,40,1,38.881,1,37.5v-21C1,15.119,2.119,14,3.5,14h13.256	c1.382,0,2.733-0.409,3.883-1.176L21.875,12H44.5c1.381,0,2.5,1.119,2.5,2.5v23C47,38.881,45.881,40,44.5,40z"
            ></path>
        </svg>
    );
};

export const MyPcIcon = ({ isFullScreen }: { isFullScreen: boolean }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 61 61"
            width="64"
            height={isFullScreen ? "64" : "54"}
        >
            <rect
                x="8"
                y="10"
                width="48"
                height="32"
                rx="3"
                ry="3"
                fill="url(#gradient)"
                stroke="#2d2d2d"
                strokeWidth="1.5"
            />
            <rect
                x="24"
                y="44"
                width="16"
                height="3"
                fill="#c0c0c0"
                rx="1"
                ry="1"
            />
            <rect
                x="20"
                y="48"
                width="24"
                height="3"
                fill="#c0c0c0"
                rx="1"
                ry="1"
            />
            <defs>
                <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                >
                    <stop
                        offset="0%"
                        style={{ stopColor: "#56ccf2", stopOpacity: 1 }}
                    />
                    <stop
                        offset="100%"
                        style={{ stopColor: "#2f80ed", stopOpacity: 1 }}
                    />
                </linearGradient>
            </defs>
        </svg>
    );
};

export const RecycleBinIcon = ({ isFullScreen }: { isFullScreen: boolean }) => {
    const { deletedItems } = useAppContext();
    return (
        <img
            className={isFullScreen ? "w-12" : "w-11"}
            draggable="false"
            src={deletedItems.length >= 0 ? recycleBinFull : recycleBinEmpty}
            alt="recycleBinEmpty"
        />
    );
};

export const SearchGlass = () => {
    return (
        <svg
            className="w-4 ms-1.5"
            version="1.1"
            id="Layer_1"
            fill="#ededed"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 122.879 119.799"
            enableBackground="new 0 0 122.879 119.799"
            xmlSpace="preserve"
        >
            <g>
                <path d="M49.988,0h0.016v0.007C63.803,0.011,76.298,5.608,85.34,14.652c9.027,9.031,14.619,21.515,14.628,35.303h0.007v0.033v0.04 h-0.007c-0.005,5.557-0.917,10.905-2.594,15.892c-0.281,0.837-0.575,1.641-0.877,2.409v0.007c-1.446,3.66-3.315,7.12-5.547,10.307 l29.082,26.139l0.018,0.016l0.157,0.146l0.011,0.011c1.642,1.563,2.536,3.656,2.649,5.78c0.11,2.1-0.543,4.248-1.979,5.971 l-0.011,0.016l-0.175,0.203l-0.035,0.035l-0.146,0.16l-0.016,0.021c-1.565,1.642-3.654,2.534-5.78,2.646 c-2.097,0.111-4.247-0.54-5.971-1.978l-0.015-0.011l-0.204-0.175l-0.029-0.024L78.761,90.865c-0.88,0.62-1.778,1.209-2.687,1.765 c-1.233,0.755-2.51,1.466-3.813,2.115c-6.699,3.342-14.269,5.222-22.272,5.222v0.007h-0.016v-0.007 c-13.799-0.004-26.296-5.601-35.338-14.645C5.605,76.291,0.016,63.805,0.007,50.021H0v-0.033v-0.016h0.007 c0.004-13.799,5.601-26.296,14.645-35.338C23.683,5.608,36.167,0.016,49.955,0.007V0H49.988L49.988,0z M50.004,11.21v0.007h-0.016 h-0.033V11.21c-10.686,0.007-20.372,4.35-27.384,11.359C15.56,29.578,11.213,39.274,11.21,49.973h0.007v0.016v0.033H11.21 c0.007,10.686,4.347,20.367,11.359,27.381c7.009,7.012,16.705,11.359,27.403,11.361v-0.007h0.016h0.033v0.007 c10.686-0.007,20.368-4.348,27.382-11.359c7.011-7.009,11.358-16.702,11.36-27.4h-0.006v-0.016v-0.033h0.006 c-0.006-10.686-4.35-20.372-11.358-27.384C70.396,15.56,60.703,11.213,50.004,11.21L50.004,11.21z" />
            </g>
        </svg>
    );
};

export const MinimizeIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16.933333 16.933334"
            height="12"
            width="12"
        >
            <g>
                <path
                    id="path888"
                    fill="white"
                    d="M 1.8515625,7.8046875 A 0.66145998,0.66145998 0 0 0 1.1914062,8.4667969 0.66145998,0.66145998 0 0 0 1.8515625,9.1289063 H 15.082031 A 0.66145998,0.66145998 0 0 0 15.742188,8.4667969 0.66145998,0.66145998 0 0 0 15.082031,7.8046875 Z"
                />
            </g>
        </svg>
    );
};

export const MaximizeIcon = ({ isMaximized }: { isMaximized: boolean }) => {
    return isMaximized ? (
        <img className="w-[11px]" src={ReduceIcon} alt="reduce" />
    ) : (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16.933333 16.933334"
            height="11.6"
            width="11.6"
        >
            <g>
                <path
                    id="path841"
                    fill="white"
                    d="M 3.1757812 1.1914062 C 2.087675 1.1914062 1.1914062 2.087675 1.1914062 3.1757812 L 1.1914062 13.757812 C 1.1914068 14.845918 2.0876754 15.742188 3.1757812 15.742188 L 13.757812 15.742188 C 14.845918 15.742187 15.742187 14.845918 15.742188 13.757812 L 15.742188 3.1757812 C 15.742188 2.0876754 14.845918 1.1914068 13.757812 1.1914062 L 3.1757812 1.1914062 z M 3.1757812 2.5136719 L 13.757812 2.5136719 C 14.13096 2.5136721 14.419922 2.8026342 14.419922 3.1757812 L 14.419922 13.757812 C 14.419922 14.130959 14.130959 14.419922 13.757812 14.419922 L 3.1757812 14.419922 C 2.8026342 14.419922 2.5136721 14.13096 2.5136719 13.757812 L 2.5136719 3.1757812 C 2.5136719 2.802634 2.802634 2.5136719 3.1757812 2.5136719 z "
                />
            </g>
        </svg>
    );
};

export const CloseIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16.933333 16.933334"
            height="13"
            width="13"
        >
            <g>
                <path
                    id="path839"
                    fill="white"
                    d="M 2.4863281 1.8535156 A 0.66145998 0.66145998 0 0 0 2.0449219 2.0449219 A 0.66145998 0.66145998 0 0 0 2.0449219 2.9804688 L 7.53125 8.4648438 L 2.0449219 13.951172 A 0.66145998 0.66145998 0 0 0 2.0449219 14.886719 A 0.66145998 0.66145998 0 0 0 2.9804688 14.886719 L 8.4648438 9.4023438 L 13.951172 14.886719 A 0.66145998 0.66145998 0 0 0 14.886719 14.886719 A 0.66145998 0.66145998 0 0 0 14.886719 13.951172 L 9.4023438 8.4648438 L 14.886719 2.9804688 A 0.66145998 0.66145998 0 0 0 14.886719 2.0449219 A 0.66145998 0.66145998 0 0 0 13.951172 2.0449219 L 8.4648438 7.53125 L 2.9804688 2.0449219 A 0.66145998 0.66145998 0 0 0 2.4863281 1.8535156 z "
                />
            </g>
        </svg>
    );
};

export const ChromeIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="32"
            height="32"
            viewBox="0 0 48 48"
        >
            <path
                fill="#fff"
                d="M34,24c0,5.521-4.479,10-10,10s-10-4.479-10-10s4.479-10,10-10S34,18.479,34,24z"
            ></path>
            <linearGradient
                id="Pax8JcnMzivu8f~SZ~k1ya_ejub91zEY6Sl_gr1"
                x1="5.789"
                x2="31.324"
                y1="34.356"
                y2="20.779"
                gradientTransform="matrix(1 0 0 -1 0 50)"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset="0" stopColor="#4caf50"></stop>
                <stop offset=".489" stopColor="#4aaf50"></stop>
                <stop offset=".665" stopColor="#43ad50"></stop>
                <stop offset=".79" stopColor="#38aa50"></stop>
                <stop offset=".892" stopColor="#27a550"></stop>
                <stop offset=".978" stopColor="#11a050"></stop>
                <stop offset="1" stopColor="#0a9e50"></stop>
            </linearGradient>
            <path
                fill="url(#Pax8JcnMzivu8f~SZ~k1ya_ejub91zEY6Sl_gr1)"
                d="M31.33,29.21l-8.16,14.77C12.51,43.55,4,34.76,4,24C4,12.96,12.96,4,24,4v11 c-4.97,0-9,4.03-9,9s4.03,9,9,9C27.03,33,29.7,31.51,31.33,29.21z"
            ></path>
            <linearGradient
                id="Pax8JcnMzivu8f~SZ~k1yb_ejub91zEY6Sl_gr2"
                x1="33.58"
                x2="33.58"
                y1="6"
                y2="34.797"
                gradientTransform="matrix(1 0 0 -1 0 50)"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset="0" stopColor="#ffd747"></stop>
                <stop offset=".482" stopColor="#ffd645"></stop>
                <stop offset=".655" stopColor="#fed43e"></stop>
                <stop offset=".779" stopColor="#fccf33"></stop>
                <stop offset=".879" stopColor="#fac922"></stop>
                <stop offset=".964" stopColor="#f7c10c"></stop>
                <stop offset="1" stopColor="#f5bc00"></stop>
            </linearGradient>
            <path
                fill="url(#Pax8JcnMzivu8f~SZ~k1yb_ejub91zEY6Sl_gr2)"
                d="M44,24c0,11.05-8.95,20-20,20h-0.84l8.17-14.79C32.38,27.74,33,25.94,33,24 c0-4.97-4.03-9-9-9V4c7.81,0,14.55,4.48,17.85,11C43.21,17.71,44,20.76,44,24z"
            ></path>
            <linearGradient
                id="Pax8JcnMzivu8f~SZ~k1yc_ejub91zEY6Sl_gr3"
                x1="36.128"
                x2="11.574"
                y1="44.297"
                y2="28.954"
                gradientTransform="matrix(1 0 0 -1 0 50)"
            >
                <stop offset="0" stopColor="#f7572f"></stop>
                <stop offset=".523" stopColor="#f7552d"></stop>
                <stop offset=".712" stopColor="#f75026"></stop>
                <stop offset=".846" stopColor="#f7461b"></stop>
                <stop offset=".954" stopColor="#f7390a"></stop>
                <stop offset="1" stopColor="#f73100"></stop>
            </linearGradient>
            <path
                fill="url(#Pax8JcnMzivu8f~SZ~k1yc_ejub91zEY6Sl_gr3)"
                d="M41.84,15H24c-4.97,0-9,4.03-9,9c0,1.49,0.36,2.89,1.01,4.13H16L7.16,13.26H7.14 C10.68,7.69,16.91,4,24,4C31.8,4,38.55,8.48,41.84,15z"
            ></path>
            <linearGradient
                id="Pax8JcnMzivu8f~SZ~k1yd_ejub91zEY6Sl_gr4"
                x1="19.05"
                x2="28.95"
                y1="30.95"
                y2="21.05"
                gradientTransform="matrix(1 0 0 -1 0 50)"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset="0" stopColor="#2aa4f4"></stop>
                <stop offset="1" stopColor="#007ad9"></stop>
            </linearGradient>
            <path
                fill="url(#Pax8JcnMzivu8f~SZ~k1yd_ejub91zEY6Sl_gr4)"
                d="M31,24c0,3.867-3.133,7-7,7s-7-3.133-7-7s3.133-7,7-7S31,20.133,31,24z"
            ></path>
        </svg>
    );
};

export const VSCodeIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="32"
            height="32"
            viewBox="0 0 48 48"
        >
            <path
                fill="#29b6f6"
                d="M44,11.11v25.78c0,1.27-0.79,2.4-1.98,2.82l-8.82,4.14L34,33V15L33.2,4.15l8.82,4.14 C43.21,8.71,44,9.84,44,11.11z"
            ></path>
            <path
                fill="#0277bd"
                d="M9,33.896L34,15V5.353c0-1.198-1.482-1.758-2.275-0.86L4.658,29.239 c-0.9,0.83-0.849,2.267,0.107,3.032c0,0,1.324,1.232,1.803,1.574C7.304,34.37,8.271,34.43,9,33.896z"
            ></path>
            <path
                fill="#0288d1"
                d="M9,14.104L34,33v9.647c0,1.198-1.482,1.758-2.275,0.86L4.658,18.761 c-0.9-0.83-0.849-2.267,0.107-3.032c0,0,1.324-1.232,1.803-1.574C7.304,13.63,8.271,13.57,9,14.104z"
            ></path>
        </svg>
    );
};

export const CopilotIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="32"
            height="32"
            viewBox="0 0 48 48"
        >
            <linearGradient
                id="lfK0TEarAX_CVWY9eruXya_PxQoyT1s0uFh_gr1"
                x1="18.179"
                x2="37.232"
                y1="6.205"
                y2="21.237"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset="0" stopColor="#0837c4"></stop>
                <stop offset=".242" stopColor="#0b4bce"></stop>
                <stop offset=".738" stopColor="#1071df"></stop>
                <stop offset="1" stopColor="#127fe6"></stop>
            </linearGradient>
            <path
                fill="url(#lfK0TEarAX_CVWY9eruXya_PxQoyT1s0uFh_gr1)"
                d="M21.676,19.303c0,0,0.814-3.255,4.691-3.399h11.777c0,0-3.399-0.287-4.069-4.404	c-0.67-4.117-2.441-5.745-4.931-5.793c-2.489-0.048-3.638,2.585-3.926,3.495C24.931,10.112,21.676,19.303,21.676,19.303z"
            ></path>
            <linearGradient
                id="lfK0TEarAX_CVWY9eruXyb_PxQoyT1s0uFh_gr2"
                x1="8.61"
                x2="20.866"
                y1="36.864"
                y2="1.503"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset="0" stopColor="#f8c704"></stop>
                <stop offset=".065" stopColor="#f1c609"></stop>
                <stop offset=".163" stopColor="#dcc319"></stop>
                <stop offset=".281" stopColor="#babe31"></stop>
                <stop offset=".415" stopColor="#8cb754"></stop>
                <stop offset=".561" stopColor="#50ae7f"></stop>
                <stop offset=".592" stopColor="#43ac89"></stop>
                <stop offset=".617" stopColor="#41ad93"></stop>
                <stop offset=".737" stopColor="#37b0be"></stop>
                <stop offset=".845" stopColor="#30b2dd"></stop>
                <stop offset=".936" stopColor="#2cb4f0"></stop>
                <stop offset="1" stopColor="#2ab4f7"></stop>
            </linearGradient>
            <path
                fill="url(#lfK0TEarAX_CVWY9eruXyb_PxQoyT1s0uFh_gr2)"
                d="M19.234,29.261l6.032-20.25	c0,0,1.149-3.399,3.878-3.303H14.016c0,0-2.585,0-4.452,2.968c0,0-2.872,3.734-4.548,11.394s-1.005,8.09-1.005,8.09	s-0.431,4.213,6.032,3.878h4.979C15.021,32.037,18.037,32.085,19.234,29.261z"
            ></path>
            <path
                d="M28.887,6.707l2.471-0.404c-0.596-0.358-1.31-0.544-2.05-0.584l-0.199-0.011 c-0.004,0-0.007,0-0.011-0.001c-0.016,0-0.031,0.002-0.048,0.002c-0.175-0.001-0.34,0.015-0.502,0.039 c-0.069,0.01-0.136,0.023-0.202,0.037c-0.105,0.023-0.206,0.052-0.305,0.084c-0.452,0.149-0.848,0.386-1.186,0.677 c-0.117,0.102-0.225,0.209-0.329,0.32c-0.761,0.811-1.182,1.833-1.34,2.334c-0.039,0.125-0.139,0.416-0.274,0.808l-2.218,7.444 c0.086-0.092,0.198-0.179,0.297-0.269c0.056-0.051,0.108-0.103,0.168-0.152c0.088-0.072,0.18-0.139,0.277-0.208 c0.166-0.118,0.341-0.231,0.537-0.333c0.025-0.013,0.043-0.03,0.069-0.043l2.131-7.154C26.174,9.296,27.066,6.787,28.887,6.707z"
                opacity=".05"
            ></path>
            <path
                d="M28.864,6.207l1.476-0.34c0,0-0.686-0.176-1.252-0.155c-0.42,0.015-0.802,0.072-1.147,0.203	c-0.027,0.011-0.056,0.019-0.083,0.031c-0.081,0.033-0.159,0.073-0.236,0.112c-0.057,0.03-0.115,0.059-0.17,0.091	c-0.048,0.028-0.094,0.058-0.141,0.088c-0.085,0.056-0.169,0.114-0.249,0.176c-0.017,0.013-0.033,0.026-0.049,0.039	c-0.429,0.346-0.773,0.767-1.039,1.168c-0.006,0.009-0.012,0.017-0.017,0.026c-0.029,0.044-0.053,0.086-0.08,0.13	c-0.342,0.562-0.556,1.104-0.658,1.428c-0.018,0.058-0.05,0.152-0.091,0.274l-2.377,7.978c0.18-0.194,0.388-0.385,0.626-0.563	l2.305-7.738C25.685,9.143,26.684,6.292,28.864,6.207z"
                opacity=".07"
            ></path>
            <linearGradient
                id="lfK0TEarAX_CVWY9eruXyc_PxQoyT1s0uFh_gr3"
                x1="9.38"
                x2="27.188"
                y1="35.55"
                y2="35.358"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset="0" stopColor="#ffb155"></stop>
                <stop offset=".008" stopColor="#ffb055"></stop>
                <stop offset=".475" stopColor="#eb7447"></stop>
                <stop offset=".819" stopColor="#df4e3f"></stop>
                <stop offset="1" stopColor="#da403c"></stop>
            </linearGradient>
            <path
                fill="url(#lfK0TEarAX_CVWY9eruXyc_PxQoyT1s0uFh_gr3)"
                d="M26.474,28.607	c0,0-0.814,3.255-4.691,3.399H10.006c0,0,3.399,0.287,4.069,4.404s2.441,5.745,4.931,5.793s3.638-2.585,3.926-3.495	C23.219,37.799,26.474,28.607,26.474,28.607z"
            ></path>
            <path
                d="M19.255,41.171l-2.471,0.404c0.596,0.358,1.31,0.544,2.05,0.584l0.199,0.011 c0.004,0,0.007,0,0.011,0.001c0.016,0,0.031-0.002,0.048-0.002c0.175,0.001,0.34-0.015,0.502-0.039 c0.069-0.01,0.136-0.023,0.202-0.037c0.105-0.023,0.206-0.052,0.305-0.084c0.452-0.149,0.848-0.386,1.186-0.677 c0.117-0.102,0.225-0.209,0.329-0.32c0.761-0.811,1.182-1.833,1.34-2.334c0.039-0.125,0.139-0.416,0.274-0.808l2.218-7.444 c-0.086,0.092-0.198,0.179-0.297,0.269c-0.056,0.051-0.108,0.103-0.168,0.152c-0.088,0.072-0.18,0.139-0.277,0.208 c-0.166,0.118-0.341,0.231-0.537,0.333c-0.025,0.013-0.043,0.03-0.069,0.043l-2.131,7.154 C21.969,38.582,21.077,41.091,19.255,41.171z"
                opacity=".05"
            ></path>
            <path
                d="M19.278,41.671l-1.476,0.34c0,0,0.686,0.176,1.252,0.155c0.42-0.015,0.802-0.072,1.147-0.203	c0.027-0.011,0.056-0.019,0.083-0.031c0.081-0.033,0.159-0.073,0.236-0.112c0.057-0.03,0.115-0.059,0.17-0.091	c0.048-0.028,0.094-0.058,0.141-0.088c0.085-0.056,0.169-0.114,0.249-0.176c0.017-0.013,0.033-0.026,0.049-0.039	c0.429-0.346,0.773-0.767,1.039-1.168c0.006-0.009,0.012-0.017,0.017-0.026c0.029-0.044,0.053-0.086,0.08-0.13	c0.342-0.562,0.556-1.104,0.658-1.428c0.018-0.058,0.05-0.152,0.091-0.274l2.377-7.978c-0.18,0.194-0.388,0.385-0.626,0.563	l-2.305,7.738C22.457,38.736,21.458,41.586,19.278,41.671z"
                opacity=".07"
            ></path>
            <linearGradient
                id="lfK0TEarAX_CVWY9eruXyd_PxQoyT1s0uFh_gr4"
                x1="28.874"
                x2="37.108"
                y1="43.472"
                y2="12.068"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset="0" stopColor="#ffb152"></stop>
                <stop offset=".531" stopColor="#f36284"></stop>
                <stop offset=".994" stopColor="#a355e9"></stop>
            </linearGradient>
            <path
                fill="url(#lfK0TEarAX_CVWY9eruXyd_PxQoyT1s0uFh_gr4)"
                d="M28.915,18.65l-6.07,20.263	c0,0-1.111,3.386-3.839,3.29h15.128c0,0,2.585,0,4.452-2.968c0,0,2.872-3.734,4.548-11.394c1.676-7.66,1.005-8.09,1.005-8.09	s0.431-4.213-6.032-3.878h-4.979C33.128,15.873,30.112,15.826,28.915,18.65z"
            ></path>
        </svg>
    );
};

export const AdobeIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="32"
            height="32"
            viewBox="0 0 48 48"
        >
            <path
                fill="#b30b00"
                d="M38,42H10c-2.209,0-4-1.791-4-4V10c0-2.209,1.791-4,4-4h28c2.209,0,4,1.791,4,4v28	C42,40.209,40.209,42,38,42z"
            ></path>
            <path
                fill="#fff"
                d="M35.241,26.799c-1.692-1.757-6.314-1.041-7.42-0.911c-1.627-1.562-2.734-3.45-3.124-4.101	c0.586-1.757,0.976-3.515,1.041-5.402c0-1.627-0.651-3.385-2.473-3.385c-0.651,0-1.237,0.391-1.562,0.911	c-0.781,1.367-0.456,4.101,0.781,6.899c-0.716,2.018-1.367,3.97-3.189,7.42c-1.888,0.781-5.858,2.604-6.183,4.556	c-0.13,0.586,0.065,1.172,0.521,1.627C14.088,34.805,14.673,35,15.259,35c2.408,0,4.751-3.32,6.379-6.118	c1.367-0.456,3.515-1.107,5.663-1.497c2.538,2.213,4.751,2.538,5.923,2.538c1.562,0,2.148-0.651,2.343-1.237	C35.892,28.036,35.697,27.32,35.241,26.799z M33.614,27.905c-0.065,0.456-0.651,0.911-1.692,0.651	c-1.237-0.325-2.343-0.911-3.32-1.692c0.846-0.13,2.734-0.325,4.101-0.065C33.224,26.929,33.744,27.254,33.614,27.905z M22.744,14.497c0.13-0.195,0.325-0.325,0.521-0.325c0.586,0,0.716,0.716,0.716,1.302c-0.065,1.367-0.325,2.734-0.781,4.036	C22.224,16.905,22.419,15.083,22.744,14.497z M22.614,27.124c0.521-1.041,1.237-2.864,1.497-3.645	c0.586,0.976,1.562,2.148,2.083,2.669C26.194,26.213,24.176,26.604,22.614,27.124z M18.774,29.728	c-1.497,2.473-3.059,4.036-3.905,4.036c-0.13,0-0.26-0.065-0.391-0.13c-0.195-0.13-0.26-0.325-0.195-0.586	C14.478,32.136,16.17,30.899,18.774,29.728z"
            ></path>
        </svg>
    );
};

export const VLCIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="p-0.5"
            x="0px"
            y="0px"
            width="32"
            height="32"
            viewBox="0 0 48 48"
        >
            <path
                fill="#cf5a00"
                d="M41,45H7c-0.552,0-1-0.448-1-1v-2h36v2C42,44.552,41.552,45,41,45z"
            ></path>
            <radialGradient
                id="m8iQuiuF1ivyhRlKBKJdca_bZgFYyK2uzeG_gr1"
                cx="24.167"
                cy="25.333"
                r="28.964"
                gradientTransform="matrix(1 0 0 .702 0 7.549)"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset="0" stopColor="#ed6b00"></stop>
                <stop offset=".451" stopColor="#f28104"></stop>
                <stop offset=".7" stopColor="#f7931e"></stop>
                <stop offset=".777" stopColor="#f79b20"></stop>
                <stop offset=".895" stopColor="#f5b026"></stop>
                <stop offset="1" stopColor="#f4c92c"></stop>
            </radialGradient>
            <path
                fill="url(#m8iQuiuF1ivyhRlKBKJdca_bZgFYyK2uzeG_gr1)"
                d="M36.294,29H11.706c-0.411,0-0.781,0.252-0.931,0.635L6.07,41.634 C5.813,42.291,6.297,43,7.001,43h33.999c0.704,0,1.187-0.708,0.93-1.363l-4.706-12.002C37.074,29.252,36.705,29,36.294,29z"
            ></path>
            <radialGradient
                id="m8iQuiuF1ivyhRlKBKJdcb_bZgFYyK2uzeG_gr2"
                cx="23.959"
                cy="23.583"
                r="24.459"
                gradientTransform="matrix(1 0 0 .862 0 3.255)"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset=".419" stopColor="#c04e00"></stop>
                <stop offset=".539" stopColor="#c55300"></stop>
                <stop offset=".684" stopColor="#d46100"></stop>
                <stop offset=".781" stopColor="#e26f00"></stop>
                <stop offset=".826" stopColor="#ed6b00" stopOpacity="0"></stop>
                <stop offset="1" stopColor="#ed6b00" stopOpacity=".063"></stop>
            </radialGradient>
            <path
                fill="url(#m8iQuiuF1ivyhRlKBKJdcb_bZgFYyK2uzeG_gr2)"
                d="M36.294,29H11.706c-0.411,0-0.781,0.252-0.931,0.635L6.07,41.634 C5.813,42.291,6.297,43,7.001,43h33.999c0.704,0,1.187-0.708,0.93-1.363l-4.706-12.002C37.074,29.252,36.705,29,36.294,29z"
            ></path>
            <radialGradient
                id="m8iQuiuF1ivyhRlKBKJdcc_bZgFYyK2uzeG_gr3"
                cx="24.042"
                cy="35.583"
                r="11.5"
                gradientTransform="matrix(1 0 0 .3623 0 22.691)"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset=".948" stopColor="#a1451a"></stop>
                <stop
                    offset=".959"
                    stopColor="#a64818"
                    stopOpacity=".806"
                ></stop>
                <stop
                    offset=".972"
                    stopColor="#b54f13"
                    stopOpacity=".571"
                ></stop>
                <stop
                    offset=".986"
                    stopColor="#cd5b0b"
                    stopOpacity=".316"
                ></stop>
                <stop offset="1" stopColor="#ed6b00" stopOpacity=".063"></stop>
            </radialGradient>
            <path
                fill="url(#m8iQuiuF1ivyhRlKBKJdcc_bZgFYyK2uzeG_gr3)"
                d="M24,40.5c-6.449,0-11.5-2.196-11.5-5s5.051-5,11.5-5s11.5,2.196,11.5,5S30.449,40.5,24,40.5 z"
            ></path>
            <radialGradient
                id="m8iQuiuF1ivyhRlKBKJdcd_bZgFYyK2uzeG_gr4"
                cx="13.719"
                cy="35.865"
                r="11.912"
                gradientTransform="matrix(-.8804 0 0 -.3623 35.158 48.859)"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset=".338" stopColor="#c04e00"></stop>
                <stop offset=".473" stopColor="#c55300"></stop>
                <stop offset=".636" stopColor="#d46200"></stop>
                <stop offset=".813" stopColor="#ec7900"></stop>
                <stop offset=".842" stopColor="#f17e00"></stop>
                <stop offset=".967" stopColor="#f17e00" stopOpacity="0"></stop>
            </radialGradient>
            <path
                fill="url(#m8iQuiuF1ivyhRlKBKJdcd_bZgFYyK2uzeG_gr4)"
                d="M23.284,40.5c-5.362,0-10.265-1.931-10.265-4.735S18.322,30.5,24,30.5 s10.125,2.196,10.125,5S28.962,40.5,23.284,40.5z"
            ></path>
            <path
                fill="#ed6b00"
                d="M13.625,33c8.166-29.28,0,0,8.166-29.28C21.911,3.291,22.306,3,22.751,3h2.497 c0.445,0,0.84,0.291,0.96,0.72c8.166,29.28,0,0,8.166,29.28C34.652,33.993,35,35.201,35,35.5c0,2.485-4.925,4.5-11,4.5 s-11-2.015-11-4.5C13,35.201,13.348,33.993,13.625,33z"
            ></path>
            <linearGradient
                id="m8iQuiuF1ivyhRlKBKJdce_bZgFYyK2uzeG_gr5"
                x1="-9.318"
                x2="40.192"
                y1="13.001"
                y2="25.99"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset=".539" stopColor="#c04e00"></stop>
                <stop offset=".554" stopColor="#d36100"></stop>
                <stop offset=".575" stopColor="#e97600"></stop>
                <stop offset=".588" stopColor="#f17e00"></stop>
                <stop offset=".647" stopColor="#f17e00"></stop>
                <stop offset=".744" stopColor="#e77400" stopOpacity="0"></stop>
            </linearGradient>
            <path
                fill="url(#m8iQuiuF1ivyhRlKBKJdce_bZgFYyK2uzeG_gr5)"
                d="M34.375,33c-8.166-29.28,0,0-8.166-29.28C26.089,3.291,25.694,3,25.249,3h-2.497 c-0.445,0-0.84,0.291-0.96,0.72c-8.166,29.28,0,0-8.166,29.28C13.348,33.993,13,35.201,13,35.5c0,2.485,4.925,4.5,11,4.5 s11-2.015,11-4.5C35,35.201,34.652,33.993,34.375,33z"
            ></path>
            <linearGradient
                id="m8iQuiuF1ivyhRlKBKJdcf_bZgFYyK2uzeG_gr6"
                x1="125.717"
                x2="175.31"
                y1="12.969"
                y2="25.638"
                gradientTransform="matrix(-1 0 0 1 184 0)"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset=".563" stopColor="#a1451a"></stop>
                <stop offset=".565" stopColor="#a54719"></stop>
                <stop offset=".581" stopColor="#c25b0e"></stop>
                <stop offset=".597" stopColor="#d66906"></stop>
                <stop offset=".613" stopColor="#e37102"></stop>
                <stop offset=".628" stopColor="#e77400"></stop>
                <stop offset=".718" stopColor="#ed6b00" stopOpacity="0"></stop>
                <stop offset="1" stopColor="#ed6b00" stopOpacity=".063"></stop>
            </linearGradient>
            <path
                fill="url(#m8iQuiuF1ivyhRlKBKJdcf_bZgFYyK2uzeG_gr6)"
                d="M13.625,33c8.166-29.28,0,0,8.166-29.28C21.911,3.291,22.306,3,22.751,3h2.497 c0.445,0,0.84,0.291,0.96,0.72c8.166,29.28,0,0,8.166,29.28C34.652,33.993,35,35.201,35,35.5c0,2.485-4.925,4.5-11,4.5 s-11-2.015-11-4.5C13,35.201,13.348,33.993,13.625,33z"
            ></path>
            <radialGradient
                id="m8iQuiuF1ivyhRlKBKJdcg_bZgFYyK2uzeG_gr7"
                cx="24.01"
                cy="2.552"
                r="2.662"
                gradientTransform="matrix(1 0 0 .3693 0 1.61)"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset=".653" stopColor="#c04e00"></stop>
                <stop
                    offset=".746"
                    stopColor="#c95700"
                    stopOpacity=".663"
                ></stop>
                <stop
                    offset=".896"
                    stopColor="#e16e00"
                    stopOpacity=".116"
                ></stop>
                <stop offset=".927" stopColor="#e77400" stopOpacity="0"></stop>
            </radialGradient>
            <path
                fill="url(#m8iQuiuF1ivyhRlKBKJdcg_bZgFYyK2uzeG_gr7)"
                d="M22.158,3.195C22.461,3.374,23.172,3.5,24,3.5s1.539-0.126,1.842-0.305 C25.674,3.072,25.468,3,25.249,3h-2.497C22.532,3,22.326,3.072,22.158,3.195z"
            ></path>
            <g>
                <path
                    fill="#ccc"
                    d="M33.821,31C33.918,31.347,32,34,24,34s-9.918-2.653-9.821-3c0.849-3.043,1.488-5.35,1.981-7.1 c0.04,0.06,0.09,0.13,0.14,0.19C16.68,24.54,18.37,26,24,26s7.32-1.46,7.7-1.91c0.05-0.06,0.1-0.13,0.14-0.19 C32.334,25.65,32.972,27.957,33.821,31z M27.55,8.51C26.61,8.81,25.45,9,24,9s-2.61-0.19-3.55-0.49c-0.3,1.07-1.98,7.1-2.02,7.24 v0.01c0,0.19,1.63,1.24,5.57,1.24c3.89,0,5.53-1.02,5.57-1.23C29.57,15.76,27.67,8.95,27.55,8.51z"
                ></path>
                <linearGradient
                    id="m8iQuiuF1ivyhRlKBKJdch_bZgFYyK2uzeG_gr8"
                    x1="19.367"
                    x2="38.477"
                    y1="22.326"
                    y2="17.753"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop
                        offset="0"
                        stopColor="#f2f2f2"
                        stopOpacity=".06"
                    ></stop>
                    <stop offset=".42" stopColor="#ccc"></stop>
                    <stop offset=".454" stopColor="#c4c4c4"></stop>
                    <stop offset=".506" stopColor="#afafaf"></stop>
                    <stop offset=".57" stopColor="#8d8d8d"></stop>
                    <stop offset=".63" stopColor="#666"></stop>
                </linearGradient>
                <path
                    fill="url(#m8iQuiuF1ivyhRlKBKJdch_bZgFYyK2uzeG_gr8)"
                    d="M33.821,31C33.918,31.347,32,34,24,34s-9.918-2.653-9.821-3 c0.849-3.043,1.488-5.35,1.981-7.1c0.04,0.06,0.09,0.13,0.14,0.19C16.68,24.54,18.37,26,24,26s7.32-1.46,7.7-1.91 c0.05-0.06,0.1-0.13,0.14-0.19C32.334,25.65,32.972,27.957,33.821,31z M27.55,8.51C26.61,8.81,25.45,9,24,9s-2.61-0.19-3.55-0.49 c-0.3,1.07-1.98,7.1-2.02,7.24v0.01c0,0.19,1.63,1.24,5.57,1.24c3.89,0,5.53-1.02,5.57-1.23C29.57,15.76,27.67,8.95,27.55,8.51z"
                ></path>
                <linearGradient
                    id="m8iQuiuF1ivyhRlKBKJdci_bZgFYyK2uzeG_gr9"
                    x1="6.155"
                    x2="35.115"
                    y1="17.11"
                    y2="23.76"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset=".362" stopColor="#666"></stop>
                    <stop
                        offset=".42"
                        stopColor="#8d8d8d"
                        stopOpacity=".712"
                    ></stop>
                    <stop
                        offset=".48"
                        stopColor="#afafaf"
                        stopOpacity=".411"
                    ></stop>
                    <stop
                        offset=".53"
                        stopColor="#c4c4c4"
                        stopOpacity=".163"
                    ></stop>
                    <stop offset=".563" stopColor="#ccc" stopOpacity="0"></stop>
                    <stop
                        offset="1"
                        stopColor="#f2f2f2"
                        stopOpacity=".06"
                    ></stop>
                </linearGradient>
                <path
                    fill="url(#m8iQuiuF1ivyhRlKBKJdci_bZgFYyK2uzeG_gr9)"
                    d="M33.821,31C33.918,31.347,32,34,24,34s-9.918-2.653-9.821-3 c0.849-3.043,1.488-5.35,1.981-7.1c0.04,0.06,0.09,0.13,0.14,0.19C16.68,24.54,18.37,26,24,26s7.32-1.46,7.7-1.91 c0.05-0.06,0.1-0.13,0.14-0.19C32.334,25.65,32.972,27.957,33.821,31z M27.55,8.51C26.61,8.81,25.45,9,24,9s-2.61-0.19-3.55-0.49 c-0.3,1.07-1.98,7.1-2.02,7.24v0.01c0,0.19,1.63,1.24,5.57,1.24c3.89,0,5.53-1.02,5.57-1.23C29.57,15.76,27.67,8.95,27.55,8.51z"
                ></path>
            </g>
        </svg>
    );
};

export const FileExplorerAltIcon = () => {
    return (
    <img className="w-8" src={FileExplorer} alt="fileexplorer" />
    );
};
