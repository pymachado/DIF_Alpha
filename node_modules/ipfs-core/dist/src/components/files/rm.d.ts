declare function _exports(context: MfsContext): (paths: string | string[], opts?: any) => Promise<void>;
export = _exports;
export type CIDVersion = import('multiformats/cid').CIDVersion;
export type MfsContext = import('./').MfsContext;
export type DefaultOptions = {
    recursive: boolean;
    cidVersion: CIDVersion;
    hashAlg: string;
    flush: boolean;
    shardSplitThreshold: number;
    signal?: AbortSignal | undefined;
    timeout?: number | undefined;
};
//# sourceMappingURL=rm.d.ts.map