import { loginUser } from "@/actions/auth";
import { useUserActions } from "@/store/user";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export const useLoginUser = () => {
  const { setUser } = useUserActions();
  const router = useRouter();

  return useMutation({
    mutationFn: loginUser,
    onSuccess: (res) => {
      setUser(res.data);
      toast.success(res.message);
      router.push("/");
    },
  });
};
