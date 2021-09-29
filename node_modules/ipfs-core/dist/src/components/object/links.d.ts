declare function _exports({ repo, codecs }: {
    repo: import('ipfs-repo').IPFSRepo;
    codecs: import('ipfs-core-utils/src/multicodecs');
}): (cid: CID, options?: any) => Promise<import("@ipld/dag-pb/src/interface").PBLink[]>;
export = _exports;
export type DAGLink = import('@ipld/dag-pb').PBLink;
import { CID } from "multiformats/cid";
//# sourceMappingURL=links.d.ts.map