export = createNode;
/**
 * @typedef {import('ipfs-unixfs').MtimeLike} MtimeLike
 * @typedef {import('multiformats/cid').CIDVersion} CIDVersion
 * @typedef {import('../').MfsContext} MfsContext
 */
/**
 * @param {MfsContext} context
 * @param {'file' | 'directory'} type
 * @param {object} options
 * @param {string} options.hashAlg
 * @param {CIDVersion} options.cidVersion
 * @param {boolean} options.flush
 * @param {MtimeLike} [options.mtime]
 * @param {number} [options.mode]
 */
declare function createNode(context: MfsContext, type: 'file' | 'directory', options: {
    hashAlg: string;
    cidVersion: CIDVersion;
    flush: boolean;
    mtime?: import("ipfs-unixfs/types/src/types").MtimeLike | undefined;
    mode?: number | undefined;
}): Promise<{
    cid: CID;
    node: {
        Data: Uint8Array;
        Links: never[];
    };
}>;
declare namespace createNode {
    export { MtimeLike, CIDVersion, MfsContext };
}
type MfsContext = import('../').MfsContext;
type CIDVersion = import('multiformats/cid').CIDVersion;
import { CID } from "multiformats/cid";
type MtimeLike = import('ipfs-unixfs').MtimeLike;
//# sourceMappingURL=create-node.d.ts.map