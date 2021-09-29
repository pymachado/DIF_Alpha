declare function _exports({ repo, preload }: {
    repo: import('ipfs-repo').IPFSRepo;
    preload: import('../../../types').Preload;
}): (cid: import("multiformats").CID, data: Uint8Array, options?: any) => Promise<import("multiformats").CID>;
export = _exports;
//# sourceMappingURL=set-data.d.ts.map