declare function _exports({ network, repo }: {
    network: import('../types').NetworkService;
    repo: import('ipfs-repo').IPFSRepo;
}): {
    get: (key: Uint8Array, options?: any) => Promise<Uint8Array>;
    put: (key: Uint8Array, value: Uint8Array, options?: any) => AsyncIterable<import("ipfs-core-types/src/dht").DHTQueryMessage>;
    findProvs: (cid: import("multiformats").CID, options?: any) => AsyncIterable<import("ipfs-core-types/src/dht").PeerResult>;
    findPeer: (peerId: string, options?: any) => Promise<import("ipfs-core-types/src/dht").PeerResult>;
    provide: (cid: import("multiformats").CID | import("multiformats").CID[], options?: any) => AsyncIterable<import("ipfs-core-types/src/dht").DHTQueryMessage>;
    query: (peerId: string, options?: any) => AsyncIterable<import("ipfs-core-types/src/dht").PeerResult>;
};
export = _exports;
//# sourceMappingURL=dht.d.ts.map