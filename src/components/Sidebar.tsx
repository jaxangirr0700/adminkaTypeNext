"use client";

import { SidebarItemTypes } from "@/types";
import {
  FileOutlined,
  FolderOpenOutlined,
  HomeOutlined,
  OrderedListOutlined,
  ProductFilled,
  ToolOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="h-full w-48 p-4 border-2 rounded-xl">
      {/* <ul className="flex flex-col gap-2">
        {sidebarItems.map((item: SidebarItemTypes, index: number) => (
          <Link key={item.id} href={item.path}>
            <li
              className={`p-2 border-2 rounded-md transition ${
                pathname === item.path && "text-sky-800"
              }`}
            >
              {item.label}
            </li>
          </Link>
        ))}
      </ul> */}
      <Menu
        className="h-full rounded-xl"
        style={{
          padding: 1,
          maxWidth: 150,
          height: "100vh",
        }}
        selectedKeys={[pathname]}
        mode="inline"
        theme="dark"
        inlineCollapsed={false}
        items={[
          {
            key: "/",
            icon: <HomeOutlined />,
            label: <Link href={"/"}>Home</Link>,
          },

          {
            key: "/students",
            icon: <UserOutlined />,
            label: <Link href={"/students"}>Students</Link>,
          },
          {
            key: "/groups",
            icon: <FolderOpenOutlined />,
            label: <Link href={"/groups"}>Groups</Link>,
          },
          {
            key: "/products",
            icon: <FileOutlined />,
            label: <Link href={"/products"}>Products</Link>,
          },
          {
            key: "/categories",
            icon: <ProductFilled />,
            label: <Link href={"/categories"}>Categories</Link>,
          },
          {
            key: "/orders",
            icon: <OrderedListOutlined />,
            label: <Link href={"/orders"}>Buyurtmalar</Link>,
          },
          {
            key: "/todo",
            icon: <ToolOutlined />,
            label: <Link href={"/todo"}>TodoApi</Link>,
          },
        ]}
      />
    </aside>
  );
}
