declare function _exports({ repo, codecs }: {
    repo: import('ipfs-repo').IPFSRepo;
    codecs: import('ipfs-core-utils/src/multicodecs');
}): (options?: any) => AsyncIterable<import("ipfs-core-types/src/pin").LsResult>;
export = _exports;
export type CID = import('multiformats/cid').CID;
//# sourceMappingURL=ls.d.ts.map