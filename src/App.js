import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import SearchInput from "./components/SearchInput";
import Info from "./components/Info";
import Todos from "./components/Todos";
import Empty from "./components/Empty";

import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Susu",
      completed: false,
      count: 1,
    },
    {
      id: 2,
      title: "Kopi",
      completed: false,
      count: 1,
    },
    {
      id: 3,
      title: "Teh",
      completed: false,
      count: 1,
    },
  ]);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      alert("List cannot be empty");
      return;
    }

    const addTodos = [
      ...todos,
      {
        title: value,
        count: 1,
      },
    ];
    setTodos(addTodos);
    setValue("");
  };

  const handleAdditionCount = (index) => {
    const newTodos = [...todos];
    newTodos[index].count = newTodos[index].count + 1;
    setTodos(newTodos);
  };
  const handleSubtractionCount = (index) => {
    const newTodos = [...todos];
    if (newTodos[index].count > 0) {
      //pengurangan dilakukan jika value masih > dari 0
      newTodos[index].count = newTodos[index].count - 1;
    } else {
      //Jika sudah nol tapi masih dikurangi maka akan menghapus data
      newTodos.splice(index, 1);
    }

    setTodos(newTodos);
  };
  const getTotalCounts = () => {
    const totalCounts = todos.reduce((total, num) => {
      return total + num.count;
    }, 0);
    return totalCounts;
  };
  return (
    <>
      <Navbar />
      <Container>
        <SearchInput
          onSubmit={handleSubmit}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <Info
          todosLength={todos.length}
          totalCounts={getTotalCounts()}
          onDelete={() => setTodos([])}
        />

        {todos.length > 0 ? (
          <Todos
            todos={todos}
            onSubstraction={(index) => {
              handleSubtractionCount(index);
            }}
            onAddition={(index) => {
              handleAdditionCount(index);
            }}
          />
        ) : (
          <Empty />
        )}
      </Container>
    </>
  );
}

export default App;
