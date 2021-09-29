declare function _exports({ repo, codecs, bases, name }: {
    repo: import('ipfs-repo').IPFSRepo;
    codecs: import('ipfs-core-utils/src/multicodecs');
    bases: import('ipfs-core-utils/src/multibases');
    name: import('ipfs-core-types/src/name').API;
}): (path: string, opts?: any) => Promise<string>;
export = _exports;
//# sourceMappingURL=resolve.d.ts.map