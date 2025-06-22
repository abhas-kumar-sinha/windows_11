// Enhanced File Structure System with TypeScript types

type NodeType = 'folder' | 'file' | 'drive' | 'shortcut';

interface NodeMetadata {
    created: Date;
    modified: Date;
    size: number;
    hidden: boolean;
    system: boolean;
    readOnly: boolean;
    targetPath?: string;
    [key: string]: any;
}

interface FileSystemNodeConfig {
    id: string;
    name: string;
    parent?: FileSystemNode | null;
    type?: NodeType;
    extension?: string | null;
    metadata?: Partial<NodeMetadata>;
}

interface SearchOptions {
    searchPath?: string | null;
    exactMatch?: boolean;
    caseSensitive?: boolean;
    type?: NodeType | null;
    extension?: string | null;
    includeHidden?: boolean;
}

interface SearchResult {
    node: FileSystemNode;
    path: string;
    windowsPath: string;
    name: string;
    type: NodeType;
    extension: string | null;
    size: number;
    modified: Date;
    parentPath: string | null;
}

interface DuplicateLocation {
    path: string;
    windowsPath: string;
    parentPath: string | null;
    type: NodeType;
    size: number;
    modified: Date;
}

interface DuplicateGroup {
    fileName: string;
    count: number;
    locations: DuplicateLocation[];
}

interface SearchMatch extends SearchResult {
    index: number;
    suggestion: string;
}

interface MultipleMatchResult {
    multiple: true;
    count: number;
    matches: SearchMatch[];
}

interface PathSuggestion {
    index: number;
    name: string;
    fullPath: string;
    parentFolder: string | null;
    type: NodeType;
    hint: string;
}

interface DirectoryContentsOptions {
    filter?: (node: FileSystemNode) => boolean;
    sortBy?: keyof FileSystemNode | keyof NodeMetadata;
    sortDesc?: boolean;
}

interface FileSystemExport {
    drives: Record<string, any>;
    shortcuts: Record<string, any>;
}

interface CreateNodeOptions {
    extension?: string | null;
    metadata?: Partial<NodeMetadata>;
}

class FileSystemNode {
    public readonly id: string;
    public name: string;
    public parent: FileSystemNode | null;
    public readonly type: NodeType;
    public extension: string | null;
    public readonly children: Map<string, FileSystemNode>;
    public metadata: NodeMetadata;

    constructor({
        id,
        name,
        parent = null,
        type = 'folder',
        extension = null,
        metadata = {}
    }: FileSystemNodeConfig) {
        this.id = id;
        this.name = name;
        this.parent = parent;
        this.type = type;
        this.extension = extension;
        this.children = new Map<string, FileSystemNode>();
        this.metadata = {
            created: new Date(),
            modified: new Date(),
            size: 0,
            hidden: false,
            system: false,
            readOnly: false,
            ...metadata
        };
    }

    // Generate full path dynamically
    public get path(): string {
        if (!this.parent) {
            return this.type === 'drive' ? `${this.name}:` : this.name;
        }
        
        const parentPath: string = this.parent.path;
        if (this.parent.type === 'drive') {
            return `${parentPath}/${this.name}`;
        }
        return `${parentPath}/${this.name}`;
    }

