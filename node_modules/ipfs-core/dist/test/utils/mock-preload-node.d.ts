/// <reference types="node" />
export function createNode(): http.Server & {
    start: (opts?: any) => Promise<void>;
    stop: () => Promise<any>;
};
export const defaultAddr: string;
import http = require("http");
//# sourceMappingURL=mock-preload-node.d.ts.map