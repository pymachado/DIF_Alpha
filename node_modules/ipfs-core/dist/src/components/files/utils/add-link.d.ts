export = addLink;
/**
 * @typedef {import('ipfs-unixfs').Mtime} Mtime
 * @typedef {import('multiformats/cid').CIDVersion} CIDVersion
 * @typedef {import('hamt-sharding').Bucket<any>} Bucket
 * @typedef {import('../').MfsContext} MfsContext
 * @typedef {import('@ipld/dag-pb').PBNode} PBNode
 * @typedef {import('@ipld/dag-pb').PBLink} PBLink
 */
/**
 * @param {MfsContext} context
 * @param {object} options
 * @param {CID} options.cid
 * @param {string} options.name
 * @param {number} options.size
 * @param {number} options.shardSplitThreshold
 * @param {string} options.hashAlg
 * @param {CIDVersion} options.cidVersion
 * @param {boolean} options.flush
 * @param {CID} [options.parentCid]
 * @param {PBNode} [options.parent]
 */
declare function addLink(context: MfsContext, options: {
    cid: CID;
    name: string;
    size: number;
    shardSplitThreshold: number;
    hashAlg: string;
    cidVersion: CIDVersion;
    flush: boolean;
    parentCid?: CID | undefined;
    parent?: import("@ipld/dag-pb/src/interface").PBNode | undefined;
}): Promise<DirSharded.ImportResult>;
declare namespace addLink {
    export { Mtime, CIDVersion, Bucket, MfsContext, PBNode, PBLink };
}
type MfsContext = import('../').MfsContext;
import { CID } from "multiformats/cid";
type CIDVersion = import('multiformats/cid').CIDVersion;
import DirSharded = require("./dir-sharded");
type Mtime = import('ipfs-unixfs').Mtime;
type Bucket = import('hamt-sharding').Bucket<any>;
type PBNode = import('@ipld/dag-pb').PBNode;
type PBLink = import('@ipld/dag-pb').PBLink;
//# sourceMappingURL=add-link.d.ts.map