declare function _exports({ repo, preload }: {
    repo: import('ipfs-repo').IPFSRepo;
    preload: import('../../../types').Preload;
}): (cid: import("multiformats").CID, link: import("@ipld/dag-pb/src/interface").PBLink, options?: any) => Promise<import("multiformats").CID>;
export = _exports;
//# sourceMappingURL=add-link.d.ts.map