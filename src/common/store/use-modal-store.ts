import { create } from "zustand";

type AlertModal = {
  title?: string;
  description: string;
};

type ModalStore = {
  isOpen: boolean;
  title?: string;
  description: string;
  openModal: () => void;
  setAlert: (data: AlertModal) => void;
};

export const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  title: "",
  description: "",
  openModal: () => set((state) => ({ isOpen: !state.isOpen })),
  setAlert: ({ title, description }: AlertModal) =>
    set((state) => ({ isOpen: !state.isOpen, title, description })),
}));
