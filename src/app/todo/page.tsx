"use client";
import { TodoType, useFetchData } from "@/hooks/useFetchData";
import { Spin } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

function TodoListPage() {
  const [dataTwo, setDataTwo] = useState<TodoType[]>([]);
  async function axiosData() {
    const resOne = await axios.get(
      `https://jsonplaceholder.typicode.com/todos`
    );
    setDataTwo(resOne.data);
  }
  useEffect(() => {
    axiosData();
  }, []);
  console.log(dataTwo);

  const { data, loading } = useFetchData(
    `https://jsonplaceholder.typicode.com/todos`
  );

  return (
    <div className="flex items-center flex-col w-full">
      <h1 className="text-2xl font-bold ">TodoListPage</h1>
      {loading && (
        <div className="m-auto w-full flex items-center justify-center my-5">
          <Spin size="large" />
        </div>
      )}
      <div className="grid grid-cols-2 gap-6">
        <div className="max-h-[700px] overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4">UseFetchData</h2>
          <ul className="grid grid-cols-1 gap-4 items-center justify-center justify-items-center">
            {data.map((i) => {
              return (
                <li
                  key={i.id}
                  className="max-w-[370px] border border-yellow-300 rounded-xl hover:scale-105 transition-transform duration-300 px-4 py-2 text-md font-semibold cursor-pointer shadow-md"
                >
                  <span>{i.title}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="max-h-[700px] overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4">UseAxiosData</h2>
          <ul className="grid grid-cols-1 gap-4">
            {dataTwo.map((i) => {
              return (
                <li
                  key={i.id}
                  className="border border-green-500 rounded-xl hover:scale-105 transition-transform duration-300 px-4 py-2 text-md font-semibold cursor-pointer shadow-md"
                >
                  <span>{i.title}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TodoListPage;
