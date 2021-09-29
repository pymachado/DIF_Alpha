declare function _exports({ repo, preload }: {
    repo: import('ipfs-repo').IPFSRepo;
    preload: import('../../../types').Preload;
}): (cid: import("multiformats").CID, data: Uint8Array, options?: any) => Promise<import("multiformats").CID>;
export = _exports;
//# sourceMappingURL=append-data.d.ts.map