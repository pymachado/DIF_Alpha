declare function _exports({ repo, preload }: {
    repo: import('ipfs-repo').IPFSRepo;
    preload: import('../../../types').Preload;
}): (multihash: import("multiformats").CID, linkRef: string | import("@ipld/dag-pb/src/interface").PBLink, options?: any) => Promise<import("multiformats").CID>;
export = _exports;
//# sourceMappingURL=rm-link.d.ts.map