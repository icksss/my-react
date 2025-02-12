import { useEffect, useState, useRef } from 'react';
import todoStore from '../store/todoStore';

function ToDoList() {
  const [inputValue, setInputValue] = useState('');
  const ulRef = useRef(null); // ul 요소를 참조하기 위한 ref

  const addCmdJson = (text) => {
    return { type: 'ADD_TODO', text, id: Date.now() };
  };
  const deleteCmdJson = (id) => {
    return { type: 'DELETE_TODO', id };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = inputValue;
    todoStore.dispatch(addCmdJson(text));
    setInputValue('');
  };
  const deleteTodo = (id) => {
    todoStore.dispatch(deleteCmdJson(id));
  };

  const newElement = (tag, label, id, func) => {
    const element = document.createElement(tag);
    element.textContent = label;
    element.id = id;
    element.addEventListener('click', func);
    return element;
  };
  const addTodoPainting = () => {
    ulRef.current.innerHTML = '';
    const list = todoStore.getState();
    list.forEach((item) => {
      const li = newElement('li', item.text, item.id, () => null);
      const delBtn = newElement('button', 'Delete', item.id, () =>
        deleteTodo(item.id)
      );
      li.appendChild(delBtn);
      ulRef.current.appendChild(li);
    });
  };

  useEffect(() => {
    const unsubscribe = todoStore.subscribe(addTodoPainting);
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h1>ToDoList</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ul ref={ulRef}></ul>
    </div>
  );
}

export default ToDoList;
