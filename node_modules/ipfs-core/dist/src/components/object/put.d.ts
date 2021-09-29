declare function _exports({ repo, preload }: {
    repo: import('ipfs-repo').IPFSRepo;
    preload: import('../../types').Preload;
}): (obj: import("@ipld/dag-pb/src/interface").PBNode, options?: any) => Promise<CID>;
export = _exports;
import { CID } from "multiformats/cid";
//# sourceMappingURL=put.d.ts.map