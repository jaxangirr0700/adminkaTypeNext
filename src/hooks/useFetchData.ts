"use client";
import { useEffect, useState } from "react";

export type TodoType = {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
};

export function useFetchData(url: string) {
  const [data, setData] = useState<TodoType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((er) => {
        console.log(er);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { data, loading };
}
