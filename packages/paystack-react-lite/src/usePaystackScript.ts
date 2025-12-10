// src/usePaystackScript.ts

import { useEffect, useState } from "react";

const PAYSTACK_SCRIPT_SRC = "https://js.paystack.co/v1/inline.js";

export function usePaystackScript(): boolean {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (window.PaystackPop) {
      setReady(true);
      return;
    }

    const script = document.createElement("script");
    script.src = PAYSTACK_SCRIPT_SRC;
    script.async = true;
    script.onload = () => setReady(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return ready;
}
