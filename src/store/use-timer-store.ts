import { create } from "zustand";

type TimerStore = {
  timer: number;
  decrement: () => void;
  reset: () => void;
};

const initialState = { timer: 30 };

export const useTimerStore = create<TimerStore>((set) => ({
  ...initialState,
  decrement: () => {
    set((state) => ({ timer: state.timer - 1 }));
  },

  reset: () => set({ timer: initialState.timer }),
}));
