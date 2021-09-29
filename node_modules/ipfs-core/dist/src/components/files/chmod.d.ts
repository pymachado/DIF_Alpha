declare function _exports(context: MfsContext): (path: string, mode: string | number, options?: any) => Promise<void>;
export = _exports;
export type CIDVersion = import('multiformats/cid').CIDVersion;
export type PBNode = import('@ipld/dag-pb').PBNode;
export type MfsContext = import('./').MfsContext;
export type DefaultOptions = {
    flush: boolean;
    hashAlg: string;
    cidVersion: CIDVersion;
    shardSplitThreshold: number;
    recursive: boolean;
    signal?: AbortSignal | undefined;
    timeout?: number | undefined;
};
//# sourceMappingURL=chmod.d.ts.map