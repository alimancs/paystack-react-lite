import { ReactNode } from "react";
export declare function PaystackProvider({ publicKey, children, }: {
    publicKey: string;
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export declare function usePaystackPublicKey(): string;
