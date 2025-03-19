import useGlobalStore from "@/store/my-store";
import { Button, Drawer, Form, Input, InputNumber, Select, Space } from "antd";
import FormItem from "antd/es/form/FormItem/index.js";

function EditOrders({
  onCloseEdit,
  editOpen,
  EditStudent,
  setEditStudent,
}: any) {
  const state = useGlobalStore();
  return (
    <>
      <Drawer
        title="Yangi student qo'shish"
        width={500}
        onClose={onCloseEdit}
        open={editOpen}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
        extra={<Space>{/* <Button onClick={onClose}>X</Button> */}</Space>}
        destroyOnClose
      >
        <Form
          initialValues={EditStudent}
          onFinish={(values) => {
            const localStudent = localStorage.getItem("orders");
            const realStudents = localStudent ? JSON.parse(localStudent) : [];

            const updatedStudents = realStudents.map((student: any) => {
              if (student.id === EditStudent.id) {
                return {
                  ...student,
                  ...values,
                };
              }
              return student;
            });
            useGlobalStore.setState({ orders: updatedStudents });
            localStorage.setItem("orders", JSON.stringify(updatedStudents));
            onCloseEdit();
          }}
        >
          <FormItem
            label="Nomi"
            name="name"
            rules={[{ required: true, message: "Nomi kiritilmadi!!!" }]}
          >
            <Input />
          </FormItem>
          <FormItem
            label="Manzil"
            name="address"
            rules={[{ required: true, message: "Manzil kiritilmadi!!!" }]}
          >
            <Input />
          </FormItem>
          <FormItem
            label="Nechta"
            name="count"
            rules={[{ required: true, message: "Nechaligi kiritilmadi!!!" }]}
          >
            <InputNumber />
          </FormItem>
          <FormItem
            label="Mijoz"
            name="studentID"
            rules={[{ required: true, message: "Mijozni tanlang!" }]}
          >
            <Select
              options={state.students.map((g) => {
                return {
                  label: g.firstName,
                  value: g.id,
                };
              })}
            />
          </FormItem>{" "}
          <FormItem
            label="Mahsulot"
            name="productID"
            rules={[{ required: true, message: "Mahsulotni tanlang!" }]}
          >
            <Select
              options={state.products.map((g) => {
                return {
                  label: g.name,
                  value: g.id,
                };
              })}
            />
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </FormItem>
        </Form>
      </Drawer>
    </>
  );
}

export default EditOrders;
