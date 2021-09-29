export = Storage;
/**
 * @typedef {import('ipfs-repo').IPFSRepo} IPFSRepo
 * @typedef {import('../types').Options} IPFSOptions
 * @typedef {import('../types').InitOptions} InitOptions
 * @typedef {import('../types').Print} Print
 * @typedef {import('ipfs-core-types/src/config').Config} IPFSConfig
 * @typedef {import('libp2p-crypto').KeyType} KeyType
 * @typedef {import('libp2p/src/keychain')} Keychain
 */
declare class Storage {
    /**
     * @param {Print} print
     * @param {import('ipfs-core-utils/src/multicodecs')} codecs
     * @param {IPFSOptions} options
     */
    static start(print: Print, codecs: import('ipfs-core-utils/src/multicodecs'), options: IPFSOptions): Promise<import("./storage")>;
    /**
     * @private
     * @param {PeerId} peerId
     * @param {Keychain} keychain
     * @param {IPFSRepo} repo
     * @param {Print} print
     * @param {boolean} isNew
     */
    private constructor();
    print: import("../types").Print;
    peerId: PeerId;
    keychain: import("libp2p/src/keychain");
    repo: import("ipfs-repo/dist/src/types").IPFSRepo;
    isNew: boolean;
}
declare namespace Storage {
    export { IPFSRepo, IPFSOptions, InitOptions, Print, IPFSConfig, KeyType, Keychain };
}
import PeerId = require("peer-id");
type Print = import('../types').Print;
type IPFSOptions = import('../types').Options;
type IPFSRepo = import('ipfs-repo').IPFSRepo;
type InitOptions = import('../types').InitOptions;
type IPFSConfig = import('ipfs-core-types/src/config').Config;
type KeyType = import('libp2p-crypto').KeyType;
type Keychain = import('libp2p/src/keychain');
//# sourceMappingURL=storage.d.ts.map