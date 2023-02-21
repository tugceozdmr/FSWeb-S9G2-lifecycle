import axios from "axios";
import React, { useState, useEffect } from "react";
import Form from "./Form";
import TodoList from "./TodoList";


export default function App() {
  const [hideDone, setHideDone] = useState(false);

  const [todos, setTodos] = useState([]);

  const todolariGetir = () => {
    axios
    .get("http://localhost:9000/api/todos")
    .then((res) => {
      setTodos(res.data.data);
    });
  };

  useEffect(() => {
    todolariGetir();
  }, []);

  // etütte elemanda Todo.js içerisinde yaptığımızı burada yapıyoruz
  const handleCheckItem = (id) => {
    axios.patch("http://localhost:9000/api/todos/" + id).then((res) => {
      if (res.status === 200) {
        todolariGetir();
      }
    });
  };

  // etütte elemanda Form.js içerisinde yaptığımızı burada yapıyoruz
  const handleSubmit = (yeni) => {
    const yeniTodo = {
      isim: yeni,
      tamamlandi: false,
    };
    axios
    .post("http://localhost:9000/api/todos", yeniTodo)
    .then((res) => {
      if (res.status === 201) {
        // ekleme başarılı, todo listesini tekrar çek
        todolariGetir();
      } else {
        console.log("Todo ekleme başarısız");
      }
    });
  };

  const handleToggle = () => {
    setHideDone(!hideDone);
  };

  return (
    <>
      <TodoList
        list={hideDone ? todos.filter((oge) => oge.tamamlandi !== true) : todos}
        checkItem={handleCheckItem}
      />

      <Form doSubmit={handleSubmit} />

      <button className="but2" onClick={handleToggle}>
        Tamamlananları {hideDone ? "Göster" : "Gizle"}
      </button>
    </>
  );
}
