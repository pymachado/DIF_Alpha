export type CIDVersion = import('multiformats/cid').CIDVersion;
export type Mtime = import('ipfs-unixfs').Mtime;
export type MfsContext = import('../').MfsContext;
export type PBNode = import('@ipld/dag-pb').PBNode;
export type PBLink = import('@ipld/dag-pb').PBLink;
/**
 * @param {MfsContext} context
 * @param {string} fileName
 * @param {PBNode} rootNode
 */
export function generatePath(context: MfsContext, fileName: string, rootNode: PBNode): Promise<{
    rootBucket: Bucket<any>;
    path: {
        bucket: Bucket<any>;
        prefix: string;
        node?: import("@ipld/dag-pb/src/interface").PBNode | undefined;
    }[];
}>;
/**
 * @typedef {import('multiformats/cid').CIDVersion} CIDVersion
 * @typedef {import('ipfs-unixfs').Mtime} Mtime
 * @typedef {import('../').MfsContext} MfsContext
 * @typedef {import('@ipld/dag-pb').PBNode} PBNode
 * @typedef {import('@ipld/dag-pb').PBLink} PBLink
 */
/**
 * @param {MfsContext} context
 * @param {PBLink[]} links
 * @param {Bucket<any>} bucket
 * @param {object} options
 * @param {PBNode} options.parent
 * @param {CIDVersion} options.cidVersion
 * @param {boolean} options.flush
 * @param {string} options.hashAlg
 */
export function updateHamtDirectory(context: MfsContext, links: PBLink[], bucket: Bucket<any>, options: {
    parent: PBNode;
    cidVersion: CIDVersion;
    flush: boolean;
    hashAlg: string;
}): Promise<{
    node: {
        Data: Uint8Array;
        Links: import("@ipld/dag-pb/src/interface").PBLink[];
    };
    cid: CID;
    size: number;
}>;
/**
 * @param {PBLink[]} links
 * @param {Bucket<any>} rootBucket
 * @param {Bucket<any>} parentBucket
 * @param {number} positionAtParent
 */
export function recreateHamtLevel(links: PBLink[], rootBucket: Bucket<any>, parentBucket: Bucket<any>, positionAtParent: number): Promise<Bucket<any>>;
/**
 * @param {PBLink[]} links
 */
export function recreateInitialHamtLevel(links: PBLink[]): Promise<Bucket<any>>;
/**
 * @param {PBLink[]} links
 * @param {Bucket<any>} bucket
 * @param {Bucket<any>} rootBucket
 */
export function addLinksToHamtBucket(links: PBLink[], bucket: Bucket<any>, rootBucket: Bucket<any>): Promise<void>;
/**
 * @param {number} position
 */
export function toPrefix(position: number): string;
/**
 * @param {MfsContext} context
 * @param {{ name: string, size: number, cid: CID }[]} contents
 * @param {object} [options]
 * @param {Mtime} [options.mtime]
 * @param {number} [options.mode]
 */
export function createShard(context: MfsContext, contents: {
    name: string;
    size: number;
    cid: CID;
}[], options?: {
    mtime?: import("ipfs-unixfs/types/src/types").Mtime | undefined;
    mode?: number | undefined;
} | undefined): Promise<DirSharded.ImportResult>;
import { Bucket } from "hamt-sharding";
import { CID } from "multiformats/cid";
import DirSharded = require("./dir-sharded");
//# sourceMappingURL=hamt-utils.d.ts.map