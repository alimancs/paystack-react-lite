import { PaystackConfig } from "./types";
export declare function usePaystack(config: PaystackConfig): {
    initializePayment: () => void;
    ready: boolean;
};
