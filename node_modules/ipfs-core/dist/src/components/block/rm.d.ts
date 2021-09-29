declare function _exports({ repo }: {
    repo: import('ipfs-repo').IPFSRepo;
}): (cids: import("multiformats").CID | import("multiformats").CID[], options?: any) => AsyncIterable<import("ipfs-core-types/src/block").RmResult>;
export = _exports;
//# sourceMappingURL=rm.d.ts.map