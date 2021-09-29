declare function _exports({ repo, codecs, preload }: {
    codecs: import('ipfs-core-utils/src/multicodecs');
    repo: import('ipfs-repo').IPFSRepo;
    preload: import('../../types').Preload;
}): (ipfsPath: import("ipfs-core-types/src/utils").IPFSPath, options?: any) => Promise<import("ipfs-core-types/src/dag").ResolveResult>;
export = _exports;
//# sourceMappingURL=resolve.d.ts.map