    // Get normalized Windows path
    public get windowsPath(): string {
        return this.path.replace(/\//g, '\\');
    }

    // Check if node is a directory
    public get isDirectory(): boolean {
        return this.type === 'folder' || this.type === 'drive';
    }

    // Add child node
    public addChild(node: FileSystemNode): FileSystemNode {
        node.parent = this;
        this.children.set(node.id, node);
        return node;
    }

    // Remove child node
    public removeChild(id: string): FileSystemNode | undefined {
        const child = this.children.get(id);
        if (child) {
            child.parent = null;
            this.children.delete(id);
        }
        return child;
    }

    public findByPath(path: string): FileSystemNode | null {
        const parts = path.split(/[/\\]/).filter(Boolean);
        
        return parts.reduce((current: FileSystemNode | null, part: string) => {
            if (!current) return null;
            
            const child = Array.from(current.children.values())
                .find(c => c.name.toLowerCase() === part.toLowerCase());
            
            return child || null;
        }, this as FileSystemNode);
    }

    // Get all children as array
    public getChildren(): FileSystemNode[] {
        return Array.from(this.children.values());
    }

    // Move node to new parent
    public moveTo(newParent: FileSystemNode): void {
        if (this.parent) {
            this.parent.removeChild(this.id);
        }
        newParent.addChild(this);
    }

    // Clone node structure
    public clone(newParent: FileSystemNode | null = null): FileSystemNode {
        const cloned = new FileSystemNode({
            id: this.id + '_copy',
            name: this.name + ' - Copy',
            parent: newParent,
            type: this.type,
            extension: this.extension,
            metadata: { ...this.metadata }
        });

        // Clone children recursively
        for (const child of this.getChildren()) {
            child.clone(cloned);
        }

        return cloned;
    }

    // Serialize to JSON
    public toJSON(): any {
        return {
            id: this.id,
            name: this.name,
            path: this.path,
            windowsPath: this.windowsPath,
            type: this.type,
            extension: this.extension,
            isDirectory: this.isDirectory,
            metadata: this.metadata,
            children: this.getChildren().map(child => child.toJSON())
        };
    }
}

class FileSystem {
    private readonly root: Map<string, FileSystemNode>;
    private readonly shortcuts: Map<string, FileSystemNode>;

    constructor() {
        this.root = new Map<string, FileSystemNode>();
        this.shortcuts = new Map<string, FileSystemNode>();
        this.initializeSystem();
    }

    // Initialize default Windows structure
    private initializeSystem(): void {
        // Create C: drive
        const cDrive = new FileSystemNode({
            id: 'c_drive',
            name: 'C',
            type: 'drive'
        });

        // Create standard Windows folders
        const users = cDrive.addChild(new FileSystemNode({
            id: 'users',
            name: 'Users',
            type: 'folder'
        }));

        const publicUser = users.addChild(new FileSystemNode({
            id: 'public_user',
            name: 'Public',
            type: 'folder'
        }));

        // Standard user folders
        const userFolders: string[] = [
            'Desktop', 'Documents', 'Downloads', 'Music', 
            'Pictures', 'Videos'
        ];

        userFolders.forEach(folderName => {
            publicUser.addChild(new FileSystemNode({
                id: `public_${folderName.toLowerCase()}`,
                name: folderName,
                type: 'folder'
            }));
        });

        // System folders
        const system = cDrive.addChild(new FileSystemNode({
            id: 'system',
            name: 'System32',
            type: 'folder',
            metadata: { system: true, readOnly: true }
        }));

        const programFiles = cDrive.addChild(new FileSystemNode({
            id: 'program_files',
            name: 'Program Files',
            type: 'folder'
        }));

        this.root.set('C', cDrive);

        // Create common shortcuts
        this.createShortcut('desktop', 'Desktop', 'C:/Users/Public/Desktop');
        this.createShortcut('documents', 'Documents', 'C:/Users/Public/Documents');
        this.createShortcut('downloads', 'Downloads', 'C:/Users/Public/Downloads');
    }

    // Create shortcut
    public createShortcut(id: string, name: string, targetPath: string): FileSystemNode {
        const shortcut = new FileSystemNode({
            id: `shortcut_${id}`,
            name: name,
            type: 'shortcut',
            metadata: { targetPath }
        });
        this.shortcuts.set(id, shortcut);
        return shortcut;
    }

    // Get drive by letter
    public getDrive(letter: string): FileSystemNode | undefined {
        return this.root.get(letter.toUpperCase());
    }

    // Find node by full path
    public findByPath(path: string): FileSystemNode | null {
        // Handle drive letters
        const match = path.match(/^([A-Z]):[/\\]?(.*)/i);
        if (!match) return null;

        const [, driveLetter, remainingPath] = match;
        const drive = this.getDrive(driveLetter);
        
        if (!drive) return null;
        if (!remainingPath) return drive;

        return drive.findByPath(remainingPath);
    }

