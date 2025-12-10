export {};

declare global {
  interface Window {
    PaystackPop?: {
      setup: (config: Record<string, any>) => {
        openIframe: () => void;
      };
    };
  }
}
