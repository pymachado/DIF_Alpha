declare function _exports({ network, preload, ipns, repo, mfsPreload }: {
    network: import('../types').NetworkService;
    preload: import('../types').Preload;
    ipns: import('./ipns');
    repo: import('ipfs-repo').IPFSRepo;
    mfsPreload: import('../types').MfsPreload;
}): (options?: any) => Promise<void>;
export = _exports;
//# sourceMappingURL=stop.d.ts.map