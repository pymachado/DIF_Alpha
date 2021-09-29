declare function _exports({ repo, codecs, hashers, preload }: {
    repo: import('ipfs-repo').IPFSRepo;
    codecs: import('ipfs-core-utils/src/multicodecs');
    hashers: import('ipfs-core-utils/src/multihashes');
    preload: import('../../types').Preload;
}): (dagNode: any, options?: any) => Promise<CID>;
export = _exports;
import { CID } from "multiformats/cid";
//# sourceMappingURL=put.d.ts.map