// Utility: rebuild a FileSystem instance from its JSON dump
import { FileSystem, type FileSystemExport, FileSystemNode } from './FileStructure';

/**
 * Recursively reconstruct FileSystemNode trees
 */
function buildNodeTree(
  data: any,
  parent: FileSystemNode | null = null
): FileSystemNode {
  // Create a new node instance from JSON data
  const fsNode = new FileSystemNode({
    id: data.id,
    name: data.name,
    parent: parent,
    type: data.type,
    extension: data.extension,
    metadata: data.metadata
  });

  // Recursively rebuild children
  data.children.forEach((child: any) => {
    const childNode = buildNodeTree(child, fsNode);
    fsNode.addChild(childNode);
  });

  return fsNode;
}

/**
 * Given a JSON export, returns a fully-functional FileSystem
 */
export function importFileSystem(
  fsExport: FileSystemExport
): FileSystem {
  const fs = new FileSystem();

  // Clear out the default initialization
  fs['root'].clear();
  fs['shortcuts'].clear();

  // Rebuild drives
  for (const [letter, driveData] of Object.entries(fsExport.drives)) {
    const driveNode = buildNodeTree(driveData, null);
    fs['root'].set(letter, driveNode);
  }

  // Rebuild shortcuts
  for (const [key, scData] of Object.entries(fsExport.shortcuts)) {
    const shortcutNode = new FileSystemNode({
      id: scData.id,
      name: scData.name,
      parent: null,
      type: 'shortcut',
      extension: null,
      metadata: scData.metadata
    });
    fs['shortcuts'].set(key, shortcutNode);
  }

  return fs;
}
