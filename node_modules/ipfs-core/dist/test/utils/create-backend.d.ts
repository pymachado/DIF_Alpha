export = createBackend;
declare function createBackend(overrides?: {}): {
    datastore: MemoryDatastore;
    blocks: any;
    pins: MemoryDatastore;
    keys: MemoryDatastore;
    root: MemoryDatastore;
};
import { MemoryDatastore } from "interface-datastore";
//# sourceMappingURL=create-backend.d.ts.map