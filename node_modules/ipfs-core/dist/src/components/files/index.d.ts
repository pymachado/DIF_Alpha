declare function _exports({ repo, preload, hashers, options: constructorOptions }: {
    repo: IPFSRepo;
    preload: import('../../types').Preload;
    options: import('..').Options;
    hashers: Multihashes;
}): import('ipfs-core-types/src/files').API;
export = _exports;
export type MultihashHasher = import('multiformats/hashes/interface').MultihashHasher;
export type Multihashes = import('ipfs-core-utils/src/multihashes');
export type IPFSRepo = import('ipfs-repo').IPFSRepo;
export type MfsContext = {
    repo: IPFSRepo;
    hashers: Multihashes;
};
//# sourceMappingURL=index.d.ts.map