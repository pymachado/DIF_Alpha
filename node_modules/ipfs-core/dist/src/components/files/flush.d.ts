declare function _exports(context: MfsContext): (path: string, options?: any) => Promise<import("multiformats").CID>;
export = _exports;
export type MfsContext = import('./').MfsContext;
export type DefaultOptions = {
    signal?: AbortSignal | undefined;
    timeout?: number | undefined;
};
//# sourceMappingURL=flush.d.ts.map