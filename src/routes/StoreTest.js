// import { useSelector, useDispatch } from 'react-redux';
// import { add, minus } from '../store';
import { useEffect, useRef, useState } from 'react';
import { countStore, handleAdd, handleMinus } from '../store';
import { configureStore } from '@reduxjs/toolkit';

const ADD_TEXT = 'ADD_TEXT';
const DELETE_TEXT = 'DELETE_TEXT';

const num = document.getElementById('number');
const input = document.getElementById('input');

const uiReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TEXT:
            return [...state, { text: action.text, id: Date.now() }];
        case DELETE_TEXT:
            console.log('DELETE_TEXT');
            return [];
        default:
            return state;
    }
};

const uiStore = configureStore({
    reducer: uiReducer
});

function StoreTest() {
    const [inputValue, setInputValue] = useState('');
    // const count = useSelector((state) => state.count);
    // const dispatch = useDispatch();

    const onChange = (el) => {
        console.log('onChange1', el);
        el.innerHTML = countStore.getState();
    };
    countStore.subscribe(() => onChange(document.getElementById('number')));

    // const createTodo = (text) => {
    //     const li = document.createElement('li');
    //     li.innerHTML = text;
    //     const deleteButton = document.createElement('button');
    //     deleteButton.innerHTML = 'delete';
    //     deleteButton.addEventListener('click', () => {
    //         uiStore.dispatch({ type: DELETE_TEXT });
    //     });
    //     li.appendChild(deleteButton);
    //     ul.appendChild(li);
    // };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputValue);
        // createTodo(inputValue);
        uiStore.dispatch({ type: ADD_TEXT, text: inputValue });
    };
    const paintTodo = () => {
        const state = uiStore.getState();
        const ul = document.querySelector('ul');
        const li = document.createElement('li');
        li.id = state.id;
        li.innerHTML = state.text;
        // const deleteButton = document.createElement('button');
        // deleteButton.innerHTML = 'delete';
        // deleteButton.addEventListener('click', () => {
        //     uiStore.dispatch({ type: DELETE_TEXT, id: state.id });
        // });
        // li.appendChild(deleteButton);
        ul.appendChild(li);
    };
    uiStore.subscribe(() => paintTodo());

    return (
        <div>
            <h1>StoreTest</h1>
            <div>
                <button id="add" onClick={handleAdd}>
                    +
                </button>
                <span id="number">{countStore.getState()}</span>
                <button id="minus" onClick={handleMinus}>
                    -
                </button>
            </div>
            <hr />
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button onClick={handleSubmit}>add</button>
                </form>
                <ul></ul>
            </div>
        </div>
    );
}

export default StoreTest;
