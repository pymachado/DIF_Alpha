export function clearPreloadCids(addr?: string | undefined): any;
export function waitForCids(cids: CID | CID[] | string | string[], opts?: {
    timeout?: number | undefined;
    addr?: string | undefined;
} | undefined): Promise<void>;
export type CID = import('multiformats/cid').CID;
export const defaultAddr: string;
/**
 * Get the stored preload CIDs for the server at `addr`
 *
 * @param {string} [addr]
 * @returns {Promise<string[]>}
 */
export function getPreloadCids(addr?: string | undefined): Promise<string[]>;
//# sourceMappingURL=mock-preload-node-utils.d.ts.map