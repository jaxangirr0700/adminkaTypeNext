import useGlobalStore from "@/store/my-store";
import { StudentTypes } from "@/types";
import { DeleteFilled } from "@ant-design/icons";
import { Button } from "antd";

function DeleteStudents({ setDeleteStudent, deleteStudent, studentt }: any) {
  const state = useGlobalStore();
  function DeleteStudentFn() {
    const localStudent: StudentTypes[] | null = JSON.parse(
      localStorage.getItem("students") || "null"
    );
    const newStudents = localStudent?.filter((i) => {
      if (i.id !== studentt.id) {
        return i;
      }
    });
    localStorage.setItem("students", JSON.stringify(newStudents));
    useGlobalStore.setState({ students: newStudents });
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

export default DeleteStudents;
