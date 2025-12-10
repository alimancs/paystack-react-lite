import React from "react";
import { PaystackConfig } from "./types";
interface PaystackButtonProps extends PaystackConfig {
    className?: string;
    children?: React.ReactNode;
}
export declare function PaystackButton({ className, children, ...config }: PaystackButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
