declare function _exports({ repo, codecs, resolve, preload }: {
    repo: import('ipfs-repo').IPFSRepo;
    codecs: import('ipfs-core-utils/src/multicodecs');
    resolve: import('ipfs-core-types/src/root').API["resolve"];
    preload: import('../../types').Preload;
}): (ipfsPath: import("ipfs-core-types/src/utils").IPFSPath | import("ipfs-core-types/src/utils").IPFSPath[], options?: any) => AsyncIterable<import("ipfs-core-types/src/refs").RefsResult>;
declare namespace _exports {
    export { Format };
    export { Node, TraversalResult, AbortOptions };
}
export = _exports;
export type Node = {
    name?: string | undefined;
    cid: CID;
};
export type TraversalResult = {
    parent: Node;
    node: Node;
    isDuplicate: boolean;
};
export type AbortOptions = import('ipfs-core-types/src/utils').AbortOptions;
declare namespace Format {
    const _default: string;
    export { _default as default };
    export const edges: string;
}
import { CID } from "multiformats/cid";
//# sourceMappingURL=index.d.ts.map