import { create } from "zustand";
import { persist } from "zustand/middleware";

const useEmployeeStore = create(
  persist(
    (set) => ({
      employees: [],
      addEmployee: (employee) =>
        set((state) => ({
          employees: [
            ...state.employees,
            {
              ...employee,
              id: crypto.randomUUID(), // Add unique ID for each employee
            },
          ],
        })),
    }),
    {
      name: "hrnet-employees", // localStorage name
    }
  )
);

export default useEmployeeStore;
