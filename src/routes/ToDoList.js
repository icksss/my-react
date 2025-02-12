import { useEffect, useState, useRef } from 'react';
// import { todoStore, addCmdJson, deleteCmdJson } from '../store/todoStore';
// import { actionCreator } from '../store/todoStore';
import { add, remove } from '../store/todoStore';
import { connect } from 'react-redux';
import ToDoDetail from '../components/ToDoDetail';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function ToDoList({ toDo, addTodo, deleteTodoDispatch }) {
  // console.log('toDo : ', toDo);
  // console.log('dispatch : ', dispatch);
  const [inputValue, setInputValue] = useState('');
  const ulRef = useRef(null); // ul 요소를 참조하기 위한 ref

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = inputValue;
    addTodo(text);
    // todoStore.dispatch(addCmdJson(text));
    // dispatch(actionCreator.addCmdJson(text));

    setInputValue('');
  };
  // const deleteTodo = (id) => {
  //   console.log('id : ', id);
  //   todoStore.dispatch(deleteCmdJson(id));
  // };

  // const newElement = (tag, label, id, func) => {
  //   const element = document.createElement(tag);
  //   element.textContent = label;
  //   element.id = id;
  //   element.addEventListener('click', func);
  //   return element;
  // };
  // const addTodoPainting = () => {
  //   ulRef.current.innerHTML = '';
  //   const list = todoStore.getState();
  //   list.forEach((item) => {
  //     const li = newElement('li', item.text, item.id, () => null);
  //     const delBtn = newElement('button', 'Delete', item.id, () =>
  //       deleteTodo(item.id)
  //     );
  //     li.appendChild(delBtn);
  //     ulRef.current.appendChild(li);
  //   });
  // };

  // useEffect(() => {
  //   const unsubscribe = todoStore.subscribe(addTodoPainting);
  //   return () => unsubscribe();
  // }, []);

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
      {/* <ul ref={ulRef}></ul> */}
      <ul>
        {toDo.map((item) => (
          <ToDoDetail key={item.id} id={item.id} text={item.text} />

          // <li key={item.id}>
          //   {item.text}{' '}
          //   <button onClick={() => deleteTodoDispatch(item.id)}>del</button>
          // </li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    toDo: state
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    // addTodo: (text) => dispatch(actionCreator.addto(text)),
    // deleteTodoDispatch: (id) => dispatch(actionCreator.deleteto(id))
    addTodo: (text) => dispatch(add(text)),
    deleteTodoDispatch: (id) => dispatch(remove(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
