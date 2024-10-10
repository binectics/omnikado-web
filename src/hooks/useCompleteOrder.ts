import { completeOrder } from "@/actions/cart";
import { useMutation } from "@tanstack/react-query";

const useCompleteOrder = () => {
  return useMutation({
    mutationFn: completeOrder,
    onSuccess: (res) => {
      console.log(res.data);
    },
  });
};

export default useCompleteOrder;
