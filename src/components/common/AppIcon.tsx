import type { DesktopItemsType } from "../../App";

const AppIcon = ({
    item,
    handleSingleClick,
    handleDoubleClick,
    clicked,
    isSelected,
    isSelecting,
}: {
    item: DesktopItemsType;
    handleSingleClick: (name: string) => void;
    handleDoubleClick: (app: DesktopItemsType) => void;
    clicked: string;
    isSelected: boolean;
    isSelecting: boolean;
}) => {
    return (
        <div
            key={item.name}
            data-item-name={item.name}
            onClick={() => handleSingleClick(item.name)}
            onDoubleClick={() => handleDoubleClick(item)}
            draggable="true"
            style={{
                gridRowStart: item.rowStart,
                gridColumnStart: item.colStart,
            }}
            className={`col-span-1 row-span-1 flex flex-col items-center justify-center rounded-xs user-select-none ${clicked === item.name ? "bg-white/30" : ""} ${isSelected ? "bg-white/30" : ""} ${isSelecting ? "" : "hover:bg-gray-700"}`}
        >
            <span className="flex-shrink-0">{item.icon}</span>
            <p
                className={`text-white text-xs w-full overflow-hidden break-words text-center px-1 ${clicked === item.name ? "" : "truncate"}`}
            >
                {item.name}
            </p>
        </div>
    );
};
export default AppIcon;
