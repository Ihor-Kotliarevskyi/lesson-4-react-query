import axios from "axios";
import OrderForm from "../OrderForm/OrderForm";
import "./App.module.css";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const fetchPerson = async (id: string) => {
  const response = await axios.get(`https://swapi.info/api/planets/${id}`);
  console.log(response);

  return response.data;
};

function App() {
  const [id, setId] = useState("1");

  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["person", id],
    queryFn: () => fetchPerson(id),
    enabled: Number(id) > 0,
  });
  console.log(data);

  return (
    <>
      <OrderForm />
      <button
        onClick={() => {
          setId(String(Number(id) - 1));
        }}
      >
        Previews
      </button>
      <button
        onClick={() => {
          setId(String(Number(id) + 1));
        }}
      >
        Next
      </button>
      {isLoading && <p>Loading...</p>}
      {isError && <p>An error occurred: {error.message}</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </>
  );
}

export default App;