    // Create new file/folder
    public createNode(
        parentPath: string, 
        name: string, 
        type: NodeType = 'folder', 
        options: CreateNodeOptions = {}
    ): FileSystemNode {
        const parent = this.findByPath(parentPath);
        if (!parent || !parent.isDirectory) {
            throw new Error('Invalid parent directory');
        }

        const id = `${parent.id}_${name.toLowerCase().replace(/[^a-z0-9]/g, '_')}`;
        const node = new FileSystemNode({
            id,
            name,
            type,
            ...options
        });

        return parent.addChild(node);
    }

    // Delete node
    public deleteNode(path: string): FileSystemNode {
        const node = this.findByPath(path);
        if (!node || !node.parent) {
            throw new Error('Cannot delete root or non-existent node');
        }

        const deletedNode = node.parent.removeChild(node.id);
        if (!deletedNode) {
            throw new Error('Failed to delete node');
        }
        return deletedNode;
    }

    // Move node
    public moveNode(fromPath: string, toPath: string): FileSystemNode {
        const node = this.findByPath(fromPath);
        const newParent = this.findByPath(toPath);

        if (!node || !newParent || !newParent.isDirectory) {
            throw new Error('Invalid move operation');
        }

        node.moveTo(newParent);
        return node;
    }

    // Get directory contents
    public getDirectoryContents(
        path: string, 
        options: DirectoryContentsOptions = {}
    ): FileSystemNode[] {
        const node = this.findByPath(path);
        if (!node || !node.isDirectory) {
            return [];
        }

        let contents = node.getChildren();

        // Apply filters
        if (options.filter) {
            contents = contents.filter(options.filter);
        }

        // Apply sorting
        if (options.sortBy) {
            contents.sort((a, b) => {
                const aVal = (a as any)[options.sortBy!];
                const bVal = (b as any)[options.sortBy!];
                
                if (typeof aVal === 'string' && typeof bVal === 'string') {
                    return options.sortDesc ? bVal.localeCompare(aVal) : aVal.localeCompare(bVal);
                }
                
                if (aVal < bVal) return options.sortDesc ? 1 : -1;
                if (aVal > bVal) return options.sortDesc ? -1 : 1;
                return 0;
            });
        }

        return contents;
    }

    // Export entire structure
    public export(): FileSystemExport {
        const result: Record<string, any> = {};
        for (const [letter, drive] of this.root) {
            result[letter] = drive.toJSON();
        }
        return {
            drives: result,
            shortcuts: Object.fromEntries(
                Array.from(this.shortcuts.entries()).map(([k, v]) => [k, v.toJSON()])
            )
        };
    }

    // Enhanced search for files/folders with duplicate handling
    public search(query: string, options: SearchOptions = {}): SearchResult[] {
        const {
            searchPath = null,
            exactMatch = false,
            caseSensitive = false,
            type = null,
            extension = null,
            includeHidden = false
        } = options;

        const results: SearchResult[] = [];
        const searchNode = searchPath ? this.findByPath(searchPath) : null;
        const searchRoots = searchNode ? [searchNode] : Array.from(this.root.values());

        const searchRecursive = (node: FileSystemNode): void => {
            // Skip hidden files if not requested
            if (!includeHidden && node.metadata.hidden) {
                return;
            }

            // Type filter
            if (type && node.type !== type) {
                if (node.isDirectory) {
                    for (const child of node.getChildren()) {
                        searchRecursive(child);
                    }
                }
                return;
            }

            // Extension filter
            if (extension && node.extension !== extension) {
                if (node.isDirectory) {
                    for (const child of node.getChildren()) {
                        searchRecursive(child);
                    }
                }
                return;
            }

            // Name matching
            const nodeName = caseSensitive ? node.name : node.name.toLowerCase();
            const searchQuery = caseSensitive ? query : query.toLowerCase();
            
            const matches = exactMatch ? 
                nodeName === searchQuery : 
                nodeName.includes(searchQuery);

            if (matches) {
                results.push({
                    node: node,
                    path: node.path,
                    windowsPath: node.windowsPath,
                    name: node.name,
                    type: node.type,
                    extension: node.extension,
                    size: node.metadata.size,
                    modified: node.metadata.modified,
                    parentPath: node.parent ? node.parent.path : null
                });
            }

            // Continue searching in subdirectories
            if (node.isDirectory) {
                for (const child of node.getChildren()) {
                    searchRecursive(child);
                }
            }
        };

        searchRoots.forEach(searchRecursive);
        return results;
    }

