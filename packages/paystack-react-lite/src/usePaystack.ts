import { PaystackConfig } from "./types";
import { usePaystackScript } from "./usePaystackScript";

export function usePaystack(config: PaystackConfig) {
  const ready = usePaystackScript();

  function initializePayment() {
    if (!ready) {
      console.error("Paystack script not loaded");
      return;
    }

    if (!window.PaystackPop) {
      console.error("PaystackPop is not available on window");
      return;
    }

    const handler = window.PaystackPop.setup({
      key: config.publicKey,
      email: config.email,
      amount: config.amount,
      currency: config.currency || "NGN",
      ref: config.reference,
      metadata: config.metadata,
      plan: config.plan,
      quantity: config.quantity,
      channels: config.channels,
      onClose: () => {
        if (config.onClose) config.onClose();
      },
      callback: (response: any) => {
        if (config.onSuccess) config.onSuccess(response);
      },
    });

    handler.openIframe();
  }

  return { initializePayment, ready };
}
