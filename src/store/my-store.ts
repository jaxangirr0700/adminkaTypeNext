import {
  CategoriesTypes,
  GroupType,
  OrdersTypes,
  ProductTypes,
  StudentTypes,
} from "@/types";
import { getRandomID } from "@/utils/number";
import { create } from "zustand";

const useGlobalStore = create(() => {
  const initialStudents: StudentTypes[] = [
    {
      id: getRandomID(),
      active: true,
      firstName: "Jaxangir",
      lastName: "Raxmarullayev",
      age: 0,
      gender: "male",
      group_id: getRandomID(),
    },
  ];
  const initialOrders: OrdersTypes[] = [
    {
      productID: getRandomID(),
      studentID: getRandomID(),
      id: getRandomID(),
      name: "Order",
      coutnt: 2,
      total_price: 1212,
      address: "Tashkent",
    },
  ];
  const initialCategories: CategoriesTypes[] = [
    {
      id: getRandomID(),
      active: true,
      name: "Categories",
      productCount: 0,
    },
  ];
  const initialProduct: ProductTypes[] = [
    {
      id: getRandomID(),
      active: true,
      name: "Product",
      price: 0,
      categorieId: getRandomID(),
    },
  ];
  const initialGroups = [
    {
      id: getRandomID(),
      name: "guruh 1",
      isActive: false,
      studentCount: 0,
    },
    {
      id: getRandomID(),
      name: "guruh 2",
      isActive: false,
      studentCount: 0,
    },
    {
      id: getRandomID(),
      name: "guruh 3",
      isActive: false,
      studentCount: 0,
    },
  ];

  const storedStudents: StudentTypes[] =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("students") || "[]")
      : [];
  const storedGroups: GroupType[] =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("groups") || "[]")
      : [];
  const storedCategories: CategoriesTypes[] =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("categories") || "[]")
      : [];
  const storedProducts: ProductTypes[] =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("products") || "[]")
      : [];
  const storedOrders: OrdersTypes[] =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("orders") || "[]")
      : [];

  return {
    students: storedStudents.length > 0 ? storedStudents : initialStudents,
    groups: storedGroups.length > 0 ? storedGroups : initialGroups,
    categories:
      storedCategories.length > 0 ? storedCategories : initialCategories,
    products: storedProducts.length > 0 ? storedProducts : initialProduct,
    orders: storedOrders.length > 0 ? storedOrders : initialOrders,
  };
});

export default useGlobalStore;
