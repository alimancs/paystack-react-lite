var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { usePaystack } from "./usePaystack";
export function PaystackButton(_a) {
    var { className, children = "Pay Now" } = _a, config = __rest(_a, ["className", "children"]);
    const { initializePayment, ready } = usePaystack(config);
    return (_jsx("button", { className: className, disabled: !ready, onClick: () => {
            initializePayment();
        }, children: children }));
}
