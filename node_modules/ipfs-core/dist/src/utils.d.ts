export type AbortOptions = import('ipfs-core-types/src/utils').AbortOptions;
export type PBLink = import('@ipld/dag-pb').PBLink;
export type UnixFSEntry = import('ipfs-unixfs-exporter').UnixFSEntry;
/**
 * Returns a well-formed ipfs Path.
 * The returned path will always be prefixed with /ipfs/ or /ipns/.
 *
 * @param  {string | CID} pathStr - An ipfs-path, or ipns-path or a cid
 * @returns {string} - ipfs-path or ipns-path
 * @throws on an invalid @param pathStr
 */
export function normalizePath(pathStr: string | CID): string;
/**
 * @param {Uint8Array|CID|string} path
 */
export function normalizeCidPath(path: Uint8Array | CID | string): string;
/**
 * Resolve various styles of an ipfs-path to the hash of the target node.
 * Follows links in the path
 *
 * @param {import('ipfs-repo').IPFSRepo} repo
 * @param {import('ipfs-core-utils/src/multicodecs')} codecs
 * @param {CID | string | Uint8Array} ipfsPath - A CID or IPFS path
 * @param {{ path?: string, signal?: AbortSignal }} [options] - Optional options passed directly to dag.resolve
 * @returns {Promise<{ cid: CID, remainderPath: string}>}
 */
export function resolvePath(repo: import('ipfs-repo').IPFSRepo, codecs: import('ipfs-core-utils/src/multicodecs'), ipfsPath: CID | string | Uint8Array, options?: {
    path?: string | undefined;
    signal?: AbortSignal | undefined;
} | undefined): Promise<{
    cid: CID;
    remainderPath: string;
}>;
/**
 * @typedef {import('ipfs-unixfs-exporter').UnixFSEntry} UnixFSEntry
 *
 * @param {UnixFSEntry} file
 */
export function mapFile(file: UnixFSEntry): import("ipfs-core-types/src/root").IPFSEntry;
export function withTimeout<T>(promise: T | Promise<T>, _options?: import("ipfs-core-types/src/utils").AbortOptions | undefined): Promise<T>;
/**
 * Retrieves IPLD Nodes along the `path` that is rooted at `cid`.
 *
 * @param {CID} cid - the CID where the resolving starts
 * @param {string} path - the path that should be resolved
 * @param {import('ipfs-core-utils/src/multicodecs')} codecs
 * @param {import('ipfs-repo').IPFSRepo} repo
 * @param {AbortOptions} [options]
 */
export function resolve(cid: CID, path: string, codecs: import('ipfs-core-utils/src/multicodecs'), repo: import('ipfs-repo').IPFSRepo, options?: import("ipfs-core-types/src/utils").AbortOptions | undefined): AsyncGenerator<{
    value: any;
    remainderPath: string;
}, void, unknown>;
import Key_1 = require("interface-datastore/dist/src/key");
import Key = Key_1.Key;
import { CID } from "multiformats/cid";
export declare const OFFLINE_ERROR: string;
export declare const MFS_ROOT_KEY: Key;
export declare const MFS_MAX_CHUNK_SIZE: number;
export declare const MFS_MAX_LINKS: number;
//# sourceMappingURL=utils.d.ts.map