export = ObjectAPI;
/**
 * @typedef {import('../../types').Preload} Preload
 * @typedef {import('multiformats/cid').CID} CID
 * @typedef {import('ipfs-core-types/src/utils').AbortOptions} AbortOptions
 */
declare class ObjectAPI {
    /**
     * @param {Object} config
     * @param {import('ipfs-repo').IPFSRepo} config.repo
     * @param {import('ipfs-core-utils/src/multicodecs')} config.codecs
     * @param {Preload} config.preload
     */
    constructor({ repo, codecs, preload }: {
        repo: import('ipfs-repo').IPFSRepo;
        codecs: import('ipfs-core-utils/src/multicodecs');
        preload: Preload;
    });
    data: (multihash: import("multiformats/cid").CID, options?: any) => Promise<Uint8Array>;
    get: (cid: import("multiformats/cid").CID, options?: any) => Promise<import("@ipld/dag-pb/src/interface").PBNode>;
    links: (cid: import("multiformats/cid").CID, options?: any) => Promise<import("@ipld/dag-pb/src/interface").PBLink[]>;
    new: (options?: any) => Promise<import("multiformats/cid").CID>;
    put: (obj: import("@ipld/dag-pb/src/interface").PBNode, options?: any) => Promise<import("multiformats/cid").CID>;
    stat: (cid: import("multiformats/cid").CID, options?: any) => Promise<import("ipfs-core-types/src/object").StatResult>;
    patch: ObjectPatchAPI;
}
declare namespace ObjectAPI {
    export { Preload, CID, AbortOptions };
}
import ObjectPatchAPI = require("./patch");
type Preload = import('../../types').Preload;
type CID = import('multiformats/cid').CID;
type AbortOptions = import('ipfs-core-types/src/utils').AbortOptions;
//# sourceMappingURL=index.d.ts.map