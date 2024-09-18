import { usePaystackPayment } from "react-paystack";
import { HookConfig } from "react-paystack/dist/types";

const usePaystack = (config: HookConfig) => {
  const initializePayment = usePaystackPayment(config);
  return initializePayment;
};

export default usePaystack;
