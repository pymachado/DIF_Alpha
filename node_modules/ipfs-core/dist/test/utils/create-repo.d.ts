declare function _exports(options?: {
    path?: string | undefined;
    version?: number | undefined;
    spec?: number | undefined;
    autoMigrate?: boolean | undefined;
    onMigrationProgress?: ((version: number, percentComplete: string, message: string) => void) | undefined;
    config?: import("ipfs-core-types/src/config").Config | undefined;
}): Promise<import("ipfs-repo/dist/src/types").IPFSRepo>;
export = _exports;
//# sourceMappingURL=create-repo.d.ts.map