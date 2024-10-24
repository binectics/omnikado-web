import { loginUser } from "@/actions/auth";
import { useUserActions } from "@/store/user";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useToast } from "./use-toast";

export const useLoginUser = () => {
  const { setUser } = useUserActions();
  const router = useRouter();
  const { toast } = useToast();

  return useMutation({
    mutationFn: loginUser,
    onSuccess: (res) => {
      setUser(res.data);
      toast({ title: res.message });
      router.push("/");
    },
  });
};
