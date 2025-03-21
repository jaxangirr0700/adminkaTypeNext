"use client";
import AddStudent from "@/components/AddStudent";
import DeleteStudents from "@/components/DeleteStudents";
import EditStudents from "@/components/EditStudents";
import useGlobalStore from "@/store/my-store";
import { GroupType } from "@/types";
import { Button, Switch, Table } from "antd";
import { useState } from "react";
import AddGroup from "./edits/AddGroup";
import { getRandomID } from "@/utils/number";
import EditGroups from "./edits/EditGroup";
import DeleteGroups from "./edits/DeleteGroup";

function GroupsPage() {
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
        <Button>Umumiy son: {state.groups.length}</Button>
        <Button>
          Faollar:
          {
            state.groups.filter((item: any) => {
              return item.active;
            }).length
          }
        </Button>
        <Button>
          Nofaollar:
          {state.groups.reduce((count: any, item: any) => {
            return !item.active ? count + 1 : count;
          }, 0)}
        </Button>
      </div>
      <div className="flex flex-col my-5">
        <AddGroup
          onClose={onClose}
          open={AddOpen}
          showDrawer={showDrawer}
          item={state.groups}
        />
        <EditGroups
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
              title: "Guruh nomi",
              dataIndex: "name",
            },

            {
              title: "O'quvchilar soni",
              dataIndex: "studentCount",
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
                        console.log("switch click");
                      }}
                    />
                  </div>
                );
              },
            },
            {
              title: "Delete",
              dataIndex: "s",
              render: (s, group) => {
                return (
                  <div>
                    <DeleteGroups
                      item={group}
                      setDeleteStudent={setDeleteStudent}
                      deleteStudent={deleteStudent}
                    />
                  </div>
                );
              },
            },
          ]}
          dataSource={state.groups.map((i: any) => {
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

export default GroupsPage;
