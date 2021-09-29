declare function _exports({ repo, codecs }: {
    codecs: import('ipfs-core-utils/src/multicodecs');
    repo: import('ipfs-repo').IPFSRepo;
}): (source: import("ipfs-core-types/src/utils").AwaitIterable<import("ipfs-core-types/src/pin").AddInput>, options?: any) => AsyncIterable<import("multiformats/cid").CID>;
export = _exports;
export type Source = import('ipfs-core-utils/src/pins/normalise-input').Source;
export type PinTarget = import('ipfs-core-utils/src/pins/normalise-input').Pin;
export type AbortOptions = import('ipfs-core-types/src/utils').AbortOptions;
export type CID = import('multiformats/cid').CID;
export type AwaitIterable<T> = Iterable<T> | AsyncIterable<T>;
//# sourceMappingURL=add-all.d.ts.map