    // Find all files with the same name
    public findDuplicatesByName(fileName: string, options: SearchOptions = {}): DuplicateGroup[] {
        const duplicates = this.search(fileName, { 
            exactMatch: true, 
            caseSensitive: false,
            ...options 
        });

        // Group by name (case-insensitive)
        const groups = new Map<string, SearchResult[]>();
        duplicates.forEach(item => {
            const key = item.name.toLowerCase();
            if (!groups.has(key)) {
                groups.set(key, []);
            }
            groups.get(key)!.push(item);
        });

        // Return only groups with more than one file
        const result: DuplicateGroup[] = [];
        for (const [name, items] of groups) {
            if (items.length > 1) {
                result.push({
                    fileName: items[0].name, // Original case
                    count: items.length,
                    locations: items.map(item => ({
                        path: item.path,
                        windowsPath: item.windowsPath,
                        parentPath: item.parentPath,
                        type: item.type,
                        size: item.size,
                        modified: item.modified
                    }))
                });
            }
        }

        return result;
    }

    // Find a specific file by name with disambiguation
    public findFileByName(
        fileName: string, 
        disambiguator?: string | ((match: SearchResult) => boolean) | null
    ): SearchResult | MultipleMatchResult | null {
        const matches = this.search(fileName, { exactMatch: true });
        
        if (matches.length === 0) {
            return null;
        }

        if (matches.length === 1) {
            return matches[0];
        }

        // Multiple matches found - use disambiguator
        if (disambiguator) {
            if (typeof disambiguator === 'string') {
                // Disambiguator is a path substring
                const filtered = matches.filter(match => 
                    match.path.toLowerCase().includes(disambiguator.toLowerCase())
                );
                if (filtered.length === 1) {
                    return filtered[0];
                }
                return filtered.length > 0 ? 
                    this.createMultipleMatchResult(filtered) : 
                    this.createMultipleMatchResult(matches);
            } else if (typeof disambiguator === 'function') {
                // Disambiguator is a custom filter function
                const filtered = matches.filter(disambiguator);
                return filtered.length === 1 ? 
                    filtered[0] : 
                    this.createMultipleMatchResult(filtered);
            }
        }

        return this.createMultipleMatchResult(matches);
    }

    private createMultipleMatchResult(matches: SearchResult[]): MultipleMatchResult {
        return {
            multiple: true,
            count: matches.length,
            matches: matches.map((match, index) => ({
                ...match,
                index: index + 1,
                suggestion: `Use path hint: "${match.parentPath}" or index: ${index + 1}`
            }))
        };
    }

