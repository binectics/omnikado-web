import { loginUser } from "@/actions";
import { useAuthStoreActions } from "@/store/auth";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useLoginUser = () => {
  const { setAuth } = useAuthStoreActions();
  return useMutation({
    mutationFn: loginUser,
    onSuccess: (res) => {
      toast.success(res.message);
      setAuth(res.data?.access_token);
    },
  });
};

export const useSignUpUser = () => {};
