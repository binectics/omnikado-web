import { forgotPassword } from "@/actions/auth";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "./use-toast";

export const useForgotPassword = () => {
  const { toast } = useToast();

  return useMutation({
    mutationFn: forgotPassword,
    onSuccess: (res) => {
      toast({
        title: res.message,
      });
    },
  });
};
