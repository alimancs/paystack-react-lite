import React, { createContext, ReactNode, useContext } from "react";

interface PaystackContextType {
  publicKey: string;
}

const PaystackContext = createContext<PaystackContextType | null>(null);

export function PaystackProvider({
  publicKey,
  children,
}: {
  publicKey: string;
  children: ReactNode;
}) {
  return (
    <PaystackContext.Provider value={{ publicKey }}>
      {children}
    </PaystackContext.Provider>
  );
}

export function usePaystackPublicKey() {
  const context = useContext(PaystackContext);
  if (!context) {
    throw new Error(
      "usePaystackPublicKey must be used within a PaystackProvider"
    );
  }
  return context.publicKey;
}
