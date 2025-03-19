"use client";
import AddStudent from "@/components/AddStudent";
import DeleteStudents from "@/components/DeleteStudents";
import EditStudents from "@/components/EditStudents";
import useGlobalStore from "@/store/my-store";
import { ProductTypes } from "@/types";
import { Button, Switch, Table } from "antd";
import { useState } from "react";
import AddProduct from "./edits/AddProduct";
import EditProducts from "./edits/EditProduct";
import DeleteProducts from "./edits/DeleteProducts";

function SrudentsPage() {
  const state = useGlobalStore();
  //   console.log(state);

  const [AddOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [EditStudent, setEditStudent] = useState({});
  const [deleteStudent, setDeleteStudent] = useState({});

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
      {/* {sum} */}
      <div className="flex gap-2 items-center justify-center  ">
        <Button>Umumiy son: {state.products.length}</Button>
        <Button>
          Faollar:
          {
            state.products.filter((item: any) => {
              return item.active;
            }).length
          }
        </Button>
        <Button>
          Nofaollar:{" "}
          {state.products.reduce((count: any, item: any) => {
            return !item.active ? count + 1 : count;
          }, 0)}
        </Button>
      </div>
      <div className="flex flex-col my-5">
        <AddProduct onClose={onClose} open={AddOpen} showDrawer={showDrawer} />
        <EditProducts
          editOpen={editOpen}
          showDrawerEdit={showDrawerEdit}
          onCloseEdit={onCloseEdit}
          EditStudent={EditStudent}
          setEditStudent={setEditStudent}
        />
        <Table
          columns={[
            {
              title: "ID",
              dataIndex: "id",
              render: (id: any, student, s) => {
                return (
                  <span
                    className=" cursor-pointer "
                    onClick={() => {
                      setEditOpen(true);
                      setEditStudent(student);
                    }}
                  >
                    {id}
                  </span>
                );
              },
            },
            {
              title: "Mahsulot Nomi",
              dataIndex: "name",
            },
            {
              title: "narxi",
              dataIndex: "price",
            },
            {
              title: "Categoriyasi",
              dataIndex: "categorieId",
              render: (group_id) => {
                const group = state.categories.find((f) => {
                  return f.id === group_id;
                });
                return group?.name;
              },
            },

            {
              title: "Active",
              dataIndex: "active",
              render: (v, studentt: any) => {
                return (
                  <div className="flex gap-1 items-center">
                    <Switch
                      checked={v}
                      onChange={(checked) => {
                        const localStudent: ProductTypes[] = JSON.parse(
                          localStorage.getItem("products") || "[]"
                        );

                        const new_students = localStudent.map((item) => {
                          if (item.id === studentt.id) {
                            return {
                              ...item,
                              key: item.id,
                              active: checked,
                            };
                          }
                          return item;
                        });
                        console.log(new_students);

                        localStorage.setItem(
                          "products",
                          JSON.stringify(new_students)
                        );
                        useGlobalStore.setState({ products: new_students });
                      }}
                    />
                    <DeleteProducts
                      studentt={studentt}
                      setDeleteStudent={setDeleteStudent}
                      deleteStudent={deleteStudent}
                    />
                  </div>
                );
              },
            },
          ]}
          dataSource={state.products.map((i: any) => {
            return {
              ...i,
              key: i.id,
            };
          })}
        />
        <Button
          color="danger"
          type="text"
          variant="text"
          onClick={() => {
            if (window.confirm("Hammasini o'chirishni tasdiqlaysizmi?")) {
              localStorage.clear();
              alert("Hammasi o'chirildi!");
            }
            //ha gptdan oldim windowni
          }}
        >
          Hammasini ochirish{" "}
        </Button>
      </div>
    </div>
  );
}

export default SrudentsPage;
