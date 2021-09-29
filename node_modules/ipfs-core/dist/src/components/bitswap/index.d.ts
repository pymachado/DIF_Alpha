export = BitswapAPI;
/**
 * @typedef {import('../../types').NetworkService} NetworkService
 * @typedef {import('peer-id')} PeerId
 * @typedef {import('multiformats/cid').CID} CID
 * @typedef {import('ipfs-core-types/src/utils').AbortOptions} AbortOptions
 */
declare class BitswapAPI {
    /**
     * @param {Object} config
     * @param {NetworkService} config.network
     */
    constructor({ network }: {
        network: import("../../types").NetworkService;
    });
    wantlist: (options?: any) => Promise<import("multiformats/cid").CID[]>;
    wantlistForPeer: (peerId: string, options?: any) => Promise<import("multiformats/cid").CID[]>;
    unwant: (cids: import("multiformats/cid").CID | import("multiformats/cid").CID[], options?: any) => Promise<void>;
    stat: (options?: any) => Promise<import("ipfs-core-types/src/bitswap").Stats>;
}
declare namespace BitswapAPI {
    export { NetworkService, PeerId, CID, AbortOptions };
}
type NetworkService = import('../../types').NetworkService;
type PeerId = import('peer-id');
type CID = import('multiformats/cid').CID;
type AbortOptions = import('ipfs-core-types/src/utils').AbortOptions;
//# sourceMappingURL=index.d.ts.map