import React from "react";
import { PaystackConfig } from "./types";
interface PaystackButtonProps extends PaystackConfig {
    className?: string;
    children?: React.ReactNode;
    ref?: React.Ref<HTMLButtonElement>;
}
export declare function PaystackButton({ className, children, ref, ...config }: PaystackButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
