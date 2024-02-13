"use client";
import { useEffect } from "react";

interface HomeComponentProps {}

const HomeComponent = (props: HomeComponentProps) => {
  const fetchData = async () => {
    try {
      const response = await fetch("/api/products");
      const data = await response.json();
      console.log("data: ", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();

    return () => {};
  }, []);

  return <div>index</div>;
};

export default HomeComponent;
