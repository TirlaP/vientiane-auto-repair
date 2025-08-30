import { create } from "zustand";

enum Home {
   Home1 = "home1",
   Home2 = "home2",
   Home3 = "home3",
}

type Store = {
   home: Home;
   setHome: (home: Home) => void;
};

const useUtils = create<Store>()((set) => ({
   home: Home.Home2,
   setHome: (home) => set({ home }),
}));

export { useUtils };
