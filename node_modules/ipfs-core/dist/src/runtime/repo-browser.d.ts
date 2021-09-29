declare function _exports(print: import('../types').Print, codecs: import('ipfs-core-utils/src/multicodecs'), options: {
    path?: string | undefined;
    autoMigrate?: boolean | undefined;
    onMigrationProgress?: import("ipfs-repo-migrations/dist/src/types").ProgressCallback | undefined;
}): import("ipfs-repo/dist/src/types").IPFSRepo;
export = _exports;
export type MigrationProgressCallback = import('ipfs-repo-migrations').ProgressCallback;
//# sourceMappingURL=repo-browser.d.ts.map