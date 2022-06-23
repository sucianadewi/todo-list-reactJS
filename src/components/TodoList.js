import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";

function TodoList({ todos, setTodos, setEditTodo }) {
  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };

  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div>
      {todos.map((todo) => (
        <li className="todo-row" key={todo.id}>
          {todo.completed ? (
            <>
              <div
                type="text"
                className="complete"
                onChange={(event) => event.preventDefault()}
              >
                {todo.title}
              </div>
              <div className="icons">
                <AiFillCheckCircle
                  className="complete-icon"
                  onClick={() => handleComplete(todo)}
                />
                <AiFillEdit
                  className="edit-icon"
                  onClick={() => handleEdit(todo)}
                />
                <AiFillCloseCircle
                  className="delete-icon"
                  onClick={() => handleDelete(todo)}
                />
              </div>
            </>
          ) : (
            <>
              <div type="text" onChange={(event) => event.preventDefault()}>
                {todo.title}
              </div>
              <div className="icons">
                <AiFillCheckCircle
                  className="complete-icon"
                  onClick={() => handleComplete(todo)}
                />
                <AiFillEdit
                  className="edit-icon"
                  onClick={() => handleEdit(todo)}
                />
                <AiFillCloseCircle
                  className="delete-icon"
                  onClick={() => handleDelete(todo)}
                />
              </div>
            </>
          )}
        </li>
      ))}
    </div>
  );
}

export default TodoList;
