import React, { useState, useEffect } from "react";
import "../../App.css";
import Todo from "../../components/Todos/Todo";
import Footer from "../../components/Todos/Footer";
import Form from "../../components/Todos/Form";
import Title from "../../components/Todos/Title";
import firebase from "../../config/firebase";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  const db = firebase.firestore();

  useEffect(() => {
    const unsubscribe = db.collection("todos").onSnapshot((snapshot) => {
      const todosData = [];
      snapshot.forEach((doc) => todosData.push({ ...doc.data(), id: doc.id }));
      setTodos(todosData);
    });

    return unsubscribe;
  }, []);

  // const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue === "") return;
    db.collection("todos").add({ text: inputValue, completed: false });
    setInputValue("");
    // inputRef.current.focus();
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    db.collection("todos")
      .doc(currentTodo.id)
      .set({ text: inputValue, completed: currentTodo.completed });
    setInputValue("");
    setIsEditing(false);
  };

  const handleEditTodo = (todo) => {
    setIsEditing(true);
    setInputValue(todo.text);
    setCurrentTodo(todo);
  };

  const handleDeleteTodo = (id) => {
    db.collection("todos").doc(id).delete();
  };

  const clearTodo = () => {
    db.collection("todos")
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs.forEach((snapshot) => {
          snapshot.ref.delete();
        });
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  return (
    <div className="app">
      <div className="todolist">
        <Title />
        <Form
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleSubmit={handleSubmit}
          handleUpdate={handleUpdate}
          isEditing={isEditing}
          setTodo={setTodos}
        />
        <Footer clearTodo={clearTodo} len={todos} />
        {todos.map((todo, index) => (
          <Todo
            todo={todo}
            index={index}
            todoList={todos}
            setTodo={setTodos}
            handleEditTodo={handleEditTodo}
            handleDeleteTodo={handleDeleteTodo}
            completed={todo.completed}
            key={todo.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
