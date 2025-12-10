import * as react_jsx_runtime from 'react/jsx-runtime';
import React, { ReactNode } from 'react';

type Currency = 'NGN' | 'GHS' | 'USD' | 'ZAR' | 'KES' | 'XOF';
type PaymentChannels = 'bank' | 'card' | 'qr' | 'ussd' | 'mobile_money' | 'eft' | 'bank_transfer' | 'payattitude';
type Bearer = 'account' | 'subaccount';
type Phone = number | string;
type callback = () => void;
interface PaystackConnectSplit {
    account_id: string;
    share: number;
}
type PaystackConfig = {
    publicKey: string;
    email: string;
    amount: number;
    currency?: string;
    reference?: string;
    metadata?: Record<string, any>;
    plan?: string;
    quantity?: number;
    channels?: string[];
    firstname?: string;
    lastname?: string;
    phone?: Phone;
    label?: string;
    subaccount?: string;
    transaction_charge?: number;
    bearer?: Bearer;
    split_code?: string;
    split?: Record<string, any>;
    connect_split?: PaystackConnectSplit[];
    connect_account?: string;
    onBankTransferConfirmationPending?: callback;
    onSuccess?: (reference: any) => void;
    onClose?: () => void;
};

declare function usePaystack(config: PaystackConfig): {
    initializePayment: () => void;
    ready: boolean;
};

declare function PaystackProvider({ publicKey, children, }: {
    publicKey: string;
    children: ReactNode;
}): react_jsx_runtime.JSX.Element;
declare function usePaystackPublicKey(): string;

interface PaystackButtonProps extends PaystackConfig {
    className?: string;
    children?: React.ReactNode;
}
declare function PaystackButton({ className, children, ...config }: PaystackButtonProps): react_jsx_runtime.JSX.Element;

export { PaystackButton, PaystackProvider, usePaystack, usePaystackPublicKey };
export type { Currency, PaymentChannels, PaystackConfig };
