export interface SidebarItemTypes {
  id: number;
  label: string;
  path: string;
}

export interface StudentTypes {
  id: number;
  key: string;
  name: string;
  age: number;
  gender: "Male" | "Female";
  grade: string;
  address: string;
}
export interface SidebarProps {
  collapse: boolean;
  setCollapse: (value: boolean) => void;
}
