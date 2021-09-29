export = DagAPI;
declare class DagAPI {
    /**
     * @param {Object} config
     * @param {import('ipfs-core-utils/src/multihashes')} config.hashers
     * @param {import('ipfs-core-utils/src/multicodecs')} config.codecs
     * @param {import('../../types').Preload} config.preload
     * @param {import('ipfs-repo').IPFSRepo} config.repo
     */
    constructor({ repo, codecs, hashers, preload }: {
        hashers: import('ipfs-core-utils/src/multihashes');
        codecs: import('ipfs-core-utils/src/multicodecs');
        preload: import('../../types').Preload;
        repo: import('ipfs-repo').IPFSRepo;
    });
    export: (root: import("multiformats").CID, options?: any) => AsyncIterable<Uint8Array>;
    get: (cid: import("multiformats").CID, options?: any) => Promise<import("ipfs-core-types/src/dag").GetResult>;
    import: (sources: AsyncIterable<Uint8Array> | Iterable<Uint8Array> | AsyncIterable<AsyncIterable<Uint8Array>> | Iterable<AsyncIterable<Uint8Array>>, options?: any) => AsyncIterable<import("ipfs-core-types/src/dag").ImportResult>;
    resolve: (ipfsPath: import("ipfs-core-types/src/utils").IPFSPath, options?: any) => Promise<import("ipfs-core-types/src/dag").ResolveResult>;
    put: (dagNode: any, options?: any) => Promise<import("multiformats").CID>;
}
//# sourceMappingURL=index.d.ts.map