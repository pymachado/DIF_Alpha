declare function _exports({ codecs, repo, preload }: {
    codecs: import('ipfs-core-utils/src/multicodecs');
    repo: import('ipfs-repo').IPFSRepo;
    preload: import('../../types').Preload;
}): (cid: import("multiformats").CID, options?: any) => Promise<import("ipfs-core-types/src/dag").GetResult>;
export = _exports;
//# sourceMappingURL=get.d.ts.map