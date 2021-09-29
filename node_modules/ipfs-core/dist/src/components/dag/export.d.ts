declare function _exports({ repo, preload, codecs }: {
    repo: IPFSRepo;
    preload: Preload;
    codecs: import('ipfs-core-utils/src/multicodecs');
}): (root: CID, options?: any) => AsyncIterable<Uint8Array>;
export = _exports;
export type Preload = import('../../types').Preload;
export type IPFSRepo = import('ipfs-repo').IPFSRepo;
export type BlockWriter = import('@ipld/car/api').BlockWriter;
export type AbortOptions = import('ipfs-core-types/src/utils').AbortOptions;
import { CID } from "multiformats/cid";
//# sourceMappingURL=export.d.ts.map