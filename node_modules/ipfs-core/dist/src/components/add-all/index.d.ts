declare function _exports({ repo, preload, options }: Context): (source: import("ipfs-core-types/src/utils").ImportCandidateStream, options?: any) => AsyncIterable<import("ipfs-core-types/src/root").AddResult>;
export = _exports;
export type CID = import('multiformats/cid').CID;
export type ImportResult = import('ipfs-unixfs-importer').ImportResult;
export type Context = {
    repo: import('ipfs-repo').IPFSRepo;
    preload: import('../../types').Preload;
    options?: import("ipfs-core-types/src/root").ShardingOptions | undefined;
};
//# sourceMappingURL=index.d.ts.map