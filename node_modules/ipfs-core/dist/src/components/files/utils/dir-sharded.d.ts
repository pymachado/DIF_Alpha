export = DirSharded;
declare class DirSharded extends Dir {
    /** @type {Bucket<DirContents>} */
    _bucket: Bucket<DirContents>;
    childCount(): number;
    directChildrenCount(): number;
    onlyChild(): Bucket<DirContents> | Bucket.BucketChild<DirContents>;
}
declare namespace DirSharded {
    export { ImporterOptions, Blockstore, CID, Mtime, ImportResult, DirContents, DirOptions, DirProps };
}
/**
 * @typedef {import('ipfs-unixfs-importer').ImporterOptions} ImporterOptions
 * @typedef {import('interface-blockstore').Blockstore} Blockstore
 * @typedef {import('multiformats/cid').CID} CID
 * @typedef {import('ipfs-unixfs').Mtime} Mtime
 *
 * @typedef {object} ImportResult
 * @property {CID} cid
 * @property {import('@ipld/dag-pb').PBNode} node
 * @property {number} size
 *
 * @typedef {object} DirContents
 * @property {CID} [cid]
 * @property {number} [size]
 *
 * @typedef {object} DirOptions
 * @property {Mtime} [mtime]
 * @property {number} [mode]
 * @property {import('multiformats/codecs/interface').BlockCodec<any, any>} [codec]
 * @property {import('multiformats/cid').CIDVersion} [cidVersion]
 * @property {boolean} [onlyHash]
 * @property {AbortSignal} [signal]
 */
/**
 * @typedef {object} DirProps
 * @property {boolean} root
 * @property {boolean} dir
 * @property {string} path
 * @property {boolean} dirty
 * @property {boolean} flat
 * @property {Dir} [parent]
 * @property {string} [parentKey]
 * @property {import('ipfs-unixfs').UnixFS} [unixfs]
 * @property {number} [mode]
 * @property {import('ipfs-unixfs').Mtime} [mtime]
 */
declare class Dir {
    /**
     * @param {DirProps} props
     * @param {DirOptions} options
     */
    constructor(props: DirProps, options: DirOptions);
    options: DirOptions;
    root: boolean;
    dir: boolean;
    path: string;
    dirty: boolean;
    flat: boolean;
    parent: Dir | undefined;
    parentKey: string | undefined;
    unixfs: UnixFS | undefined;
    mode: number | undefined;
    mtime: import("ipfs-unixfs/types/src/types").Mtime | undefined;
    /** @type {CID | undefined} */
    cid: CID | undefined;
    /** @type {number | undefined} */
    size: number | undefined;
    /**
     * @param {string} name
     * @param {DirContents} value
     */
    put(name: string, value: DirContents): Promise<void>;
    /**
     * @param {string} name
     * @returns {Promise<DirContents | undefined>}
     */
    get(name: string): Promise<DirContents | undefined>;
    /**
     * @returns {AsyncIterable<{ key: string, child: DirContents}>}
     */
    eachChildSeries(): AsyncIterable<{
        key: string;
        child: DirContents;
    }>;
    /**
     * @param {Blockstore} blockstore
     * @returns {AsyncIterable<ImportResult>}
     */
    flush(blockstore: Blockstore): AsyncIterable<ImportResult>;
}
import { Bucket } from "hamt-sharding";
type DirContents = {
    cid?: import("multiformats/cid").CID | undefined;
    size?: number | undefined;
};
type ImporterOptions = import('ipfs-unixfs-importer').ImporterOptions;
type Blockstore = import('interface-blockstore').Blockstore;
type CID = import('multiformats/cid').CID;
type Mtime = import('ipfs-unixfs').Mtime;
type ImportResult = {
    cid: CID;
    node: import('@ipld/dag-pb').PBNode;
    size: number;
};
type DirOptions = {
    mtime?: import("ipfs-unixfs/types/src/types").Mtime | undefined;
    mode?: number | undefined;
    codec?: import("multiformats/codecs/interface").BlockCodec<any, any> | undefined;
    cidVersion?: import("multiformats/cid").CIDVersion | undefined;
    onlyHash?: boolean | undefined;
    signal?: AbortSignal | undefined;
};
type DirProps = {
    root: boolean;
    dir: boolean;
    path: string;
    dirty: boolean;
    flat: boolean;
    parent?: Dir | undefined;
    parentKey?: string | undefined;
    unixfs?: UnixFS | undefined;
    mode?: number | undefined;
    mtime?: import("ipfs-unixfs/types/src/types").Mtime | undefined;
};
import { UnixFS } from "ipfs-unixfs";
//# sourceMappingURL=dir-sharded.d.ts.map