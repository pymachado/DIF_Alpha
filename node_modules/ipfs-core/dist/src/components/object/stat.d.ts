declare function _exports({ repo, preload }: {
    repo: import('ipfs-repo').IPFSRepo;
    preload: import('../../types').Preload;
}): (cid: import("multiformats").CID, options?: any) => Promise<import("ipfs-core-types/src/object").StatResult>;
export = _exports;
//# sourceMappingURL=stat.d.ts.map