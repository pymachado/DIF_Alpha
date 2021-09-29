declare function _exports({ repo }: {
    repo: import('ipfs-repo').IPFSRepo;
}): (options?: any) => Promise<{
    Peers: Multiaddr[];
}>;
export = _exports;
import { Multiaddr } from "multiaddr";
//# sourceMappingURL=clear.d.ts.map