export = BlockStorage;
/**
 * @typedef {import('interface-blockstore').Blockstore} Blockstore
 * @typedef {import('interface-blockstore').Query} Query
 * @typedef {import('interface-blockstore').KeyQuery} KeyQuery
 * @typedef {import('multiformats/cid').CID} CID
 * @typedef {import('ipfs-bitswap').IPFSBitswap} Bitswap
 * @typedef {import('ipfs-core-types/src/utils').AbortOptions} AbortOptions
 * @typedef {import('ipfs-core-types/src/block').RmOptions} RmOptions
 */
/**
 * BlockStorage is a hybrid block datastore. It stores data in a local
 * datastore and may retrieve data from a remote Exchange.
 * It uses an internal `datastore.Datastore` instance to store values.
 *
 * @implements {Blockstore}
 */
declare class BlockStorage extends BlockstoreAdapter implements Blockstore {
    /**
     * Create a new BlockStorage
     *
     * @param {Blockstore} blockstore
     * @param {Bitswap} bitswap
     */
    constructor(blockstore: Blockstore, bitswap: Bitswap);
    child: import("interface-blockstore/dist/src/types").Blockstore;
    bitswap: import("ipfs-bitswap/src/types").IPFSBitswap;
    unwrap(): import("interface-blockstore/dist/src/types").Blockstore;
}
declare namespace BlockStorage {
    export { Blockstore, Query, KeyQuery, CID, Bitswap, AbortOptions, RmOptions };
}
type Blockstore = import('interface-blockstore').Blockstore;
import { BlockstoreAdapter } from "interface-blockstore";
type Bitswap = import('ipfs-bitswap').IPFSBitswap;
type Query = import('interface-blockstore').Query;
type KeyQuery = import('interface-blockstore').KeyQuery;
type CID = import('multiformats/cid').CID;
type AbortOptions = import('ipfs-core-types/src/utils').AbortOptions;
type RmOptions = import('ipfs-core-types/src/block').RmOptions;
//# sourceMappingURL=block-storage.d.ts.map