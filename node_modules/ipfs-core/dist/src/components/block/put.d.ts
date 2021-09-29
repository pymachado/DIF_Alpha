declare function _exports({ codecs, hashers, repo, preload }: {
    codecs: import('ipfs-core-utils/src/multicodecs');
    hashers: import('ipfs-core-utils/src/multihashes');
    repo: import('ipfs-repo').IPFSRepo;
    preload: import('../../types').Preload;
}): (block: Uint8Array, options?: any) => Promise<CID>;
export = _exports;
export type CIDVersion = import('multiformats/cid').CIDVersion;
import { CID } from "multiformats/cid";
//# sourceMappingURL=put.d.ts.map