import { resetPassword } from "@/actions/auth";
import { ModalType, useModalActions } from "@/store/modal";
import { useMutation } from "@tanstack/react-query";

export const useResetPassword = () => {
  const { openModal } = useModalActions();

  return useMutation({
    mutationFn: resetPassword,
    onSuccess: (res) => {
      openModal(ModalType.Success, {
        message: res.message,
        redirectUrl: "/login",
      });
    },
  });
};
