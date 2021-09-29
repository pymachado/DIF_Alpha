declare function _exports({ repo }: {
    repo: IPFSRepo;
}): (sources: AsyncIterable<Uint8Array> | Iterable<Uint8Array> | AsyncIterable<AsyncIterable<Uint8Array>> | Iterable<AsyncIterable<Uint8Array>>, options?: any) => AsyncIterable<import("ipfs-core-types/src/dag/").ImportResult>;
export = _exports;
export type CID = import('multiformats/cid').CID;
export type IPFSRepo = import('ipfs-repo').IPFSRepo;
export type AbortOptions = import('ipfs-core-types/src/utils').AbortOptions;
export type RootStatus = import('ipfs-core-types/src/dag/').ImportRootStatus;
//# sourceMappingURL=import.d.ts.map