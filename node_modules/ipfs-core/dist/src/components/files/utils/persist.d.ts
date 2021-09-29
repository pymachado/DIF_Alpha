export = persist;
/**
 * @typedef {object} PersistOptions
 * @property {import('multiformats/codecs/interface').BlockCodec<any, any>} [codec]
 * @property {import('multiformats/hashes/interface').MultihashHasher} [hasher]
 * @property {import('multiformats/cid').CIDVersion} [cidVersion]
 * @property {boolean} [onlyHash]
 * @property {AbortSignal} [signal]
 */
/**
 * @param {Uint8Array} buffer
 * @param {import('interface-blockstore').Blockstore} blockstore
 * @param {PersistOptions} options
 */
declare function persist(buffer: Uint8Array, blockstore: import('interface-blockstore').Blockstore, options: PersistOptions): Promise<CID>;
declare namespace persist {
    export { PersistOptions };
}
type PersistOptions = {
    codec?: import("multiformats/codecs/interface").BlockCodec<any, any> | undefined;
    hasher?: import("multiformats/hashes/interface").MultihashHasher | undefined;
    cidVersion?: import("multiformats/cid").CIDVersion | undefined;
    onlyHash?: boolean | undefined;
    signal?: AbortSignal | undefined;
};
import { CID } from "multiformats/cid";
//# sourceMappingURL=persist.d.ts.map