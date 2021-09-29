export = removeLink;
/**
 * @typedef {import('../').MfsContext} MfsContext
 * @typedef {import('multiformats/cid').CIDVersion} CIDVersion
 * @typedef {import('hamt-sharding').Bucket<any>} Bucket
 * @typedef {import('@ipld/dag-pb').PBNode} PBNode
 *
 * @typedef {object} RemoveLinkOptions
 * @property {string} name
 * @property {number} shardSplitThreshold
 * @property {string} hashAlg
 * @property {CIDVersion} cidVersion
 * @property {boolean} flush
 * @property {CID} [parentCid]
 * @property {PBNode} [parent]
 *
 * @typedef {object} RemoveLinkOptionsInternal
 * @property {string} name
 * @property {number} shardSplitThreshold
 * @property {string} hashAlg
 * @property {CIDVersion} cidVersion
 * @property {boolean} flush
 * @property {PBNode} parent
 */
/**
 * @param {MfsContext} context
 * @param {RemoveLinkOptions} options
 */
declare function removeLink(context: MfsContext, options: RemoveLinkOptions): Promise<{
    node: import("@ipld/dag-pb/src/interface").PBNode;
    cid: CID;
}>;
declare namespace removeLink {
    export { MfsContext, CIDVersion, Bucket, PBNode, RemoveLinkOptions, RemoveLinkOptionsInternal };
}
type MfsContext = import('../').MfsContext;
type RemoveLinkOptions = {
    name: string;
    shardSplitThreshold: number;
    hashAlg: string;
    cidVersion: CIDVersion;
    flush: boolean;
    parentCid?: CID | undefined;
    parent?: import("@ipld/dag-pb/src/interface").PBNode | undefined;
};
import { CID } from "multiformats/cid";
type CIDVersion = import('multiformats/cid').CIDVersion;
type Bucket = import('hamt-sharding').Bucket<any>;
type PBNode = import('@ipld/dag-pb').PBNode;
type RemoveLinkOptionsInternal = {
    name: string;
    shardSplitThreshold: number;
    hashAlg: string;
    cidVersion: CIDVersion;
    flush: boolean;
    parent: PBNode;
};
//# sourceMappingURL=remove-link.d.ts.map