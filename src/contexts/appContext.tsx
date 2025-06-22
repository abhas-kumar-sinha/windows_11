import { createContext, useContext, useState, useEffect } from "react";
import type { OpenedAppsType } from "../App";
import { FileSystemNode, FileSystem, type FileSystemExport } from "../lib/FileStructure";
import { importFileSystem } from "../lib/FileStructureRehydrate";

interface AppContextType {
    openedApps: OpenedAppsType[];
    setOpenedApps: React.Dispatch<React.SetStateAction<OpenedAppsType[]>>;
    fileStructure: FileSystem;
    setFileStructure: React.Dispatch<React.SetStateAction<FileSystem>>;
    deletedItems: FileSystemNode[];
    setDeletedItems: React.Dispatch<React.SetStateAction<FileSystemNode[]>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [openedApps, setOpenedApps] = useState<OpenedAppsType[]>([]);
    const [deletedItems, setDeletedItems] = useState<FileSystemNode[] | []>(
        [],
    );

  const [fileStructure, setFileStructure] = useState<FileSystem>(() => {
    const raw = localStorage.getItem("fileStructure")
    if (raw) {
      const snapshot = JSON.parse(raw) as FileSystemExport
      return importFileSystem(snapshot)
    }
    return new FileSystem()
  })

  useEffect(() => {
    localStorage.setItem("fileStructure", JSON.stringify(fileStructure.export()))
  }, [fileStructure])

    return (
        <AppContext.Provider
            value={{
                openedApps,
                setOpenedApps,
                fileStructure,
                setFileStructure,
                deletedItems,
                setDeletedItems,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
};

export default AppContext;
