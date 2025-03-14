import { SidebarItemTypes, StudentTypes } from "@/types";
import { ColumnsType } from "antd/es/table";

export const sidebarItems: SidebarItemTypes[] = [
  {
    id: 1,
    label: "Home",
    path: "/",
  },
  {
    id: 2,
    label: "Students",
    path: "/students",
  },
  {
    id: 3,
    label: "Groups",
    path: "/groups",
  },
];
