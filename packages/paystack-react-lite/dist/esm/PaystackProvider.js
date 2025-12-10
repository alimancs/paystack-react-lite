import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext } from "react";
const PaystackContext = createContext(null);
export function PaystackProvider({ publicKey, children, }) {
    return (_jsx(PaystackContext.Provider, { value: { publicKey }, children: children }));
}
export function usePaystackPublicKey() {
    const context = useContext(PaystackContext);
    if (!context) {
        throw new Error("usePaystackPublicKey must be used within a PaystackProvider");
    }
    return context.publicKey;
}
