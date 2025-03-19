"use client";
import AddStudent from "@/components/AddStudent";
import DeleteStudents from "@/components/DeleteStudents";
import EditStudents from "@/components/EditStudents";
import useGlobalStore from "@/store/my-store";
import { Button, Switch, Table } from "antd";
import { useState } from "react";

type StudentType = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: "male" | "female";
  active: boolean;
};

type GlobalStoreType = {
  students: StudentType[];
  groups: any[];
};

function SrudentsPage() {
  const state = useGlobalStore();
  console.log(state);

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

  // const num: string[] = ["olma", "anor", "nok"];
  // const sum = num.reduce((prew, item, {}): any => {
  //   if (item.length > 0) {
  //     console.log(item);

  //     return prew.length;
  //   }

  //   return item.length;
  // });
  return (
    <div className="flex flex-col items-center">
      {/* {sum} */}
      <div className="flex gap-2 items-center justify-center  ">
        <Button>Umumiy son: {state.students.length}</Button>
        <Button>
          Faollar:
          {
            state.students.filter((item: any) => {
              return item.active;
            }).length
          }
        </Button>
        <Button>
          Nofaollar:{" "}
          {state.students.reduce((count: any, item: any) => {
            return !item.active ? count + 1 : count;
          }, 0)}
        </Button>
      </div>
      <div className="flex flex-col my-5">
        <AddStudent onClose={onClose} open={AddOpen} showDrawer={showDrawer} />
        <EditStudents
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
              title: "Ism",
              dataIndex: "firstName",
            },
            {
              title: "Familiya",
              dataIndex: "lastName",
            },
            {
              title: "Guruh",
              dataIndex: "group_id",
              render: (group_id) => {
                const group = state.groups.find((f) => {
                  return f.id === group_id;
                });
                return group?.name;
              },
            },
            {
              title: "Jinsi",
              dataIndex: "gender",
              render: (v, item: any) => {
                return (
                  <span key={item.id}>{v === "male" ? "Erkak" : "Ayol"}</span>
                );
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
                        const localStudent: StudentType[] = JSON.parse(
                          localStorage.getItem("students") || "[]"
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
                          "students",
                          JSON.stringify(new_students)
                        );
                        useGlobalStore.setState({ students: new_students });
                      }}
                    />
                    <DeleteStudents
                      studentt={studentt}
                      setDeleteStudent={setDeleteStudent}
                      deleteStudent={deleteStudent}
                    />
                  </div>
                );
              },
            },
          ]}
          dataSource={state.students.map((i: any) => {
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