    // Get file path suggestions for ambiguous names
    public getPathSuggestions(fileName: string): PathSuggestion[] {
        const matches = this.search(fileName, { exactMatch: true });
        
        if (matches.length <= 1) {
            return matches.map((match, index) => ({
                index: index + 1,
                name: match.name,
                fullPath: match.path,
                parentFolder: match.parentPath,
                type: match.type,
                hint: match.parentPath?.split('/').pop() || 'root'
            }));
        }

        return matches.map((match, index) => ({
            index: index + 1,
            name: match.name,
            fullPath: match.path,
            parentFolder: match.parentPath,
            type: match.type,
            hint: match.parentPath?.split('/').pop() || 'root'
        }));
    }
}

// // Enhanced usage example with duplicate file handling
// const fileSystem = new FileSystem();

// // Create multiple files with the same name in different locations
// fileSystem.createNode('C:/Users/Public/Desktop', 'MyProject', 'folder');
// fileSystem.createNode('C:/Users/Public/Documents', 'MyProject', 'folder');

// // Create index.html files in different locations
// fileSystem.createNode('C:/Users/Public/Desktop/MyProject', 'index.html', 'file', {
//     extension: '.html',
//     metadata: { size: 1024 }
// });

// fileSystem.createNode('C:/Users/Public/Documents/MyProject', 'index.html', 'file', {
//     extension: '.html',
//     metadata: { size: 2048 }
// });

// fileSystem.createNode('C:/Users/Public/Desktop', 'config.txt', 'file', {
//     extension: '.txt',
//     metadata: { size: 512 }
// });

// fileSystem.createNode('C:/System32', 'config.txt', 'file', {
//     extension: '.txt',
//     metadata: { size: 256, system: true }
// });

// // Example operations for handling duplicates
// console.log('\n=== DUPLICATE HANDLING EXAMPLES ===');

// // 1. Find all files named "index.html"
// console.log('\n1. All index.html files:');
// const indexFiles: SearchResult[] = fileSystem.search('index.html', { exactMatch: true });
// indexFiles.forEach((file, i) => {
//     console.log(`  ${i + 1}. ${file.windowsPath} (${file.size} bytes)`);
// });

// // 2. Find duplicates by name
// console.log('\n2. Duplicate files:');
// const duplicates: DuplicateGroup[] = fileSystem.findDuplicatesByName('index.html');
// duplicates.forEach(dup => {
//     console.log(`  File: ${dup.fileName} (${dup.count} copies)`);
//     dup.locations.forEach((loc, i) => {
//         console.log(`    ${i + 1}. ${loc.windowsPath} (${loc.size} bytes)`);
//     });
// });

// // 3. Find specific file with disambiguation
// console.log('\n3. Find index.html in Desktop folder:');
// const desktopIndex = fileSystem.findFileByName('index.html', 'Desktop');
// if (desktopIndex && !('multiple' in desktopIndex)) {
//     console.log(`  Found: ${desktopIndex.windowsPath}`);
// }

// // 4. Handle ambiguous file search
// console.log('\n4. Ambiguous search for config.txt:');
// const configSearch = fileSystem.findFileByName('config.txt');
// if (configSearch && 'multiple' in configSearch) {
//     console.log(`  Found ${configSearch.count} files named config.txt:`);
//     configSearch.matches.forEach(match => {
//         console.log(`    ${match.index}. ${match.windowsPath} - ${match.suggestion}`);
//     });
// }

// // 5. Get path suggestions
// console.log('\n5. Path suggestions for "MyProject":');
// const suggestions: PathSuggestion[] = fileSystem.getPathSuggestions('MyProject');
// suggestions.forEach(suggestion => {
//     console.log(`  ${suggestion.index}. ${suggestion.fullPath} (in ${suggestion.hint})`);
// });

// // 6. Advanced search with filters
// console.log('\n6. Search for all .html files:');
// const htmlFiles: SearchResult[] = fileSystem.search('', { 
//     type: 'file', 
//     extension: '.html' 
// });
// htmlFiles.forEach(file => {
//     console.log(`  ${file.windowsPath} (${file.size} bytes)`);
// });

// console.log('\n=== SYSTEM STRUCTURE ===');
// console.log('Full structure:', JSON.stringify(fileSystem.export(), null, 2));

// Export the classes for use
export { FileSystemNode, FileSystem };
export type { 
    NodeType, 
    NodeMetadata, 
    FileSystemNodeConfig, 
    SearchOptions, 
    SearchResult, 
    DuplicateGroup, 
    PathSuggestion,
    DirectoryContentsOptions,
    FileSystemExport,
    CreateNodeOptions
};