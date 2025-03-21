export type GlobalStoreTypes = {
  students: StudentTypes[];
  groups: GroupType[];
  categories: CategoriesTypes[];
  products: ProductTypes[];
  language: Language;
};

export interface SidebarItemTypes {
  id: number;
  label: string;
  path: string;
}

export type Language = "uzbek" | "english" | "russian";
export type OrdersTypes = {
  categorieId: number;

  productID: number;
  studentID: number;
  id: number;
  name: string;
  coutnt: number;
  total_price: number;
  address: string;
  status: "qabul_qilindi" | "yetkazib_berilmoqda" | "tugallandi";
};
export interface CategoriesTypes {
  id: number;
  active: boolean;
  name: string;
  productCount: number;
  image?: string;
}
export interface ProductTypes {
  id: number;
  active: boolean;
  name: string;
  price: number;
  categorieId: number;
  image?: string;
}
export interface StudentTypes {
  id: number;
  active: boolean;
  firstName: string;
  lastName: string;
  age: number;
  gender: "male" | "female";
  group_id: number;
}
export interface SidebarProps {
  collapse: boolean;
  setCollapse: (value: boolean) => void;
}

export type GroupType = {
  id: number;
  name: string;
  isActive: boolean;
  studentCount: number;
};
