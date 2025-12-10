export type Currency = 'NGN' | 'GHS' | 'USD' | 'ZAR' | 'KES' | 'XOF';
export type PaymentChannels = 'bank' | 'card' | 'qr' | 'ussd' | 'mobile_money' | 'eft' | 'bank_transfer' | 'payattitude';
type Bearer = 'account' | 'subaccount';
type Phone = number | string;
type callback = () => void;
interface PaystackConnectSplit {
    account_id: string;
    share: number;
}
export type PaystackConfig = {
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
export {};
