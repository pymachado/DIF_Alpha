declare function _exports({ ipns, repo, codecs, peerId, isOnline, keychain }: {
    ipns: import('../ipns');
    repo: import('ipfs-repo').IPFSRepo;
    codecs: import('ipfs-core-utils/src/multicodecs');
    peerId: import('peer-id');
    isOnline: import('ipfs-core-types/src/root').API["isOnline"];
    keychain: import('libp2p/src/keychain');
}): (value: string | import("multiformats").CID, options?: any) => Promise<import("ipfs-core-types/src/name").PublishResult>;
export = _exports;
//# sourceMappingURL=publish.d.ts.map