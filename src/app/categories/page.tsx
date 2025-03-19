"use client";
import useGlobalStore from "@/store/my-store";
import { getRandomID } from "@/utils/number";
import { Button, Switch, Table } from "antd";
import { useState } from "react";
import AddCategories from "./edits/AddCatigories";
import EditCategories from "./edits/EditCategories";
import { CategoriesTypes } from "@/types";
import DeleteStudents from "@/components/DeleteStudents";
import DeleteCategories from "./edits/DeleteCategories";

function CategoriesPage() {
  const state = useGlobalStore();

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
      <div className="flex gap-2 items-center justify-center  ">
        <Button>Umumiy son: {state.categories.length}</Button>
        <Button>
          Faollar:
          {
            state.categories.filter((item: any) => {
              return item.active;
            }).length
          }
        </Button>
        <Button>
          Nofaollar:
          {state.categories.reduce((count: any, item: any) => {
            return !item.active ? count + 1 : count;
          }, 0)}
        </Button>
      </div>
      <div className="flex flex-col my-5">
        <AddCategories
          onClose={onClose}
          open={AddOpen}
          showDrawer={showDrawer}
          item={state.groups}
        />
        <EditCategories
          editOpen={editOpen}
          showDrawerEdit={showDrawerEdit}
          onCloseEdit={onCloseEdit}
          EditStudent={EditStudent}
          setEditStudent={setEditStudent}
        />
        <Table
          // rowKey={(i) => {
          //   return i.
          // }}
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
              title: "Kategoriya nomi",
              dataIndex: "name",
            },

            {
              title: "Mahsulotlar soni",
              dataIndex: "productCount",
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
                        const localStudent: CategoriesTypes[] = JSON.parse(
                          localStorage.getItem("categories") || "[]"
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

                        localStorage.setItem(
                          "categories",
                          JSON.stringify(new_students)
                        );
                        useGlobalStore.setState({ categories: new_students });
                      }}
                    />
                    <DeleteCategories
                      studentt={studentt}
                      setDeleteStudent={setDeleteStudent}
                      deleteStudent={deleteStudent}
                    />
                  </div>
                );
              },
            },
          ]}
          dataSource={state.categories.map((i: any) => {
            return {
              ...i,
              key: getRandomID(),
            };
          })}
        />
        <Button color="danger" type="text" variant="text" onClick={() => {}}>
          Hammasini ochirish{" "}
        </Button>
      </div>
    </div>
  );
}

export default CategoriesPage;
