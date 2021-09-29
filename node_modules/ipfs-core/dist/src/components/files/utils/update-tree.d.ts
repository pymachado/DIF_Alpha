export = updateTree;
/**
 * @typedef {import('multiformats/cid').CID} CID
 * @typedef {import('multiformats/cid').CIDVersion} CIDVersion
 * @typedef {import('../').MfsContext} MfsContext
 * @typedef {import('./to-trail').MfsTrail} MfsTrail
 */
/**
 * Loop backwards through the trail, replacing links of all components to update CIDs
 *
 * @param {MfsContext} context
 * @param {MfsTrail[]} trail
 * @param {object} options
 * @param {number} options.shardSplitThreshold
 * @param {string} options.hashAlg
 * @param {CIDVersion} options.cidVersion
 * @param {boolean} options.flush
 */
declare function updateTree(context: MfsContext, trail: MfsTrail[], options: {
    shardSplitThreshold: number;
    hashAlg: string;
    cidVersion: CIDVersion;
    flush: boolean;
}): Promise<any>;
declare namespace updateTree {
    export { CID, CIDVersion, MfsContext, MfsTrail };
}
type MfsContext = import('../').MfsContext;
type MfsTrail = import('./to-trail').MfsTrail;
type CIDVersion = import('multiformats/cid').CIDVersion;
type CID = import('multiformats/cid').CID;
//# sourceMappingURL=update-tree.d.ts.map