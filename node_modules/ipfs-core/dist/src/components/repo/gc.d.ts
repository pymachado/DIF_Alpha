declare function _exports({ repo, hashers }: {
    repo: IPFSRepo;
    hashers: Multihashes;
}): (options?: any) => AsyncIterable<import("ipfs-core-types/src/repo").GCResult>;
export = _exports;
export type PinAPI = import('ipfs-core-types/src/pin').API;
export type RefsAPI = import('ipfs-core-types/src/refs').API;
export type IPFSRepo = import('ipfs-repo').IPFSRepo;
export type Key = import('interface-datastore').Key;
export type MultihashHasher = import('multiformats/hashes/interface').MultihashHasher;
export type Multihashes = import('ipfs-core-utils/src/multihashes');
//# sourceMappingURL=gc.d.ts.map