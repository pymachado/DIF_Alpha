declare function _exports({ repo, codecs }: {
    repo: import('ipfs-repo').IPFSRepo;
    codecs: import('ipfs-core-utils/src/multicodecs');
}): (source: import("ipfs-core-types/src/utils").AwaitIterable<import("ipfs-core-types/src/pin").RmAllInput>, _options?: any) => AsyncIterable<import("multiformats").CID>;
export = _exports;
//# sourceMappingURL=rm-all.d.ts.map