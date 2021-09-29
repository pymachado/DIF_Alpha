export = RepoAPI;
/**
 * @typedef {import('multiformats/hashes/interface').MultihashHasher} MultihashHasher
 * @typedef {import('ipfs-core-utils/src/multihashes')} Multihashes
 */
declare class RepoAPI {
    /**
     * @param {Object} config
     * @param {import('ipfs-repo').IPFSRepo} config.repo
     * @param {Multihashes} config.hashers
     */
    constructor({ repo, hashers }: {
        repo: import('ipfs-repo').IPFSRepo;
        hashers: Multihashes;
    });
    gc: (options?: any) => AsyncIterable<import("ipfs-core-types/src/repo").GCResult>;
    stat: (options?: any) => Promise<import("ipfs-core-types/src/repo").StatResult>;
    version: (options?: any) => Promise<number>;
    /**
     * @param {string} addr
     */
    setApiAddr: (addr: string) => Promise<void>;
}
declare namespace RepoAPI {
    export { MultihashHasher, Multihashes };
}
type Multihashes = import('ipfs-core-utils/src/multihashes');
type MultihashHasher = import('multiformats/hashes/interface').MultihashHasher;
//# sourceMappingURL=index.d.ts.map