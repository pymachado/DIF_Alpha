declare function _exports({ repo, preload }: {
    repo: import('ipfs-repo').IPFSRepo;
    preload: import('../../types').Preload;
}): (cid: import("multiformats").CID, options?: any) => Promise<import("@ipld/dag-pb/src/interface").PBNode>;
export = _exports;
//# sourceMappingURL=get.d.ts.map