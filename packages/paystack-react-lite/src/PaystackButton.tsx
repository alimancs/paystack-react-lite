import React from "react";
import { usePaystack } from "./usePaystack";
import { PaystackConfig } from "./types";

interface PaystackButtonProps extends PaystackConfig {
  className?: string;
  children?: React.ReactNode;
  ref?:React.Ref<HTMLButtonElement>;
}

export function PaystackButton({
  className,
  children = "Pay Now",
  ref,
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
      ref={ref}
    >
      {children}
    </button>
  );
}
