"use client";
import useGlobalStore from "@/store/my-store";
import { Button, Table } from "antd";
import { useState } from "react";
import AddOrders from "./edits/Addorders";
import DeleteOrders from "./edits/Deleteorders";
import EditOrders from "./edits/EditOrders";

function OrdersPage() {
  const state = useGlobalStore();

  const [AddOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [EditOrder, setEditOrder] = useState({});
  const [deleteOrder, setDeleteOrder] = useState({});
  const showDrawer = () => {
    setAddOpen(true);
  };
  const showDrawerEdit = () => {
    setEditOpen(true);
  };

  const onClose = () => {
    setAddOpen(false);
  };
  const onCloseEdit = () => {
    setEditOpen(false);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-2 items-center justify-center">
        <Button>Umumiy son: {state.orders.length}</Button>
        <Button>
          Faollar: {state.orders.filter((item: any) => item.active).length}
        </Button>
        <Button>
          Nofaollar: {state.orders.filter((item: any) => !item.active).length}
        </Button>
      </div>
      <div className="flex flex-col my-5">
        <AddOrders onClose={onClose} open={AddOpen} showDrawer={showDrawer} />
        <EditOrders
          editOpen={editOpen}
          showDrawerEdit={showDrawerEdit}
          onCloseEdit={onCloseEdit}
          EditStudent={EditOrder}
          setEditStudent={setEditOrder}
        />
        <Table
          columns={[
            {
              title: "ID",
              dataIndex: "id",
              render: (id, order) => (
                <span
                  className="cursor-pointer"
                  onClick={() => {
                    setEditOpen(true);
                    setEditOrder(order);
                  }}
                >
                  {id}
                </span>
              ),
            },
            {
              title: "Nomi",
              dataIndex: "name",
            },
            {
              title: "Narx",
              render: (order) => {
                const product = state.products.find(
                  (s) => s.id === order.productID
                );
                return product ? product.price * order.count : 0;
              },
            },

            {
              title: "Mahsulot Soni",
              dataIndex: "count",
            },
            {
              title: "Manzil",
              dataIndex: "address",
            },
            {
              title: "Mijoz",
              dataIndex: "studentID",
              render: (studentID) => {
                const student = state.students.find((s) => s.id === studentID);
                return student ? student.firstName : "Noma'lum";
              },
            },
            {
              title: "Kategoriyasi",
              dataIndex: "productID",
              render: (productID) => {
                const product = state.products.find((p) => p.id === productID);
                return product ? product.name : "Noma'lum";
              },
            },
            {
              title: "Delete",
              dataIndex: "productID",
              render: (productID, order) => {
                return (
                  <DeleteOrders
                    studentt={order}
                    setDeleteStudent={setDeleteOrder}
                    deleteStudent={deleteOrder}
                  />
                );
              },
            },
          ]}
          dataSource={state.orders.map((order) => ({
            ...order,
            key: order.id,
          }))}
        />
        <Button
          color="danger"
          type="text"
          variant="text"
          onClick={() => {
            if (window.confirm("Hammasini o'chirishni tasdiqlaysizmi?")) {
              localStorage.removeItem("orders");
              alert("Hammasi o'chirildi!");
            }
          }}
        >
          Hammasini ochirish
        </Button>
      </div>
    </div>
  );
}

export default OrdersPage;
