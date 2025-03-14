import { getRandomID } from "@/utils/number";
import { create } from "zustand";

const useGlobalStore = create(() => {
  let newStudents = [];

  if (typeof window !== "undefined") {
    const storedStudents = localStorage.getItem("students");
    newStudents = storedStudents
      ? JSON.parse(storedStudents)
      : [
          {
            id: getRandomID(),
            active: true,
            firstName: "Jaxangir",
            lastName: "Raxmarullayev",
            age: 0,
            gender: "male",
          },
        ];
  }
  return {
    students: newStudents,
    groups: [],
  };
});

export default useGlobalStore;
