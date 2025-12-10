import React from "react";
import { usePaystack } from "./usePaystack";
import { PaystackConfig } from "./types";

interface PaystackButtonProps extends PaystackConfig {
  className?: string;
  children?: React.ReactNode;
}

export function PaystackButton({
  className,
  children = "Pay Now",
  ...config
}: PaystackButtonProps) {
  const { initializePayment, ready } = usePaystack(config);

  return (
    <button
      className={className}
      disabled={!ready}
      onClick={() => {
        initializePayment();
      }}
    >
      {children}
    </button>
  );
}
