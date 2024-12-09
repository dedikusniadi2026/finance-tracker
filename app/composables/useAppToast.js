export const useAppToast = () => {
  const toast = useToast();

  return {
    toastSuccess: ({ title, desciption = null }) => {
      toast.add({
        title,
        desciption,
        icon: "i-heroicons-check-circle",
        color: "green",
      });
    },
    toastError: ({ title, desciption = null }) => {
      toast.add({
        title,
        desciption,
        icon: "i-heroicons-exclamation-circle",
        color: "red",
      });
    },
  };
};
