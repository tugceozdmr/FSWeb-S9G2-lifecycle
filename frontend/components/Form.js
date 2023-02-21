import React, { useState } from "react";

export default function Form(props) {
  const { doSubmit } = props;

  const [newToDo, setnewToDo] = useState("");
  

  const handleChange = (event) => {
    setnewToDo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    doSubmit(newToDo);
    setnewToDo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="newTodo"
        placeholder="type to do"
        onChange={handleChange}
        value={newToDo}
      />
      <input className="but" type="submit" value="Ekle" disabled={newToDo === ""} />
    </form>
  );
}