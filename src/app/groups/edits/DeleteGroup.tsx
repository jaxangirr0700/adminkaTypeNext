import useGlobalStore from "@/store/my-store";
import { GroupType } from "@/types";
import { DeleteFilled } from "@ant-design/icons";
import { Button } from "antd";

function DeleteGroups({ setDeleteStudent, deleteStudent, item }: any) {
  const state = useGlobalStore();

  function DeleteStudentFn() {
    const localStudent: GroupType[] | null = JSON.parse(
      localStorage.getItem("groups") || "null"
    );
    const newStudents = localStudent?.filter((i) => {
      if (i.id !== item.id) {
        return i;
      }
    });
    localStorage.setItem("groups", JSON.stringify(newStudents));
    useGlobalStore.setState({ groups: newStudents });
  }
  return (
    <div>
      <Button
        type="text"
        color="danger"
        variant="outlined"
        icon={<DeleteFilled />}
        onClick={() => {
          DeleteStudentFn();
        }}
      ></Button>
    </div>
  );
}

export default DeleteGroups;
